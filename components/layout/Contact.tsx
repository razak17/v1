import { useState } from 'react';
import styles from '../../styles/Contact.module.css';
import mixins from '../../styles/Mixins.module.css';
import Icon, { IconType } from '../icons/icon';
import InputField from '../InputField';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChangeInput = (
		e: React.ChangeEvent<HTMLInputElement> &
			React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		alert('Hello');
	};

	return (
		<section id='contact' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				Contact
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1}`}>
				<p>
					Whether you&apos;d like to work together, or just have a chat. Don&apos;t
					hesistate to get in touch
				</p>
			</div>
			<div className={`${styles.contact}`}>
				<div className={`${styles.contact_form} ${mixins.box_shadow}`}>
					<form onSubmit={handleSubmit}>
						<div className={styles.row}>
							<InputField
								type='text'
								name='name'
								placeholder='Name'
								value={formData.name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className={styles.row}>
							<InputField
								type='email'
								name='email'
								placeholder='Email'
								value={formData.email}
								onChange={handleChangeInput}
							/>
						</div>
						<div className={styles.row}>
							<InputField
								name='message'
								placeholder='Message'
								value={formData.message}
								onChange={handleChangeInput}
								textArea
							/>
						</div>
						<div className={`${styles.row}`}>
							<button className={`${mixins.button_alt}`}>Send Message</button>
						</div>
					</form>
				</div>
				<div className={`${styles.contact_info} ${mixins.box_shadow}`}>
					<div className={styles.info_box}>
						<div>
							<h3>Email</h3>
							<a href='mailto:anyone@example.com'>ecsgh@ecsgh.com</a>
						</div>
					</div>
					<div className={styles.info_box}>
						<div>
							<h3>Connect</h3>
							<ul className={styles.contact_social}>
								{['GitHub', 'Twitter', 'Linkedin'].map((item) => (
									<li key={`social-${item}`}>
										<a href='#' target='_blank' rel='noreferrer'>
											<Icon name={item as IconType} />
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
