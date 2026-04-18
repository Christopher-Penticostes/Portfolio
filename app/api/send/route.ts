import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Christopher Penticostes Portfolio <onboarding@resend.dev>',
      to: ['christopherpenticostes890@gmail.com'],
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333;">
          
          <h2 style="margin-bottom: 4px;">📩 New Contact Form Submission</h2>
          <p style="color: #555;">You’ve received a new message from your portfolio website.</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <h4 style="margin-bottom: 8px; color: #111;">Sender Details:</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 100px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Subject</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <p style="font-size: 13px; color: #aaa;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) return Response.json({ error }, { status: 500 });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
