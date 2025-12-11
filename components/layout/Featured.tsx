import Image from 'next/image';
import { featuredProjects } from '../../config/site';
import { Icons } from '../icons';

import styles from '../../styles/Featured.module.css';
import mixins from '../../styles/Mixins.module.css';

const Featured = () => {
	return (
		<section id='projects' className={`${mixins.container} ${mixins.section}`}>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				Featured Projects
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1}`}>
				<p className={mixins.lead}>
					Here are some of projects I&apos;ve worked on.
				</p>
			</div>

			<div className={styles.work_grid}>
				{featuredProjects &&
					featuredProjects.map((project, index) => (
						<div key={index} className={styles.work_item}>
							<div className={`${styles.work_frame} ${mixins.box_shadow}`}>
								<div className={styles.image}>
									<Image
										src={project.image}
										alt='Project Image'
										loading='lazy'
										width={600}
										height={100}
									/>
								</div>
								<div>
									<a href={project.external} target='_blank' rel='noreferrer'>
										<h3>{project.title}</h3>
									</a>
									<p>{project.description}</p>

									<div className={styles.work_footer}>
										<ul className={styles.tech_list}>
											{project.tech.map((item) => (
												<li key={`project-${item}`}>{item}</li>
											))}
										</ul>

										<div className={styles.icons}>
											{project.github && (
												<a href={project.github} target='_blank' rel='noreferrer'>
													<Icons.github />
												</a>
											)}
											{project.external && (
												<a href={project.external} target='_blank' rel='noreferrer'>
													<Icons.external />
												</a>
											)}
										</div>
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
