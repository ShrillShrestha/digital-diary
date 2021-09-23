import React from 'react';
import {Card, Button} from 'react-bootstrap';
import styles from './CategoryList.module.css';

const CategoryList = () => {
  const getCategories = () => {
    /*
        This function will load all the categories from the DB and create a CategoryInfo per
        category.
    */
   let cards = [];
   for (let i = 0; i < 5; i++){
     cards.push(
        <Card className={styles.card_ele} style={{ width: '18rem' }}>
          <Card.Img className={styles.img_len} variant="top" src="images/logo.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
   }

   return cards;

  }

  return (
    <div className={styles.main_div}>
      <div className={styles.sub_div}>
        <div className={styles.title_div}>
            <span>Categories </span>
            <Button>Create a new Category</Button>
        </div>
        <div className={styles.card_cover}>
          {[...getCategories()]}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;