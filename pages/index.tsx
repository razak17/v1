import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title='Home' description='Home Page For Razak Mo' />
      <h3>Coming Soon...</h3>
    </div>
  );
};

export default Home;
