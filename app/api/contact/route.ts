import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Honeypot spam check: if the hidden company field has a value, treat as spam and return success silently
    if ((body as any).company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !subject || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: [process.env.RESEND_EMAIL_TO || ""],
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial, Helvetica, sans-serif;color:#333;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" style="padding:24px 12px;">
                <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(20,20,40,0.08)">
                  <tr style="background:#2f4f8f;color:#fff">
                    <td style="padding:20px 28px;">
                      <h2 style="margin:0;font-size:20px;letter-spacing:0.2px">New Contact Submission</h2>
                      <p style="margin:6px 0 0;font-size:13px;opacity:0.9">From your website contact form</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:20px 28px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="vertical-align:top;padding-right:16px;width:65%">
                            <h3 style="margin:0 0 8px 0;font-size:16px;color:#111">Message</h3>
                            <div style="font-size:14px;line-height:1.6;color:#444;background:#fafafa;border:1px solid #eee;padding:12px;border-radius:8px">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

                            <p style="margin:16px 0 0 0;font-size:13px;color:#666">This message was submitted via the contact form on your website.</p>
                          </td>

                          <td style="vertical-align:top;padding-left:16px;width:35%">
                            <div style="background:#f3f6ff;border:1px solid #eef2ff;padding:12px;border-radius:8px">
                              <h4 style="margin:0 0 6px 0;font-size:14px;color:#111">Sender Details</h4>
                              <p style="margin:6px 0;font-size:13px"><strong>Name:</strong><br/> ${name}</p>
                              <p style="margin:6px 0;font-size:13px"><strong>Email:</strong><br/> <a href="mailto:${email}" style="color:#2f4f8f;text-decoration:none">${email}</a></p>
                              <p style="margin:6px 0;font-size:13px"><strong>Phone:</strong><br/> ${phone}</p>
                              <p style="margin:6px 0;font-size:13px"><strong>Subject:</strong><br/> ${subject}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr style="border-top:1px solid #f0f0f5">
                    <td style="padding:14px 28px;background:#fff">
                      <p style="margin:0;font-size:12px;color:#888">You are receiving this email because someone submitted the contact form on your website. Reply directly to the sender using the reply-to address.</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 28px;background:#f9fafb;text-align:center;font-size:12px;color:#999">
                      © ${new Date().getFullYear()} elmongultomlawfirm — Sent via Website
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
