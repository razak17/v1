import mixins from '../../styles/Mixins.module.css';

const Contact = () => {
	return (
		<div className={mixins.section_heading}>
			<div className={mixins.container}>
				<h1
					className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}
				>
					Contact
				</h1>
				<p className={`${mixins.text_center} ${mixins.text_center} ${mixins.m1}`}>
					A quick introduction about who I am and what my capabilities are.
				</p>
			</div>
		</div>
	);
};

export default Contact;
