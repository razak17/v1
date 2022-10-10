import emailjs from '@emailjs/browser';
import { ContactFormSchemaType } from '../utils/formSchema';

export const sendEmail = (formData: ContactFormSchemaType) => {
	const { from_name, reply_to, message } = formData;
	emailjs
		.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
			{
				from_name,
				reply_to,
				message,
			},
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
		)
		.then(
			res => {
				console.log(res.text);
			},
			error => {
				console.log('Email JS Error', error.text);
			}
		);
};

