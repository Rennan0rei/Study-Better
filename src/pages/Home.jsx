// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Subjects from "../components/Subjects";
import Plans from "../components/Plans";
//import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects />
        <Simulados />
        <Plans />
      </main>
      <Footer />
    </>
  );
};

export default Home;
