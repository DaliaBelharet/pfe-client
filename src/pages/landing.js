import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './landing.css';
// import { Carousel } from "flowbite-react";
import keyImage from '../img/keys.jpg'


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
        
            <li><Link to="/">Accueil</Link></li>
            <li><a href="#a-propos">À propos</a></li>
            <li><a href="#nos-services">Nos services</a></li>
            <li><button className="login-btn">Se connecter</button></li>
          </ul>
        </nav>  

        

        <div className="real-estate-image">
          <img src={keyImage} alt="Real Estate" width="500" height="auto" />
        </div>


        
       
        <div className="services" id="nos-services">
          <h2>Nos Services</h2>
          <div className="service">
            <div className="service-icon">Vente et location immobilières</div>
          </div>
          <div className="service">
            <div className="service-icon">Visite virtuelle des maisons</div>
          </div>
          <div className="service">
            <div className="service-icon">Un agent Immobilier a votre service</div>
          </div>
        </div>

        <div className="who-we-are" id="a-propos">
          <h2 className="about-title"> Darkoum : Votre porte d'entrée vers l'immobilier à Tizi Ouzou </h2>
          <div className="about-content">
            <p>
              Darkoum est un portail d'annonces immobilières en Algérie, spécialement à Tizi Ouzou. 
              Nous facilitons la recherche de votre nouveau chez-vous en intégrant la réalité virtuelle pour présenter les maisons avec tous les détails nécessaires. 
              Avec notre vaste sélection de propriétés et nos outils de recherche avancés, simplifiez le processus d'achat en accédant à des informations complètes et précises sur chaque annonce.
            </p>
          </div>
        </div>

        <footer className="footer" id="footer">
          <div className="footer-content">
            <p><a href="#about">À PROPOS</a></p>
            <p><a href="#nos-agences">NOS AGENCES IMMOBILIÈRES</a></p>
            <p>
              <a href="#contact">CONTACTEZ-NOUS</a>
              <br />
              Adresse: Tizi Ouzou, Algeria <br />
              Téléphone: +123456789 <br />
              Email: Tizihome@gmail.com
            </p>
            <p><a href="#legal">LÉGAL</a></p>
            
            
          </div>
        </footer>
      </div>


    </Router>
  );
}

export default App;
