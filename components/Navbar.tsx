import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={`${styles.container} ${styles.flex}`}>
        <h1 className={styles.logo}>Razak Mo</h1>
        <nav>
          <ul>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>
              <a href='features.html'>Features</a>
            </li>
            <li>
              <a href='docs.html'>Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
