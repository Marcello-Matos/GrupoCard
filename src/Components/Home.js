import React from 'react';
import Navbar from "./Navbar";
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={`${process.env.PUBLIC_URL}/Assets/home-banner-background.png`} alt="Banner Background" />
          
        </div>
        <div className="home-text-sectionr" >
          <h1 className="primary-heading " >
            Sua Comida Quente Favorita Entregue quente e Fresca
          </h1>
          <p className="primary-text" >
          "Deixe os chefs da Marcello´s Foodie fazerem o trabalho pesado  preparações, marinados e mais para que você possa desfrutar de refeições frescas e deliciosas com zero esforço."
          </p>
          <button className="secondary-button" >
            Encomende Agora <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container" >
        <img src={`${process.env.PUBLIC_URL}/Assets/home-banner-image.png`} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

