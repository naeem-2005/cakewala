import React from 'react';
import './About.css';
import BakerMenImg from "../../assets/image/Baker-Men.png";
import MadeWithLove from "../../assets/image/MadeWithLove.png";
import GalleryImage1 from "../../assets/image/cake2.jpg";
import GalleryImage2 from "../../assets/image/cake3.jpg";
import GalleryImage3 from "../../assets/image/cake4.jpg";
import GalleryImage4 from "../../assets/image/cake7.jpg";


const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Cooking was always my passion, and I enjoyed it very much. It started at home, where I was baking for my relatives and friends, and then I started to decorate my pastries and cakes in a unique and creative manner.
        </p>
        <p>
            When I started taking pictures of my baking and posting it on my social media, different people started asking me to make custom cakes more and more often. At the point it became too much and I found the assistant who later became a full-time member.
          </p>
      </div>
      <div className="about-image">
          <img src={BakerMenImg} alt="Baker Man" />
      </div>
      </div>
      
      <div className="gallery-header">
      <h1>Gallery</h1>
        <div className="gallery">
         
        <div className="gallery-item">
          <img src={GalleryImage1} alt="Gallery Image 1" />
          <p className="gallery-caption">Butter Scotch</p>
          </div>
        <div className="gallery-item">
            <img src={GalleryImage2} alt="Gallery Image 2" />
            <p className="gallery-caption">Chocolate Cake</p>
        </div>
          <div className="gallery-item">
            <img src={GalleryImage3} alt="Gallery Image 3" />
            <p className="gallery-caption">Red Velvet Cake</p>
          </div>
       <div className="gallery-item">
      <img src={GalleryImage4} alt="Gallery Image 4" />
            <p className="gallery-caption">Strawberry Cake</p>
          </div>
          
      </div>
      </div>
      
      <div className="made-with-love">
        <h2>Made with love</h2>
        <p>
          Our production is 100% handmade. For our desserts, we always use only the natural ingredients. It is very important for us to get quality ingredients with the taste of real fruit but with a twist.
        </p>
        <p>
          It should explain why we bake cakes often. There
        </p>
      </div>
      
      <div className="featured-product">
        <img src={MadeWithLove} alt="Featured Product" />
      </div>
    </section>
  );
};

export default About;
