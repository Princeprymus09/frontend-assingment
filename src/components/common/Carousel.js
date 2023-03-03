import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = ({}) => {
  return (
    <Carousel
      showThumbs={true}
    >
      <div>
        <img src="banners/1.png" alt="#" />
      </div>
      <div>
        <img src="banners/2.png" alt="#"/>
      </div>
      <div>
        <img src="banners/3.png" alt="#"/>
      </div>
      <div>
        <img src="banners/4.png" alt="#"/>
      </div>
    </Carousel>
  );
};

export default CarouselComp;