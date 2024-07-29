import React from 'react';
import './Services.css';
import ChocolateImg from '../../assets/image/Chocolate-Cake.jpeg';
import Cake2Img from '../../assets/image/cake2.jpg';
import Cake3Img from '../../assets/image/cake9.jpg'; 
import CustomerImg from '../../assets/image/profileimage.png';
import BakerImg from '../../assets/image/cake15.jpg'; 
import CakeHeroImg from '../../assets/image/cake12.jpg'; 

const CakeItem = ({ imgSrc, title, description, rating }) => {
  return (
    <div className="services-item">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="services-rating">
        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
        {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
      </div>
    </div>
  );
};

const TestimonialItem = ({ text, imgSrc, name }) => {
  return (
    <div className="services-testimonial-item">
      <p>{text}</p>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const Services = () => {
  const cakes = [
    {
      imgSrc: ChocolateImg,
      title: 'Chocolate Cake',
      description: 'Rich chocolate cake with chocolate frosting',
      rating: 4.5,
    },
    {
      imgSrc: Cake2Img, // Use imported image here
      title: 'Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust',
      rating: 5,
    },
    {
      imgSrc: Cake3Img, // Use imported image here
      title: 'Red Velvet Cake',
      description: 'Moist red velvet cake with cream cheese frosting',
      rating: 5,
    },
  ];

  const testimonials = [
    {
      text: '"The cakes here are really good. I had a kit kat cake which was great! Surely worth a try."',
      imgSrc: CustomerImg, // Use imported image here
      name: 'Darren Seeker',
    },
  ];

  return (
    <main>
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Bring you Happiness through a piece of cake</h1>
          <p>We make different types of cakes, chocolate cakes, cheesecakes, fruit cakes, or anything you want.</p>
          <button className="services-btn">Order Now</button>
          <button className="services-btn">View Menu</button>
        </div>
        <div className="services-hero-image">
          <img src={CakeHeroImg} alt="Cake" /> {/* Use imported image here */}
        </div>
      </section>
      <section className="services-best-selling">
        <h2>Try Our Best Selling</h2>
        <div className="services-best-selling-items">
          {cakes.map((cake, index) => (
            <CakeItem
              key={index}
              imgSrc={cake.imgSrc}
              title={cake.title}
              description={cake.description}
              rating={cake.rating}
            />
          ))}
        </div>
      </section>
      <section className="services-about">
        <h2>We bake for you Fresh From the oven</h2>
        <p>Our quality ingredients and the expert craftsmanship go into every cake we make, to ensure maximum enjoyment.</p>
        <img src={BakerImg} alt="Baker" /> {/* Use imported image here */}
      </section>
      <section className="services-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="services-testimonials-items">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              text={testimonial.text}
              imgSrc={testimonial.imgSrc}
              name={testimonial.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
