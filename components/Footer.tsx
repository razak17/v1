import styles from '../styles/Footer.module.css';
import mixins from '../styles/Mixins.module.css';
import Icon, { IconType } from './icons/icon';
import { navLinks, footerLinks } from './data';

const Me = () => {
	const links = ['GitHub', 'Twitter'];
	return (
		<div>
			<h2>Razak Mo</h2>
			<p className={mixins.text_transparent}>Software Developer</p>
			<ul className={styles.social_list}>
				{links.map((item) => (
					<li key={`social-${item}`}>
						<a href='#' target='_blank' rel='noreferrer'>
							<Icon name={item as IconType} />
						</a>
					</li>
				))}
			</ul>
			<p className={styles.copy_text}>&copy; 2022 Razak Mo</p>
		</div>
	);
};

const Pages = () => (
	<div>
		<h3>Pages</h3>
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
);

const QuickLinks = () => (
	<div>
		<h3>Quick Links</h3>
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
);

const Contact = () => (
	<div>
		<h3>Contact</h3>
		<p className={`${mixins.text_transparent} ${styles.contact_text}`}>
			Are you interested in working together?
		</p>
		<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
			Get In touch
		</a>
	</div>
);

const Footer = () => {
	return (
		<footer className={`${mixins.bg_primary} ${styles.container}`}>
			<div className={`${mixins.container} ${styles.footer_grid}`}>
				<Me />
				<Pages />
				<QuickLinks />
				<Contact />
			</div>
		</footer>
	);
};

export default Footer;
