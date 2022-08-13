import styles from '../styles/Footer.module.css';
import mixins from '../styles/Mixins.module.css';
import IconGitHub from '../components/icons/github';
import IconTwitter from './icons/twitter';
import IconLinkedin from './icons/linkedin';

const Footer = () => {
	return (
		<div
			className={`${styles.footer} ${mixins.bg_primary} ${mixins.py5} ${styles.container}`}
		>
			<div className={`${mixins.container} ${styles.footer_grid}`}>
				<div>
					<h2>Razak Mo</h2>
					<p className={mixins.text_transparent}>Software Developer</p>
					<ul className={styles.social_list}>
						<li>
							<a href='#' target='_blank' rel='noreferrer'>
								<IconGitHub />
							</a>
						</li>
						<li>
							<a href='#' target='_blank' rel='noreferrer'>
								<IconTwitter />
							</a>
						</li>
						<li>
							<a href='#' target='_blank' rel='noreferrer'>
								<IconLinkedin />
							</a>
						</li>
					</ul>
					<p className={styles.copy_text}>&copy; 2022 Razak Mo</p>
				</div>
				<div>
					<h3>Pages</h3>
					<ul>
						{['home', 'about', 'work', 'blog'].map((item) => (
							<li className={styles.footer_item} key={`link-${item}`}>
								<a className={styles.footer_link} href={`#${item}`}>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Quick Links</h3>
					<ul>
						{['blog', 'projects', 'imprint', 'privacy policy'].map((item) => (
							<li className={styles.footer_item} key={`link-${item}`}>
								<a className={styles.footer_link} href='#'>
									{item}
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
					<a href='#' className={`${mixins.btn} ${mixins.btn_cta}`}>
						Get In touch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
