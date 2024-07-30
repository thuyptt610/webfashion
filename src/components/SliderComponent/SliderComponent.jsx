// src/components/SliderComponent/SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import 'antd/dist/antd.css';

const SliderComponent = ({ arrImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {arrImage.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
