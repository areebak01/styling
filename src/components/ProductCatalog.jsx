// ProductCatalog.jsx
import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductCatalog.module.css';

const ProductCatalog = ({ products }) => {
  return (
    <div className={`container ${styles.catalog}`}>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
