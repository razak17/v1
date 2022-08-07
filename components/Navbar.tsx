import styles from '../styles/Navbar.module.css';
import mixins from '../styles/Mixins.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={`${mixins.container} ${styles.navbar_flex}`}>
        <h1 className={styles.logo}>Razak Mo</h1>
        <nav>
          <ul className={styles.nav_links}>
            {['home', 'about', 'work', 'blog'].map((item) => (
              <li key={`link-${item}`}>
                <a className={styles.nav_link} href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href='#' className={`${mixins.btn} ${mixins.btn_cta} ${styles.cta}`}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
