import styles from '../../styles/Work.module.css';
import mixins from '../../styles/Mixins.module.css';
import Icon from '../icons/icon';
import Image from 'next/image';
import firstImage from '../../assets/113.png';

const Work = () => {
	return (
		<section className={mixins.container}>
			<div className={mixins.section_heading}>
				<h1 className={`${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}>
					Work
				</h1>
			</div>
			<div>
			</div>
		</section>
	);
};

export default Work;
