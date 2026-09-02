import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface BookingEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  notes?: string;
}

export async function sendBookingEmail(data: BookingEmailData): Promise<void> {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: data.customerEmail,
    subject: `New Booking Request — ${data.customerName}`,
    text: [
      `Name:    ${data.customerName}`,
      `Email:   ${data.customerEmail}`,
      `Phone:   ${data.customerPhone}`,
      `Service: ${data.serviceType}`,
      data.notes ? `Notes:   ${data.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <h2 style="font-family:sans-serif">New Booking Request</h2>
      <table style="font-family:sans-serif;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${data.customerName}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td><a href="mailto:${data.customerEmail}">${data.customerEmail}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Phone</strong></td><td>${data.customerPhone}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Service</strong></td><td>${data.serviceType}</td></tr>
        ${data.notes ? `<tr><td style="padding:4px 12px 4px 0"><strong>Notes</strong></td><td>${data.notes}</td></tr>` : ''}
      </table>
    `,
  });
}
