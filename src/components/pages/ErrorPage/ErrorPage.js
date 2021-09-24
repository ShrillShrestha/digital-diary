import React from "react";
import styles from "./ErrorList.module.css";

const HomePage = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className = {styles.err}>
          Error 404: Page Not Found!
        </div>
      </div>
    </div>
  );
};

export default HomePage;
