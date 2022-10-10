import { navLinks } from './data';
import styles from '../styles/Navbar.module.css';
import mixins from '../styles/Mixins.module.css';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={`${mixins.container} ${styles.nav_flex}`}>
				<a href='#'>
					<h1 className={styles.logo}>Razak Mo.</h1>
				</a>
				<nav>
					<ul className={styles.nav_links}>
						{navLinks.map((item) => (
							<li key={`link-${item.name}`}>
								<a className={styles.nav_link} href={item.url}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a
					href='#contact'
					className={`${styles.cta} ${mixins.btn} ${mixins.btn_cta}`}
				>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Navbar;
