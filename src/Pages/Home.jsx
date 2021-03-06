import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"
import CustomersReviews from "../Components/CustomersReviews";
import Story from "../Components/Story";
import Footer from "../Components/Footer";
import Contest from "../Components/Contest";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contest />
      <CustomersReviews />
      <Story />
      <Footer />
    </div>
  );
};

export default Home;
