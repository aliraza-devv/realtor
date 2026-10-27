import { NextResponse } from "next/server";

type Inquiry = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  interest?: unknown;
  property?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !emailPattern.test(email) || !message) {
    return NextResponse.json(
      { error: "Name, a valid email and a message are required." },
      { status: 422 },
    );
  }

  // TODO: forward to your CRM, email provider or database here.
  console.log(
    `[inquiry] ${name}${typeof body.property === "string" ? ` about "${body.property}"` : ""}`,
  );

  return NextResponse.json({ ok: true });
}
