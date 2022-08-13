import styles from '../../styles/About.module.css';
import mixins from '../../styles/Mixins.module.css';

const About = () => {
	return (
		<div className={styles.about}>
			<div className={mixins.container}>
				<h1
					className={`${styles.about_heading} ${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}
				>
					About Me
				</h1>
				<p className={`${mixins.text_center} ${mixins.text_center} ${mixins.m1}`}>
					A quick introduction about who I am and what my capabilities are.
				</p>
			</div>
		</div>
	);
};

export default About;
