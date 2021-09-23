import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../CreateCategory/CreateCategory.module.css";

const EntryNew = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <h3>Create New Entry</h3>
        </div>
        <div className={styles.cat_form}>
          <Form>
            <Form.Group className="mb-3" controlId="entryTitle">
              <Form.Label>Entry Title</Form.Label>
              <Form.Control type="text" placeholder="Trip to.." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="entryTextArea">
              <Form.Label>Entry Content</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EntryNew;
