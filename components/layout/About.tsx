import styles from '../../styles/About.module.css';
import mixins from '../../styles/Mixins.module.css';

const About = () => {
	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
    'Express',
		'Docker',
		'Python',
		'Postgresql',
	];

	return (
		<section id='about' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				About Me
			</h1>
			<div className={styles.about_inner}>
				<div>
					<p>
            Hello! My name is Razak and I enjoy creating things that live on the internet.
            I started programming about six years ago in python. I really enjoyed building
            websites with flask and django. I also enjoyed creating automation and web scraping
            scripts with my python knowledge.
            <br />
            <br />
            Nowadays, I write backends with node and express. Although I enjoy backend development,
            I am also a competent frontend developer with react and typescript. I also have
            experience with docker and postgresql.
					</p>
					<div className={`${styles.about_cta}`}>
						<a href='#contact' className={`${mixins.btn} ${mixins.btn_cta}`}>
							Get In touch
						</a>
					</div>
				</div>
				<div className={`${styles.tech}`}>
					<p>
						Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
						sint consectetur cupidatat.
					</p>
					<ul className={`${styles.skills_list}`}>
						{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
