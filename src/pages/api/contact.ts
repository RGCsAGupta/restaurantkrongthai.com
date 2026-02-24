export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const phone = data.get("phone")?.toString() || "Not provided";
  const message = data.get("message")?.toString();
  const locale = data.get("locale")?.toString() || "en";

  if (!name || !email || !message) {
    const errorPath = locale === "fr" ? "/fr/contact/" : "/en/contact/";
    return redirect(`${errorPath}?error=missing`, 302);
  }

  try {
    await resend.emails.send({
      from: "Krong Thai Website <noreply@restaurantkrongthai.com>",
      to: "restaurantkrongthai@gmail.com",
      replyTo: email,
      subject: `New contact message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(message)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Language</td><td style="padding:8px">${locale === "fr" ? "French" : "English"}</td></tr>
        </table>
      `,
    });
  } catch {
    const errorPath = locale === "fr" ? "/fr/contact/" : "/en/contact/";
    return redirect(`${errorPath}?error=send`, 302);
  }

  const thankYouPath = locale === "fr" ? "/fr/merci/" : "/en/thanks/";
  return redirect(thankYouPath, 302);
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
