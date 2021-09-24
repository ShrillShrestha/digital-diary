import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from './CreateCategory.module.css';
import { API, graphqlOperation } from 'aws-amplify'
import { createCategory } from '../../../graphql/mutations';
import { useHistory } from "react-router-dom";


const CreateCategory = () => {

  const initialFormData = {
    name: '',
    imageUrl: '',
    description: ''
  }

  const [category, setCategory] = useState(initialFormData)
  let history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(category)
    try {
      await API.graphql(graphqlOperation(createCategory, {
        input: category
      }))
      history.push("/categories");
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
      <div className={styles.title_div}>
          Create a New Category
      </div>
      <Form className={styles.cat_form} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" placeholder="E.g. Travel" onChange={(event) => setCategory({...category, name: event.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category Image URL</Form.Label>
          <Form.Control type="text" placeholder="https://imageyouwant.com/img1.jpg" onChange={(event) => setCategory({...category, imageUrl: event.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Category Description</Form.Label>
          <Form.Control as="textarea" rows={7} onChange={(event) => setCategory({...category, description: event.target.value})}/>
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default CreateCategory;