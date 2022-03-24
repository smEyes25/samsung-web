import React from "react";
import Banner from "../components/banner/Banner";
import Bar from "../components/bar/Bar";
import Contact from "../components/contact/Contact";
import FindProduct from "../components/findProduct/FindProduct";
import Footer from "../components/footer/Footer";
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
      <Bar />
      <Footer />
    </>
  );
};

export default Home;
