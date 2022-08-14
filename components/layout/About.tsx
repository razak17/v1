import mixins from '../../styles/Mixins.module.css';

const About = () => {
	return (
		<div className={mixins.section_heading}>
			<div className={mixins.container}>
				<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
					About Me
				</h1>
				<p className={`${mixins.text_center} ${mixins.text_center} ${mixins.m1}`}>
					ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
					culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
					anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
					est aliquip amet voluptate voluptate dolor minim nulla est proident.
					Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
					occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
					officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
					Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
					excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut
					ea consectetur et est culpa et culpa duis.
				</p>
			</div>
		</div>
	);
};

export default About;
