import React from 'react';
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-icons">
                <a href="https://twitter.com/?lang=pt-br" target="_blank" rel="noopener noreferrer">
                    <BsTwitter />
                </a>
                <a href="https://www.linkedin.com/in/marcello-matos-813199278/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin />
                </a>
                <a href="https://www.youtube.com/@marcellomatos3809" target="_blank" rel="noopener noreferrer">
                    <BsYoutube />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100018109597228" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Qualidade</span>
                <span>Ajuda</span>
                <span>Compartilhar</span>
                <span>Carreira</span>
                <span>Testemunho</span>
                <span>Trabalho</span>
            </div>
            <div className="footer-section-columns">
                <span>55+ (11)9 3802-8926</span>
                <span>contato@marcellósfood.com.br</span>
                <span>ajuda@marcellósfood.com.br</span>
                <span>faleconosco@marcellósfood.com.br</span>
            </div>
            <div className="footer-section-columns">
                <span>Termos & Condições</span>
                <span>Política de Privacidade</span>
            </div>
        </div>
    </div>
  );
};

export default Footer;
