'use client';

import { socialMedia } from '../../config/site';
import { Icons } from '../icons';
// import { ContactForm } from '../contact-form';

import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Contact.module.css';
import mixins from '../../styles/Mixins.module.css';

const Contact = () => {
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
								{socialMedia.map((item) => {
									const Icon = item.icon ? Icons[item.icon] : Icons.external;
									return (
										<li key={`social-${item.name}`}>
											<a href={item.url} target='_blank' rel='noreferrer'>
												<Icon />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
