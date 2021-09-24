import React from "react";
import styles from "./EntryDetail.module.css";
import { useLocation } from "react-router";

const EntryDetail = () => {
  const location = useLocation();
  const {entry} = location.state;
  console.log(entry);
  return (
    <div className={styles.main}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <span>{entry.title}</span>
          <span>Created at: { new Date(entry.createdAt).toLocaleString() }</span>
        </div>
        <div className={styles.content}>
          {entry.content}
        </div>
      </div>
    </div>
  );
};

export default EntryDetail;
