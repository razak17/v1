import styles from '../../styles/Featured.module.css';
import mixins from '../../styles/Mixins.module.css';
import Icon from '../icons/icon';
import Image, { StaticImageData } from 'next/image';
import firstImage from '../../assets/113.png';

type ProjectType = {
  title: string;
  description: string;
  image: StaticImageData;
  tech: string[];
  github?: string;
  external?: string;
};

const Featured = () => {
  const projects: ProjectType[] = [
    {
      title: 'First Project',
      description:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
      image: firstImage,
      github: 'https://github.com/razak17',
      external: 'https://www.google.com'
    },
    {
      title: 'First Project',
      description:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
      image: firstImage,
      external: 'https://www.google.com'
    },
    {
      title: 'First Project',
      description:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
      image: firstImage,
      github: 'https://github.com/razak17'
    }
  ];

  return (
    <section className={`${mixins.container} ${mixins.section}`}>
      <h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
        Featured Projects
      </h1>
      <div className={`${mixins.text_center} ${styles.work_text}`}>
        <p>
          Here are some of my work that I&apos;ve done in various programming
          languages.
        </p>
      </div>

      <div className={`${styles.work_grid}`}>
        {projects &&
          projects.map(({ title, description, tech, image, ...project }, index) => (
            <div key={index} className={`${styles.work_item}`}>
              <div className={`${styles.work_frame}`}>
                <div className={`${styles.image}`}>
                  <Image src={image} alt='' />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className={`${styles.tech_list}`}>
                    {tech && tech.map((item) => <li key={`project-${item}`}>{item}</li>)}
                  </ul>

                  <div className={`${styles.icons}`}>
                    {project.github && (
                      <a href={project.github} target='_blank' rel='noreferrer'>
                        <Icon name='GitHub' />{' '}
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target='_blank' rel='noreferrer'>
                        <Icon name='External' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Featured;
