import React from "react";
import BannerDetailProduct from "../components/bannerDetailProduct/BannerDetailProduct";
import ConfigProduct from "../components/configProduct/ConfigProduct";
import Narbar from "../components/narbar/Narbar";
import Price from "../components/price/Price";
import Footer from "../components/footer/Footer";

const DetailProduct = () => {
  return (
    <>
      <Narbar />
      <Price />
      <BannerDetailProduct />
      <ConfigProduct />
      <Footer />
    </>
  );
};

export default DetailProduct;
