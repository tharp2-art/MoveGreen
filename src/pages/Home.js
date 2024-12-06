import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleRouteCalculation = () => {
    navigate('/karte');
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Entdecken Sie nachhaltige Mobilität</h1>
          <p>Planen Sie Ihre Reisen umweltbewusst und effizient</p>
          <button className="button-primary" onClick={handleRouteCalculation}>
            Route berechnen
          </button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h2>Billets und Abos</h2>
          </div>
          <div className="feature-card">
            <i className="fas fa-star fa-2x"></i>
            <h2>Favoriten</h2>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marker-alt fa-2x"></i>
            <h2>Beliebte Orte</h2>
          </div>
          <div className="feature-card">
            <i className="fas fa-route fa-2x"></i>
            <h2>Empfohlene Route</h2>
          </div>
          <div className="feature-card">
            <i className="fas fa-leaf fa-2x"></i>
            <h2>Umwelt</h2>
          </div>
          <div className="feature-card">
            <i className="fas fa-car fa-2x"></i>
            <h2>Verkehr</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
