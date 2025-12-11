import { projects } from '../../config/site';
import { Icons } from '../icons';

import mixins from '../../styles/Mixins.module.css';
import styles from '../../styles/Projects.module.css';

const Projects = () => {
	const github = 'https://github.com';
	const external = 'https://github.com';
	const showMore = false;

	const tech = ['react', 'tailwind', 'node', 'express', 'mongodb'];

	return (
		<section
			className={`${mixins.container} ${mixins.section} ${styles.projects_section}`}
		>
			<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
				Other Noteworthy Projects
			</h1>
			<div className={`${mixins.text_center} ${mixins.m1}`}>
				<p className={mixins.lead}>
					Here are some of my work that I&apos;ve done in various programming
					languages.
				</p>
			</div>
			<ul className={styles.projects_grid}>
				{projects &&
					projects.map((project, index) => (
						<li key={`project-${index}`} className={styles.projects_list}>
							<div
								className={`${styles.projects_inner} ${mixins.box_shadow} ${mixins.flex_between}`}
							>
								<div className={styles.project_inner}>
									<header>
										<div className={`${styles.project_top} ${mixins.flex_between}`}>
											<div className={styles.folder}>
												<Icons.folder />
											</div>
											<div className={styles.project_links}>
												{github && (
													<a
														href={github}
														aria-label={project.title}
														target='_blank'
														rel='noreferrer'
													>
														<Icons.github />
													</a>
												)}
												{external && (
													<a
														href={external}
														aria-label='External Link'
														className={styles.external}
														target='_blank'
														rel='noreferrer'
													>
														<Icons.external />
													</a>
												)}
											</div>
										</div>

										<h3 className={styles.project_title}>
											<a href={external} target='_blank' rel='noreferrer'>
												Lorem ipsum dolor sit amet, qui minim labore
											</a>
										</h3>

										<div className={styles.project_description}>
											<p>
												Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
												cillum sint consectetur cupidatat.
											</p>
										</div>
									</header>
									<footer>
										{tech && (
											<ul className={styles.project_tech_list}>
												{tech.map((tech, i) => (
													<li key={i}>{tech}</li>
												))}
											</ul>
										)}
									</footer>
								</div>
							</div>
						</li>
					))}
			</ul>

			<button className={`${styles.more_button} ${mixins.button}`}>
				Show {showMore ? 'Less' : 'More'}
			</button>
		</section>
	);
};

export default Projects;
