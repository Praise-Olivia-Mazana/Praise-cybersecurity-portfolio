import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or less"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be 255 characters or less"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1,000 characters or less"),
});

export type ContactInput = z.infer<typeof contactSchema>;

const PREFERRED_RECIPIENT = "praise.olivia.mazana@gmail.com";
const FROM_EMAIL = "Praise Portfolio <onboarding@resend.dev>";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend/emails";

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    const lovableApiKey = process.env.LOVABLE_API_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Database configuration is missing.");
    }

    if (!lovableApiKey || !resendApiKey) {
      throw new Error("Email configuration is missing.");
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });

    const { error: dbError } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (dbError) {
      console.error("Failed to save contact message:", dbError);
      throw new Error("Unable to save your message. Please try again.");
    }

    const html = `
      <h2>New portfolio contact message</h2>
      <p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    `;

    const sendResult = await sendEmailWithFallback(
      lovableApiKey,
      resendApiKey,
      PREFERRED_RECIPIENT,
      data.name,
      html,
    );

    if (!sendResult.ok) {
      console.error("Resend gateway error:", sendResult.status, sendResult.body);
      throw new Error("Your message was saved, but the email notification failed.");
    }

    return { success: true };
  });

async function sendEmailWithFallback(
  lovableApiKey: string,
  resendApiKey: string,
  recipient: string,
  name: string,
  html: string,
): Promise<{ ok: boolean; status: number; body: string }> {
  const result = await sendEmail(lovableApiKey, resendApiKey, recipient, name, html);

  if (result.ok) return result;

  // Resend test keys can only send to the account owner email. If that is the case,
  // retry to the address mentioned in the provider error so the notification still arrives.
  try {
    const parsed = JSON.parse(result.body);
    const match = /\(([^)]+)\)/.exec(parsed.message ?? "");
    if (parsed.statusCode === 403 && match?.[1]?.includes("@")) {
      const fallbackEmail = match[1].trim();
      console.log("Retrying Resend notification to sandbox-allowed email:", fallbackEmail);
      return sendEmail(lovableApiKey, resendApiKey, fallbackEmail, name, html);
    }
  } catch {
    // ignore parse errors
  }

  return result;
}

async function sendEmail(
  lovableApiKey: string,
  resendApiKey: string,
  to: string,
  name: string,
  html: string,
): Promise<{ ok: boolean; status: number; body: string }> {
  const response = await fetch(GATEWAY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": resendApiKey,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject: `New portfolio message from ${name}`,
      html,
    }),
  });

  const body = await response.text();
  return { ok: response.ok, status: response.status, body };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
