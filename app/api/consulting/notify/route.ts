import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, challenge, packageId, bookingDate, bookingTime } = data;

    // 1. Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Consulting" <${process.env.SMTP_FROM}>`,
      to: "peterolympusphiri@icloud.com",
      subject: "New Consulting Booking",
      html: `
        <h1>New Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Challenge:</strong> ${challenge}</p>
        <p><strong>Package:</strong> ${packageId}</p>
        <p><strong>Date/Time:</strong> ${bookingDate} ${bookingTime}</p>
      `,
    });

    // 2. Send WhatsApp via CallMeBot
    const whatsappUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (whatsappUrl) {
      const message = `New%20booking%20from%20${encodeURIComponent(name)}%20(${email})%20for%20${packageId}%20on%20${bookingDate}%20${bookingTime}`;
      await fetch(`${whatsappUrl}${message}`, { method: "GET" });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 });
  }
}