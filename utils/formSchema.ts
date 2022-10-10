import { z } from 'zod';

export const ContactFormSchema = z
	.object({
		from_name: z.string().min(2, 'name must be atleast 2 characters long'),
    reply_to: z.string().email('Please enter a valid email address.'),
		message: z.string().min(2, 'message must be atleast 2 characters long'),
	});


export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

