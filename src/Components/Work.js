import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Escolha seus pratos",
            text: "Parabéns pela escolha! Prepare-se para saborear um prato feito com ingredientes frescos e uma paixão inigualável. Bon appétit!"
        },
        {
            image: ChooseMeals, 
            title: "Escolhas com Frequência",
            text: "Ótima escolha! Agora, relaxe e desfrute de uma refeição que combina sabor excepcional com um toque de carinho em cada detalhe. Bom apetite!"
        },
        {
            image: DeliveryMeals,
            title: "Entrega Rápida",
            text: "Você fez uma escolha excelente! Agora, saboreie uma refeição que promete transformar cada mordida em uma experiência deliciosa e memorável. Aproveite cada instante!"
        },
    ];

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Trabalho</p>
                <h1 className="primary-heading">Como Funciona o Trabalho</h1>
                <p className="primary-text">
                Escolha Seus Pratos:
                Comece selecionando os pratos que você deseja saborear. Oferecemos uma variedade de opções frescas e deliciosas, preparadas com os melhores ingredientes e muito carinho.<br></br>
                Preparação com Cuidado:
                Após a sua escolha, nossa equipe dedicada se encarrega de preparar cada prato com atenção aos detalhes. Garantimos que cada refeição seja feita com ingredientes frescos e com um toque especial, garantindo sabor e qualidade em cada mordida.
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data, index) => (
                        <div className="work-section-info" key={index}>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Work;
