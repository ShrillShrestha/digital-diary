import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./CategoryList.module.css";
import { API } from "aws-amplify";
import { listCategories } from "../../../graphql/queries";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import * as mutations from '../../../graphql/mutations';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    const catData = await API.graphql({
      query: listCategories,
    });
    const catList = catData.data.listCategories.items;
    setCategories(catList);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

 

  const deleteCategory = async (catID) => {
    console.log('cat id',catID)
    const catDetails = {
      id: catID
    };

    await API.graphql({
      query: mutations.deleteCategory,
      variables: { input: catDetails },
    });
    await getCategories();
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
          <span>Categories </span>
          <Link to="/categories/create" className="btn btn-primary">
            Create a new Category
          </Link>
        </div>
        <div className={styles.card_cover}>
          {!loading ?
          <>
            {categories.length !== 0 ? (
              categories.map((cat) => {
                return (
                  <Card
                    className={styles.card_ele}
                    style={{ width: "18rem" }}
                    key={cat.id}
                  >
                    <Card.Img
                      className={styles.img_len}
                      variant="top"
                      src={cat.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>{cat.name}</Card.Title>
                      <Card.Text>{cat.description}</Card.Text>
                      <Link to={`/${cat.id}/entries`} className="btn btn-primary">
                        View Entries
                      </Link>
                      <div className={styles.footer_icons}>
                        <BiEdit
                          color="green"
                          size="25px"
                          className={styles.edit_icon}
                        />
                        <MdDelete color="red" size="25px" onClick={() => deleteCategory(cat.id)}/>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h1 style={{ color: "#fff" }}>No categories, create</h1>
            )}
          </> : " " }
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
