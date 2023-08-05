import RootLayout from "@/components/layouts/RootLayout";
import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
import banner3 from "../assets/images/banner/banner-3.jpg";
import banner4 from "../assets/images/banner/banner-4.jpg";
import LatestProductPage from "./products";
import FeaturesProductPage from "./feature-products";

function HomePage() {
  return (
    <section>
      <Carousel autoplay>
        <div className="w-full">
          <Image style={{ borderRadius: "10px" }} src={banner1} alt="Slider" />
          {/* <h3 style={contentStyle}>1hii</h3> */}
        </div>
        <div className="w-full">
          <Image style={{ borderRadius: "10px" }} src={banner2} alt="Slider" />
        </div>
        <div className="w-full">
          <Image style={{ borderRadius: "10px" }} src={banner3} alt="Slider" />
        </div>
        <div className="w-full">
          <Image style={{ borderRadius: "10px" }} src={banner4} alt="Slider" />
        </div>
      </Carousel>
      <FeaturesProductPage />
      <LatestProductPage />
    </section>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
