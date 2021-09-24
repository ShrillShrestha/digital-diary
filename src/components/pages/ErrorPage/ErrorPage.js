import React from "react";
import styles from "./ErrorList.module.css";

const HomePage = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        Error 404: Page Not Found!
      </div>
    </div>
  );
};

export default HomePage;
