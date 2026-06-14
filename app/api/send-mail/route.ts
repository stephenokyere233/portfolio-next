import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isBlockedEmail } from "../../../lib/email-validation";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "thuqpalmer@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const { message, subject, email } = await request.json();

  if (!email || typeof email !== "string" || isBlockedEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const mailOptions = {
    from: "Portfolio<thuqpalmer@gmail.com>",
    to: "stephenokyere621@gmail.com",
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch {
    return NextResponse.json(
      { error: "An error occurred while sending the email." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
