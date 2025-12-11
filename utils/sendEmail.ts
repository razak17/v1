import emailjs from "@emailjs/browser";
import { z } from "zod";

export const ContactFormSchema = z.object({
  from_name: z.string().min(2, "name must be atleast 2 characters long"),
  reply_to: z.string().email("Please enter a valid email address."),
  message: z.string().min(2, "message must be atleast 2 characters long"),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

export const sendEmail = async (formData: ContactFormSchemaType) => {
  const { from_name, reply_to, message } = formData;
  try {
    const res = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      {
        from_name,
        reply_to,
        message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    );
    console.log(res);
    return res.text;
  } catch (error) {
    console.log("Email JS Error", error);
  }
};
