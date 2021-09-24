import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./EntryList.module.css";
import { API } from "aws-amplify";
import { entriesByCategory } from "../../../graphql/queries";
import { Link, useParams } from "react-router-dom";
import { Auth } from 'aws-amplify';

const EntryList = () => {
  const { id } = useParams();

  const [entries, setEntries] = useState([]);

  const fetchEntriesByCategory = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user.username)
    try {
      const entriesData = await API.graphql({
        query: entriesByCategory,
        variables: {
          categoryID: id,
          owner: user.username,
        },
      });
      const entryList = entriesData.data.entriesByCategory.items;
      setEntries(entryList);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchEntriesByCategory();   
  }, []);

  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <span>Entries </span>
          <Link to={`/${id}/entries/create`}>Create a new Entry</Link>
        </div>
        <div className={styles.card_div}>
          {entries.length !== 0 ? 
            entries.map((entry) => {
              return (
                <Card className={styles.entry_card} key={entry.id}>
                <Card.Body>
                  <Card.Title>{entry.title}</Card.Title>
                  <Card.Text className={styles.truncate}>
                    {entry.content}
                  </Card.Text>
                  {/* <Link to={`/${id}/entries/${entry.id}`}>View Entries</Link> */}
                  <Link to={{pathname:`/${id}/entries/${entry.id}`, state: {entry} }}>View Entry</Link>
                </Card.Body>
              </Card>
              )
            }) : (
              <h1 style={{ color: "#fff" }}>No entries, create</h1>
            )
          } 
        </div>
      </div>
    </div>
  );
};
export default EntryList;
