import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	ContactFormSchema,
	ContactFormSchemaType,
	sendEmail,
} from '../utils/sendEmail';
import { InputField, TextArea } from './InputField';
import styles from '../../styles/Contact.module.css';
import mixins from '../../styles/Mixins.module.css';
import { toast } from 'react-toastify';

export const ContactForm = () => {
	const {
		register: contactForm,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormSchemaType>({
		resolver: zodResolver(ContactFormSchema),
	});

	const onSubmit: SubmitHandler<ContactFormSchemaType> = async (data) => {
		console.log({ data });

		const response = await toast.promise(
			sendEmail({
				from_name: data.from_name.trim(),
				message: data.message.trim(),
				reply_to: data.reply_to.trim(),
			}),
			{
				pending: {
					render() {
						return 'Sending message...';
					},
					icon: false,
				},
				success: {
					render() {
						reset();
						return 'Message sent successfully!';
					},
				},
				error: {
					render() {
						return 'Something went wrong, please try again later.';
					},
				},
			}
		);

		console.log(response);
	};

	return (
		<>
			<div className={`${styles.contact_form} ${mixins.box_shadow}`}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.row}>
						<InputField
							required
							type='text'
							placeholder='Name'
							{...contactForm('from_name')}
							error={errors.from_name}
						/>
					</div>
					<div className={styles.row}>
						<InputField
							required
							type='email'
							placeholder='Email'
							{...contactForm('reply_to')}
							error={errors.reply_to}
						/>
					</div>
					<div className={styles.row}>
						<TextArea
							required
							placeholder='Message'
							{...contactForm('message')}
							error={errors.message}
						/>
					</div>
					<div className={styles.row}>
						<button disabled={isSubmitting} className={mixins.button_alt}>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
