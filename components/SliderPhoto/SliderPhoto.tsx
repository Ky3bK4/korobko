import React from "react";
// @ts-expect-error "Slider"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./SliderPhoto.module.css";
import Image from "next/image";
export const SliderPhoto = ({ photos }: { photos: string[] }) => {
  return (
    <div className="my-10 w-full max-w-3xl">
      <Slider
        settings={{
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        }}
        className={styles.carouselSlider}
      >
        {photos &&
          photos?.map((photo, i) => (
            <div
              key={i}
              className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
            >
              <Image fill className="object-cover" src={photo} alt="Фото" />
            </div>
          ))}
      </Slider>
    </div>
  );
};
