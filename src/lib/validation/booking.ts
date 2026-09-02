import { z } from 'zod';

export const bookingSchema = z.object({
  customerName: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[\p{L}0-9 .'-]+$/u),
  customerEmail: z.string().email().max(254),
  customerPhone: z
    .string()
    .min(6)
    .max(30)
    .regex(/^[+()\-\s\d]+$/),
  serviceType: z.string().min(2).max(100),
  notes: z.string().max(1200).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
