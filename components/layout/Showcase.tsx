import styles from '../../styles/Showcase.module.css';
import mixins from '../../styles/Mixins.module.css';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={`${mixins.container} ${styles.showcase_grid}`}>
				<div>
					<h1 className={mixins.lg}>Software Developer</h1>
					<p className={mixins.text_transparent}>
						Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
						sint consectetur cupidatat.
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
