'use client';

import { navLinks } from '../config/site';
import styles from '../styles/Navbar.module.css';
import mixins from '../styles/Mixins.module.css';
import { useState } from 'react';

export function Navbar() {
	const [activeLink, setActiveLink] = useState('#');

	return (
		<header className={styles.navbar}>
			<div className={`${mixins.container} ${styles.nav_flex}`}>
				<a href='#'>
					<h1 className={styles.logo}>Razak Mo.</h1>
				</a>
				<nav className={styles.nav_links}>
					<ul>
						{navLinks.map((item) => (
							<li key={`link-${item.name}`} onClick={() => setActiveLink(item.url)}>
								<a
									className={
										activeLink === item.url
											? `${styles.nav_link} ${styles.active}`
											: `${styles.nav_link}`
									}
									href={item.url}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a
					href='#contact'
					onClick={() => setActiveLink('#contact')}
					className={`${styles.cta} ${mixins.btn} ${mixins.btn_cta}`}
				>
					Contact
				</a>
			</div>
		</header>
	);
}
