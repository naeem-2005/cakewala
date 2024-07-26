import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import SplideBanner from '../../components/SplideBanner/SplideBanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import InternationalLocation from '../../components/InternationalLocation/InternationalLocation';


import ChocolateCakeImg from '../../assets/image/cake1.jpg';
import StrawberryCakeImg from '../../assets/image/cake2.jpg';
import VanillaCakeImg from '../../assets/image/cake3.jpg'; 
import RedVelvetCakeImg from '../../assets/image/cake4.jpg';
import LemonCakeImg from '../../assets/image/cake5.jpg';
import  CarrotCakeImg from '../../assets/image/cake5.jpg';
import PineappleCakeImg from '../../assets/image/cake6.jpg';
import CoffeCakeImg from '../../assets/image/cake7.jpg'
import ProductList from '../../components/ProductList/ProductList';
import CustomerReviews from '../../components/CustomerReview/CustomerReviews';


const products = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: ChocolateCakeImg,
    description: 'A rich and decadent chocolate cake.',
    flavors: ['Vanilla', 'Chocolate', 'Strawberry'],
  },
  {
    id: 2,
    name: 'Strawberry Cake',
    image: StrawberryCakeImg, 
    description: 'A light and fluffy strawberry cake.',
    flavors: ['Vanilla', 'Strawberry', 'Lemon'],
  },
  {
    id: 3,
    name: 'Vanilla Cake',
    image: VanillaCakeImg,
    description: 'A classic vanilla cake with a soft texture.',
    flavors: ['Vanilla', 'Almond', 'Berry'],
  },
  {
    id: 4,
    name: 'Red Velvet Cake',
    image: RedVelvetCakeImg,
    description: 'A velvety red cake with cream cheese frosting.',
    flavors: ['Vanilla', 'Red Velvet', 'Cocoa'],
  },
  {
    id: 5,
    name: 'Lemon Cake',
    image: LemonCakeImg,
    description: 'A tangy lemon cake with a zesty glaze.',
    flavors: ['Lemon', 'Vanilla', 'Ginger'],
  },
  {
    id: 6,
    name: 'Carrot Cake',
    image: CarrotCakeImg,
    description: 'A moist carrot cake with a hint of spice.',
    flavors: ['Carrot', 'Cinnamon', 'Nutmeg'],
  },
  {
    id: 7,
    name: 'Pineapple Cake',
    image: PineappleCakeImg,
    description: 'A tropical pineapple cake with a creamy filling.',
    flavors: ['Pineapple', 'Coconut', 'Vanilla'],
  },
  {
    id: 8,
    name: 'Coffee Cake',
    image: CoffeCakeImg,
    description: 'A rich coffee-flavored cake with a crumbly topping.',
    flavors: ['Coffee', 'Almond', 'Chocolate'],
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SplideBanner />
      <div className="products-page">
        <h1>Our Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <ProductList/>
      <InternationalLocation/>
      <CustomerReviews/>
      
    </>
  );
};

export default Home;
