import styles from '../../styles/About.module.css';
import mixins from '../../styles/Mixins.module.css';
import { skills } from '../data';

const About = () => {
	return (
		<section id='about' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				About Me
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1} ${mixins.lead}`}>
				<p className={mixins.lead}>A little about myself and my capabilities</p>
			</div>
			<div className={styles.about_inner}>
				<div>
					<p>
            Hello! My name is Razak. I&apos;m a versatile software engineer with diverse
            experience designing and building both frontend and backend systems.
            Over the years, I have built robust frontends, developed REST APIs and
            designed database systems for various applications.
						<br />
						<br />
            My collaboration with cross-functional teams has been key to transforming
            creative concepts into measurable business successes. Whether deploying
            applications in cloud environments or architecting REST APIs and database systems,
            I thrive on turning complex challenges into effective, scalable solutions.
					</p>
					<div className={styles.about_cta}>
						<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
							Get In touch
						</a>
					</div>
				</div>
				<div className={styles.tech}>
					<p>Listed below are some of the technologies I currently work with:</p>
					<ul className={styles.skills_list}>
						{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
