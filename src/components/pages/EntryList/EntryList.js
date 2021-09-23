import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./EntryList.module.css";

const EntryList = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <span>Entries </span>
          <Button>Create a new Entry</Button>
        </div>
        <div className={styles.card_div}>
          {[0, 1, 2, 3, 4].map((i) => {
            return (
              <Card className={styles.entry_card}>
                <Card.Body>
                  <Card.Title>Entry title</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">View entry</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default EntryList;
