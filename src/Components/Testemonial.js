import React from 'react';
import ProfilePic from "../Assets/marcello-matos.jpg";
import { AiFillStar } from "react-icons/ai";

export default function Testimonial() {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testemunho</p>
        <h1 className="primary-heading">
        Comentários de Clientes
        </h1>
        <p className="primary-text">
          "Minha experiência no Marcello's Food foi simplesmente excepcional. Desde o momento em que fiz meu pedido, até o último pedaço da refeição, tudo foi perfeito. O prato que escolhi estava incrivelmente saboroso e bem apresentado. Os ingredientes estavam frescos, e cada mordida revelava a dedicação e o cuidado na preparação.
          <br />
          A combinação de sabores foi perfeita, e o equilíbrio entre os temperos e as texturas fez com que a refeição fosse memorável. Além disso, a equipe foi extremamente atenciosa e prestativa, tornando o jantar ainda mais agradável. Com certeza voltarei para experimentar mais pratos e recomendo a todos que buscam uma experiência gastronômica de alta qualidade!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Profile" />
        <p>
          "Eu tive o prazer de jantar no Marcello's Food e a experiência foi simplesmente fantástica. Cada prato que provei estava cheio de sabor e claramente preparado com ingredientes de alta qualidade. A apresentação das refeições era impecável e demonstrava o verdadeiro cuidado e atenção aos detalhes.
          <br />
          O atendimento foi excelente; a equipe foi amigável e atenciosa, garantindo que cada aspecto da minha refeição fosse perfeito. A atmosfera do restaurante é acolhedora e sofisticada, tornando o ambiente ideal para uma refeição relaxante e deliciosa.
          <br />
          Estou ansioso para voltar e experimentar mais do menu. Sem dúvida, Marcello's Food se tornou o meu novo local favorito para uma refeição incrível. Recomendo fortemente a todos que procuram uma experiência gastronômica excepcional!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Marcello Matos</h2>
      </div>
    </div>
  );
};

