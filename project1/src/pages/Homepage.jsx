import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="homePage">
        <article className="home">Menu</article>
        <article className="home">Locatie</article>
        <article className="home">Contact</article>
        <article className="home">About us</article>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
