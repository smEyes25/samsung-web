import React from "react";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import FindProduct from "../components/findProduct/FindProduct";
import Narbar from "../components/narbar/Narbar";
import Product from "../components/products/Product";

const Home = () => {
  return (
    <>
      <Narbar />
      <Banner />
      <FindProduct />
      <Product />
      <Contact />
    </>
  );
};

export default Home;
