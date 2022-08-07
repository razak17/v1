import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';
import mixins from '../styles/Mixins.module.css';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Home' description='Home Page For Razak Mo' />
      <Navbar />
      <div className={styles.showcase}>
        <div className={`${mixins.container} ${styles.showcase_grid}`}>
          <div className={styles.showcase_text}>
            <h1>Software Developer</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the
              form to try a demo of our platform
            </p>
            <a href='#' className={`${mixins.btn} ${mixins.btn_outline}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
