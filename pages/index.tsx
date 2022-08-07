import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title='Home' description='Home Page For Razak Mo' />
      <Navbar />
    </div>
  );
};

export default Home;
