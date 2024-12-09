import React from 'react';
import '../styles/TicketsPage.css';

const TicketsPage = () => {
  const tickets = [
    {
      id: 1,
      type: 'Einzelticket',
      price: '3.80',
      duration: '60 Minuten',
      features: ['Alle öffentlichen Verkehrsmittel', 'Stadtgebiet', 'Übertragbar']
    },
    {
      id: 2,
      type: 'Tagesticket',
      price: '8.60',
      duration: '24 Stunden',
      features: ['Alle öffentlichen Verkehrsmittel', 'Gesamtes Netz', 'Übertragbar']
    },
    {
      id: 3,
      type: 'Gruppenticket',
      price: '12.40',
      duration: '24 Stunden',
      features: ['Bis zu 5 Personen', 'Gesamtes Netz', 'Fahrrad inklusive']
    }
  ];

  const subscriptions = [
    {
      id: 1,
      name: 'Basic',
      price: '64.00',
      interval: 'pro Monat',
      features: [
        'Alle öffentlichen Verkehrsmittel',
        'Stadtgebiet',
        'Übertragbar',
        'Monatlich kündbar'
      ],
      recommended: false
    },
    {
      id: 2,
      name: 'Premium',
      price: '75.00',
      interval: 'pro Monat',
      features: [
        'Alle öffentlichen Verkehrsmittel',
        'Gesamtes Netz',
        'Übertragbar',
        'Fahrrad inklusive',
        '24/7 Support'
      ],
      recommended: true
    },
    {
      id: 3,
      name: 'Business',
      price: '89.00',
      interval: 'pro Monat',
      features: [
        'Alle öffentlichen Verkehrsmittel',
        'Gesamtes Netz + Nachbarregionen',
        'Übertragbar auf Mitarbeiter',
        'Fahrrad & Carsharing inklusive',
        'Persönlicher Account Manager'
      ],
      recommended: false
    }
  ];

  return (
    <div className="tickets-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Tickets & Abonnements</h1>
          <p>Finden Sie das passende Ticket für Ihre Mobilität</p>
        </div>
      </section>

      <section className="tickets-section">
        <h2>Einzeltickets</h2>
        <div className="tickets-grid">
          {tickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-header">
                <h3>{ticket.type}</h3>
                <div className="price">
                  <span className="amount">CHF {ticket.price}</span>
                  <span className="duration">/ {ticket.duration}</span>
                </div>
              </div>
              <ul className="features-list">
                {ticket.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="buy-button">Jetzt kaufen</button>
            </div>
          ))}
        </div>
      </section>

      <section className="subscriptions-section">
        <h2>Abonnements</h2>
        <div className="subscriptions-grid">
          {subscriptions.map(sub => (
            <div 
              key={sub.id} 
              className={`subscription-card ${sub.recommended ? 'recommended' : ''}`}
            >
              {sub.recommended && (
                <div className="recommended-badge">Empfohlen</div>
              )}
              <div className="subscription-header">
                <h3>{sub.name}</h3>
                <div className="price">
                  <span className="amount">CHF {sub.price}</span>
                  <span className="interval">{sub.interval}</span>
                </div>
              </div>
              <ul className="features-list">
                {sub.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="subscribe-button">
                Abo auswählen
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TicketsPage;