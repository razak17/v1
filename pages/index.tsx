import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/layout/About';
import Showcase from '../components/layout/Showcase';
import Featured from '../components/layout/Featured';
import Contact from '../components/layout/Contact';

const Home: NextPage = () => {
	return (
		<>
			<NextSeo title='Home' description='Home Page For Razak Mo' />
			<Navbar />
			<Showcase />
			<About />
			<Featured />
			<Contact />
			<Footer />
			<ToastContainer />
		</>
	);
};

export default Home;
