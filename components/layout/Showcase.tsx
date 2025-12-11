"use client";

import mixins from "../../styles/Mixins.module.css";
import styles from "../../styles/Showcase.module.css";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={`${mixins.container} ${styles.showcase_grid}`}>
        <div>
          <h1 className={mixins.lg}>Full Stack Software Developer</h1>
          <p
            className={`${mixins.text_transparent} ${mixins.lead} ${styles.showcase_desc}`}
          >
            Full Stack Software Developer with 4+ years of experience designing,
            building, and optimizing scalable web applications.
          </p>
          <a href="#contact" className={`${mixins.btn} ${mixins.btn_cta}`}>
            Get In touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
