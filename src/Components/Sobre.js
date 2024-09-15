import React from 'react';
import AboutBackground from "../Assets/about-background.png"; 
import AboutBackgroundImage from "../Assets/about-background-image.png"; 
import { BsFillPlayCircleFill } from "react-icons/bs";

const Sobre = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About Background Image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          A Refeição é a Parte Importante de uma Dieta Balanceada
        </h1>
        <p className="primary-text">
          "Saboreie o extraordinário: cada prato é uma obra-prima feita com ingredientes frescos e paixão, prometendo uma experiência culinária inesquecível."
        </p>
        <p className="primary-text">
          "Transforme suas refeições em momentos memoráveis com nossos pratos inovadores, preparados com ingredientes frescos e uma pitada de criatividade."
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia Mais</button>
          <a href="https://www.youtube.com/shorts/VWolyUESzsk" target="_blank" rel="noopener noreferrer">
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Assista ao Vídeo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
