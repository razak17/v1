import styles from '../styles/Navbar.module.css';
import mixins from '../styles/Mixins.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={`${mixins.container} ${styles.navbar_flex}`}>
        <h1 className={mixins.logo}>Razak Mo</h1>
        <nav>
          <ul>
            {['home', 'about', 'work', 'contact'].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item.toUpperCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
