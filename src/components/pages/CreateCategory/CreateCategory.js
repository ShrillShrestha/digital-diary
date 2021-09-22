import React from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from './CreateCategory.module.css';

const CreateCategory = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
      <div className={styles.title_div}>
          Create a New Category
      </div>
      <Form className={styles.cat_form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="email" placeholder="E.g. Travel" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category Image URL</Form.Label>
          <Form.Control type="email" placeholder="https://imageyouwant.com/img1.jpg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Category Description</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default CreateCategory;