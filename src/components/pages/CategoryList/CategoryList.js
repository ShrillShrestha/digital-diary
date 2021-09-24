import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./CategoryList.module.css";
import { API } from "aws-amplify";
import { listCategories } from "../../../graphql/queries";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const catData = await API.graphql({
      query: listCategories,
    });
    const catList = catData.data.listCategories.items;
    console.log("categories", catList);
    setCategories(catList);
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <span>Categories </span>
          <Link to="/categories/create">Create a new Category</Link>
        </div>
        <div className={styles.card_cover}>
          {categories.length !== 0 ? (
            categories.map((cat) => {
              return (
                <Card className={styles.card_ele} style={{ width: "18rem" }} key={cat.id}>
                  <Card.Img
                    className={styles.img_len}
                    variant="top"
                    src={cat.imageUrl}
                  />
                  <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                    <Card.Text>
                     {cat.description}
                    </Card.Text>
                    <Link to={`/${cat.id}/entries`}>View Entries</Link>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h1 style={{ color: "#fff" }}>No categories, create</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
