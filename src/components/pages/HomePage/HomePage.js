import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";

const HomePage = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>Welcome to Digital Diary!</div>
        <div className={styles.landing_div}>
          <img
            className={styles.landing_img}
            src="https://64.media.tumblr.com/8ede0a31deaf6c972d874a6aa3caaf35/tumblr_my8p5nLuJ11rov8qno1_400.gifv"
            alt="App logo"
          />
          <Link to="/categories" className="btn btn-primary">
            Sign In/ Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
