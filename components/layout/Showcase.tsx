import styles from '../../styles/Showcase.module.css';
import mixins from '../../styles/Mixins.module.css';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={`${mixins.container} ${styles.showcase_grid}`}>
				<div>
					<h1 className={mixins.lg}>Software Developer</h1>
					<p className={mixins.text_transparent}>
						Deploy web apps of all kinds, from large scale enterprise APIs to static
						websites for individuals. Fill out the form to try a demo of our platform
					</p>
					<a href='#' className={`${mixins.btn} ${mixins.btn_cta}`}>
						Get In touch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
