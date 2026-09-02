import { NextRequest, NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validation/booking';
import { sanitizeText } from '@/lib/validation/sanitize';
import { sendBookingEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input.' }, { status: 422 });
  }

  const data = parsed.data;

  try {
    await sendBookingEmail({
      customerName: sanitizeText(data.customerName),
      customerEmail: data.customerEmail,
      customerPhone: sanitizeText(data.customerPhone),
      serviceType: sanitizeText(data.serviceType),
      notes: data.notes ? sanitizeText(data.notes) : undefined,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to send email. Try again later.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
