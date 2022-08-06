import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from '../styles/Home.module.css';

const NotFound: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title='404' />
      <p>That page does not exist</p>
    </div>
  );
};

export default NotFound;

