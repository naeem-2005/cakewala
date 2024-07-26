import React, { useState } from 'react';
import './ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faIceCream, faCookieBite, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import chocolateCakeImg from "./../../assets/image/Chocolate-Cake.jpeg";

import strawberryCakeImg from "../../assets/image/Strawberry-Cake.jpg";
import vanillaCakeImg from "../../assets/image/Vanilla-Cake.jpg";
import redVelvetCakeImg from "../../assets/image/Red-Velvet-Cake.png";
import lemonCakeImg from "../../assets/image/Lemon-Cake.png";
import pineappleCakeImg from "../../assets/image/Pineapple-Cake.png";
import blackForestImg from "../../assets/image/Black-Forest.png";
import butterscotchCakeImg from "../../assets/image/Butterscotch-Cake.png";
import blackCurrantCakeImg from "../../assets/image/Black-Currant-Cake.jpg";
import cranberryCakeImg from "../../assets/image/Cranberry-Cake.jpg";
import chocolateTruffleCakeImg from "../../assets/image/Chocolate-Truffle-Cake.png";
import chocolateBarCakeImg from "../../assets/image/Chocolate-Bar-Cake.jpg";
import chocoChipCakeImg from "../../assets/image/Chocolate-Choco-Chip-Cake.png";
import oreoCakeImg from "../../assets/image/Oreo-Cake.png";
import freshMixFruitCakeImg from "../../assets/image/Fresh-Mix-Fruit-Cake.png";
import fruitCocktailCakeImg from "../../assets/image/Fruit-Cocktail-Cake.png";

const products = [
  {   id: 1,
       name: 'Chocolate Cake',
      icon: faBirthdayCake, 
      price: 300, category: 'cake', 
      weight: '1/2 kg', description: 'A rich and decadent chocolate cake.', 
      bgImage: `url(${chocolateCakeImg})` 
    },

  { id: 2, name: 'Strawberry Cake', icon: faIceCream, price: 250, category: 'cake', weight: '1/2 kg', description: 'A light and fluffy strawberry cake.', bgImage: `url(${strawberryCakeImg})` },
  { id: 3, name: 'Vanilla Cake', icon: faCookieBite, price: 250, category: 'cake', weight: '1/2 kg', description: 'A classic vanilla cake with a soft texture.', bgImage: `url(${vanillaCakeImg})` },
  { id: 4, name: 'Red Velvet Cake', icon: faCakeCandles, price: 400, category: 'cake', weight: '1/2 kg', description: 'A velvety red cake with cream cheese frosting.', bgImage: `url(${redVelvetCakeImg})` },
  { id: 5, name: 'Lemon Cake', icon: faBirthdayCake, price: 350, category: 'cake', weight: '1/2 kg', description: 'A tangy lemon cake with a zesty glaze.', bgImage: `url(${lemonCakeImg})` },
  { id: 6, name: 'Pineapple Cake', icon: faCakeCandles, price: 400, category: 'cake', weight: '1/2 kg', description: 'A tropical pineapple-flavored cake.', bgImage: `url(${pineappleCakeImg})` },
  { id: 7, name: 'Black Forest', icon: faBirthdayCake, price: 225, category: 'cake', weight: '1/2 kg', description: 'A rich chocolate cake with cherries.', bgImage: `url(${blackForestImg})` },
  { id: 8, name: 'Butterscotch Cake', icon: faCookieBite, price: 250, category: 'cake', weight: '1/2 kg', description: 'A creamy butterscotch-flavored cake.', bgImage: `url(${butterscotchCakeImg})` },
  { id: 9, name: 'Black Currant Cake', icon: faIceCream, price: 250, category: 'cake', weight: '1/2 kg', description: 'A cake with tangy black currants.', bgImage: `url(${blackCurrantCakeImg})` },
  { id: 10, name: 'Cranberry Cake', icon: faCakeCandles, price: 350, category: 'cake', weight: '1/2 kg', description: 'A tart cranberry-flavored cake.', bgImage: `url(${cranberryCakeImg})` },
  { id: 11, name: 'Chocolate Truffle Cake', icon: faBirthdayCake, price: 300, category: 'cake', weight: '1/2 kg', description: 'A decadent chocolate truffle cake.', bgImage: `url(${chocolateTruffleCakeImg})` },
  { id: 12, name: 'Chocolate Bar Cake', icon: faCookieBite, price: 300, category: 'cake', weight: '1/2 kg', description: 'A cake with rich chocolate bars.', bgImage: `url(${chocolateBarCakeImg})` },
  { id: 13, name: 'Chocolate Choco Chip Cake', icon: faIceCream, price: 400, category: 'cake', weight: '1/2 kg', description: 'A chocolate cake with choco chips.', bgImage: `url(${chocoChipCakeImg})` },
  { id: 14, name: 'Oreo Cake', icon: faCakeCandles, price: 400, category: 'cake', weight: '1/2 kg', description: 'A cake with crushed Oreo cookies.', bgImage: `url(${oreoCakeImg})` },
  { id: 15, name: 'Fresh Mix Fruit Cake', icon: faBirthdayCake, price: 400, category: 'cake', weight: '1/2 kg', description: 'A cake with a variety of fresh fruits.', bgImage: `url(${freshMixFruitCakeImg})` },
  { id: 16, name: 'Fruit Cocktail Cake', icon: faCookieBite, price: 350, category: 'cake', weight: '1/2 kg', description: 'A cake with a mix of tropical fruits.', bgImage: `url(${fruitCocktailCakeImg})` },
];

const ProductList = () => {
  const [filteredItems, setFilteredItems] = useState(products);
  const [sortByPrice, setSortByPrice] = useState(false);

  const handleSortByPrice = () => {
    const sortedItems = [...filteredItems].sort((a, b) => {
      return sortByPrice ? a.price - b.price : b.price - a.price;
    });
    setSortByPrice(!sortByPrice);
    setFilteredItems(sortedItems);
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className='PriceButton'>
        <button onClick={handleSortByPrice}>Sort by Price</button>
      </div>
      <div className="productlist-container">
        {filteredItems.map((product) => (
          <div key={product.id} className="productlist-item" style={{ backgroundImage: product.bgImage }}>
            <FontAwesomeIcon icon={product.icon} size="2x" />
            <div className="productlist-item-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <p>Category: {product.category}</p>
              <p>Weight: {product.weight}</p>
              <button className="productlist-item-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
