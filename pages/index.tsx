import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/layout/About';
import Showcase from '../components/layout/Showcase';
import Work from '../components/layout/Work';
import Contact from '../components/layout/Contact';

const Home: NextPage = () => {
	return (
		<>
			<NextSeo title='Home' description='Home Page For Razak Mo' />
			<Navbar />
			<Showcase />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
