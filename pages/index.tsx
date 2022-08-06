import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title='Home' description='Home Page For Razak Mo' />
      <h1>Coming Soon..</h1>
    </div>
  );
};

export default Home;
