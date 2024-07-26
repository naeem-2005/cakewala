import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SlideImage1 from '../../assets/image/banner1.jpg'; 
import SlideImage2 from '../../assets/image/banner2.jpg';
import SlideImage3 from '../../assets/image/banner3.jpg';
import './SplideBanner.css'; 

const Slider = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 3000,
      }}
    >
      <SplideSlide>
        <img src={SlideImage1} alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={SlideImage2} alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={SlideImage3} alt="Slide 3" />
      </SplideSlide>
      
    </Splide>
  );
};

export default Slider;
