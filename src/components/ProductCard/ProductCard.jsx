import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="flavors">
        {product.flavors.map((flavor, index) => (
          <button key={index} className="flavor-button">
            {flavor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
