import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "aed7c56f-7010-4e83-8441-f556b6ae3150"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus("Success! Sua mensagem foi enviada.");
      setEmail(""); 
      setMessage(""); 

      setTimeout(() => {
        setFormStatus(null);
      }, 1000);
    
    } else {
      setFormStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem Alguma Pergunta em Mente?</h1>
      <h1 className="primary-heading">Vamos Ajudar Você!</h1>
      <form className="contact-form-container" onSubmit={onSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="email@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className="secondary-button">Enviar</button>
      </form>
      {formStatus && <p>{formStatus}</p>} 
    </div>
  );
};

export default Contact;

