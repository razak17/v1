import styles from '../../styles/Showcase.module.css';
import mixins from '../../styles/Mixins.module.css';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={`${mixins.container} ${styles.showcase_grid}`}>
				<div>
					<h1 className={mixins.lg}>Software Developer</h1>
					<p className={mixins.text_transparent}>
						I am a full stack software developer. I enjoy writing backends in node and
						golang. I also enjoy writing automation scripts in python.
					</p>
					<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
						Get In touch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
