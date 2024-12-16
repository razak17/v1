import styles from '../styles/Footer.module.css';
import mixins from '../styles/Mixins.module.css';
import { footerLinks, navLinks, socialMedia } from './data';
import Icon, { IconType } from './icons/icon';

const Footer = () => {
	return (
		<footer className={`${mixins.bg_primary} ${styles.container}`}>
			<div className={`${mixins.container} ${styles.footer_grid}`}>
				<div>
					<h2>Razak Mo</h2>
					<p className={mixins.text_transparent}>Software Developer</p>
					<ul className={styles.social_list}>
						{socialMedia.map((item) => (
							<li key={`<social-${item.name}`}>
								<a href={item.url} target='_blank' rel='noreferrer'>
									<Icon name={item.name as IconType} />
								</a>
							</li>
						))}
					</ul>
					<p className={styles.copy_text}>&copy; 2022 Razak Mo</p>
				</div>
				<div>
					<ul>
						{navLinks.map((item) => (
							<li className={styles.footer_item} key={`link-${item.name}`}>
								<a className={styles.footer_link} href={item.url}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<ul>
						{footerLinks.map((item) => (
							<li className={styles.footer_item} key={`link-${item.name}`}>
								<a className={styles.footer_link} href={item.url}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Contact</h3>
					<p className={`${mixins.text_transparent} ${styles.contact_text}`}>
						Are you interested in working together?
					</p>
					<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
						Get In touch
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
