import Image from 'next/image';
import Icon from '../icons/icon';
import { projects } from '../data';

import styles from '../../styles/Featured.module.css';
import mixins from '../../styles/Mixins.module.css';

const Featured = () => {
	return (
		<section id='projects' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				Featured Projects
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1}`}>
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
									<a href='#'>
										<h3>{title}</h3>
									</a>
									<p>{description}</p>
									<ul className={`${styles.tech_list}`}>
										{tech && tech.map((item) => <li key={`project-${item}`}>{item}</li>)}
									</ul>

									<div className={`${styles.icons}`}>
										{project.github && (
											<a href={project.github} target='_blank' rel='noreferrer'>
												<Icon name='GitHub' />
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
