// ProductCard.jsx
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, price, description, image, category, rating } = product;

  // Dynamic styles based on the product category
  const cardCategoryStyle = {
    backgroundColor: category === "Electronics" ? "#e6f7ff" : "#f9f7e8",
  };

  return (
    <div className={`card ${styles.productCard}`} style={cardCategoryStyle}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className={styles.price}>{price}</p>
        <div className={styles.rating}>{"⭐".repeat(rating)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
