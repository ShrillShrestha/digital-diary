import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createEntry } from "../../../graphql/mutations";
import styles from "../CreateCategory/CreateCategory.module.css";
import { useParams, useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

const EntryNew = () => {
  const { id } = useParams();

  const initialFormData = {
    title: "",
    content: "",
    categoryID: id,
  };

  const [entry, setEntry] = useState(initialFormData);
  let history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(entry);
    try {
      await API.graphql(
        graphqlOperation(createEntry, {
          input: entry,
        })
      );
      history.push(`/${id}/entries`);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAdd = () => {
    history.push(`/${id}/entries`);
  }


  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <h3>Create New Entry</h3>
        </div>
        <div className={styles.cat_form}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="entryTitle">
              <Form.Label>Entry Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Trip to.."
                onChange={(event) =>
                  setEntry({ ...entry, title: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="entryTextArea">
              <Form.Label>Entry Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                onChange={(event) =>
                  setEntry({ ...entry, content: event.target.value })
                }
              />
            </Form.Group>
            <div className={styles.btn_div}>
            <Button variant="danger" onClick={cancelAdd}>Cancel</Button>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </div>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default EntryNew;
