import styles from '../../styles/Showcase.module.css';
import mixins from '../../styles/Mixins.module.css';
import { useState, useEffect } from 'react';

const Showcase = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.showcase}>
			<div className={`${mixins.container} ${styles.showcase_grid}`}>
				<div>
					<h1 className={mixins.lg}>Full Stack Software Developer</h1>
					{windowWidth < 376 ? (
						<p
							className={`${mixins.text_transparent} ${mixins.lead} ${styles.showcase_desc}`}
						>
							I am a full stack software developer. I enjoy writing backends in node
							and golang.
						</p>
					) : (
						<p
							className={`${mixins.text_transparent} ${mixins.lead} ${styles.showcase_desc}`}
						>
							I am a full stack software developer. I enjoy writing backends in node
							and golang. I also enjoy writing scripts in python.
						</p>
					)}
					<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
						Get In touch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
