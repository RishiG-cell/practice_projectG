import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import foto from "../assets/overige_foto.png";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="homePage">
        <article className="home">
          <h3>Menu</h3> <img src={foto} width="120px" />
        </article>
        <article className="home">
          <h3>Locatie</h3> <img src={foto} width="120px" />
        </article>
        <article className="home">
          <h3>Contact</h3> <img src={foto} width="120px" />
        </article>
        <article className="home">
          <h3>About us </h3> <img src={foto} width="120px" />
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
