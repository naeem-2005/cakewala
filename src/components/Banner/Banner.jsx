import React from 'react';
import './Banner.css';
import BannerImg from '../../assets/image/bannercake.png';
import BackgroundVideo from '../../assets/Vedio/bannervedio.mp4'; 

const Banner = () => {
  return (
    <div className="banner">
      <video className="video-background" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        
      </video>
      <div className="banner-content">
        <h1>The Ideal Prepared Cake Regular!</h1>
        <p>These cakes are made with butter or another fat, like vegetable shortening. The common way is to mix the fat and sugar, then add eggs, and then add flour.</p>
        <button className="btn">Read More</button>
        <button className="btn">Order Now</button>
      </div>
      <div className="banner-image">
        <img src={BannerImg} alt="Cake" />
      </div>
      
    </div>
  );
};

export default Banner;
