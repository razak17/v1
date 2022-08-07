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
          <div>
            <h1 className={mixins.lg}>Software Developer</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to static
              websites for individuals. Fill out the form to try a demo of our platform
            </p>
            <a href='#' className={`${mixins.btn} ${mixins.btn_cta}`}>
              Get In touch
            </a>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={mixins.container}>
          <h1
            className={`${styles.about_heading} ${mixins.md} ${mixins.text_primary} ${mixins.text_center}`}
          >
            About Me
          </h1>
          <p className={`${mixins.text_center} ${mixins.text_center} ${mixins.m1}`}>
            A quick introduction about who I am and what my capabilities are.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
