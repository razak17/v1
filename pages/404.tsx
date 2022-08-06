import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from '../styles/404.module.css';

const NotFound: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title='404' />
      <h3>404 | That page does not exist...</h3>
    </div>
  );
};

export default NotFound;

