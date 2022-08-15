import mixins from '../../styles/Mixins.module.css';

const Contact = () => {
	return (
		<section className={mixins.section_heading}>
			<div className={mixins.container}>
				<h1
					className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}
				>
					Contact
				</h1>
				<p className={`${mixins.text_center} ${mixins.text_center} ${mixins.m1}`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea deleniti
					voluptatem officiis molestiae nisi unde quasi molestias necessitatibus
					atque soluta quaerat provident accusamus animi, in sint eveniet
					exercitationem natus recusandae.
				</p>
			</div>
		</section>
	);
};

export default Contact;
