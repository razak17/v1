import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import Icon, { IconType } from '../icons/icon';
import { InputField, TextArea } from '../InputField';
import { socialMedia } from '../data';
import {
	ContactFormSchemaType,
	ContactFormSchema,
	sendEmail
} from '../../utils/sendEmail';

import styles from '../../styles/Contact.module.css';
import mixins from '../../styles/Mixins.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const {
		register: contactForm,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<ContactFormSchemaType>({
		resolver: zodResolver(ContactFormSchema)
	});

	const onSubmit: SubmitHandler<ContactFormSchemaType> = async (data) => {
		console.log({ data });

		const response = await toast.promise(
			sendEmail({
				from_name: data.from_name.trim(),
				message: data.message.trim(),
				reply_to: data.reply_to.trim()
			}),
			{
				pending: {
					render() {
						return 'Sending message...';
					},
					icon: false
				},
				success: {
					render() {
						reset();
						return 'Message sent successfully!';
					}
				},
				error: {
					render() {
						return 'Something went wrong, please try again later.';
					}
				}
			}
		);

		console.log(response);
	};

	return (
		<section id='contact' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				Contact
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1}`}>
				<p className={mixins.lead}>
					Whether you&apos;d like to work together, or just have a chat. Don&apos;t
					hesistate to get in touch
				</p>
			</div>
			<div className={styles.contact}>
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
				<div className={`${styles.contact_info} ${mixins.box_shadow}`}>
					<div className={styles.info_box}>
						<div>
							<h3>Email</h3>
							<a href='mailto:razakmoapps@gmail.com'>razakmoapps@gmail.com</a>
						</div>
					</div>
					<div className={styles.info_box}>
						<div>
							<h3>Connect</h3>
							<ul className={styles.contact_social}>
								{socialMedia.map((item) => (
									<li key={`social-${item.name}`}>
										<a href={item.url} target='_blank' rel='noreferrer'>
											<Icon name={item.name as IconType} />
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
