import About from '../../components/layout/About';
import Contact from '../../components/layout/Contact';
import Featured from '../../components/layout/Featured';
import Showcase from '../../components/layout/Showcase';

import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import ToastWrapper from '../../components/toast-wrapper';

export const metadata = {
	title: 'Home',
	description: 'Home Page For Razak Mo',
};

const Home = () => {
	return (
		<>
			<Navbar />
			<Showcase />
			<About />
			<Featured />
			<Contact />
			<Footer />
			<ToastWrapper />
		</>
	);
};

export default Home;
