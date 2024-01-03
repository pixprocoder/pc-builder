"use client";
import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
import banner3 from "../assets/images/banner/banner-3.jpg";
import banner4 from "../assets/images/banner/banner-4.jpg";

const Banner = () => {
  return (
    <Carousel style={{ width: "100%" }} autoplay>
      <div className="w-full">
        <Image style={{}} src={banner1} alt="Slider" />
      </div>
      <div className="w-full">
        <Image style={{}} src={banner2} alt="Slider" />
      </div>
      <div className="w-full">
        <Image style={{}} src={banner3} alt="Slider" />
      </div>
      <div className="w-full">
        <Image style={{}} src={banner4} alt="Slider" />
      </div>
    </Carousel>
  );
};

export default Banner;
