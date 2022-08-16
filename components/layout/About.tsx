import styles from '../../styles/About.module.css';
import mixins from '../../styles/Mixins.module.css';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress'
  ];

  return (
    <section className={`${mixins.container} ${mixins.section}`}>
      <h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
        About Me
      </h1>
      <div className={styles.about_inner}>
        <div>
          <p>
            ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
            Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
            Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
            occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
          </p>
          <div className={`${styles.about_cta}`}>
            <a href='#' className={`${mixins.btn} ${mixins.btn_cta}`}>
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
