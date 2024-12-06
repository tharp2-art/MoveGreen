import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../styles/MapPage.css';

const MapPage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [transportMode, setTransportMode] = useState(1);
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const transportOptions = [
    { id: 1, icon: '🚗', label: 'Auto' },
    { id: 2, icon: '🚲', label: 'Velo' },
    { id: 3, icon: '🚆', label: 'Zug' },
    { id: 4, icon: '🚌', label: 'Bus' },
    { id: 5, icon: '🛴', label: 'E-Trottinett' },
    { id: 6, icon: '⚡', label: 'E-Bike' },
    { id: 7, icon: '🚕', label: 'Taxi' },
    { id: 8, icon: '🚶‍♂️', label: 'Zu Fuß' },
  ];

  const routeOptions = [
    {
      id: 1,
      icon: '🚗',
      title: 'Mit dem Auto',
      duration: '20',
      distance: '10.3',
      cost: '3.80',
      co2: '2.3',
      badge: 'fastest'
    },
    {
      id: 2,
      icon: '🚲',
      title: 'Mit dem Velo',
      duration: '35',
      distance: '10.3',
      cost: '0.00',
      co2: '0.00',
      badge: 'eco'
    },
    {
      id: 3,
      icon: '🚌',
      title: 'Mit Bus & Zug',
      duration: '28',
      distance: '11.5',
      cost: '2.70',
      co2: '0.4',
      badge: 'cheapest'
    }
  ];

  const getBadgeLabel = (badge) => {
    switch (badge) {
      case 'fastest':
        return 'Schnellste';
      case 'eco':
        return 'Umweltfreundlich';
      case 'cheapest':
        return 'Günstigste';
      default:
        return '';
    }
  };

  return (
    <div className="content-wrapper">
      <div className="map-page">
        <div className="left-sidebar">
          <div className="input-container">
            <label htmlFor="start">Start</label>
            <input
              type="text"
              id="start"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              placeholder="Startpunkt eingeben"
            />
          </div>
          <div className="input-container">
            <label htmlFor="end">Ziel</label>
            <input
              type="text"
              id="end"
              value={endLocation}
              onChange={(e) => setEndLocation(e.target.value)}
              placeholder="Zielpunkt eingeben"
            />
          </div>
          <select
            className="transport-mode-select"
            value={transportMode}
            onChange={(e) => setTransportMode(Number(e.target.value))}
          >
            {transportOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.icon} {option.label}
              </option>
            ))}
          </select>
          <div className="route-options">
            {routeOptions.map(route => (
              <div
                key={route.id}
                className={`route-option ${selectedRoute === route.id ? 'selected' : ''}`}
                onClick={() => setSelectedRoute(route.id)}
              >
                <div className="route-header">
                  <span className="route-icon">{route.icon}</span>
                  <span className="route-title">{route.title}</span>
                  {route.badge && (
                    <span className={`route-badge badge-${route.badge}`}>
                      {getBadgeLabel(route.badge)}
                    </span>
                  )}
                </div>
                <div className="route-details">
                  <span>Min. {route.duration}</span>
                  <span>km {route.distance}</span>
                  <span>CHF {route.cost}</span>
                  <span>CO₂ {route.co2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-container">
          <MapContainer
            center={[47.3769, 8.5417]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>

        <div className="right-sidebar">
          <h3>Routendetails</h3>
          {selectedRoute !== null && (
            <div className="route-details">
              <p>Transportmittel: {transportOptions.find(option => option.id === transportMode)?.label}</p>
              <p>Zeit: Min. {routeOptions[selectedRoute - 1].duration}</p>
              <p>Distanz: km {routeOptions[selectedRoute - 1].distance}</p>
              <p>CO₂-Einsparung: CO₂ {routeOptions[selectedRoute - 1].co2}</p>
              <p>Start: Bahnhofstraße 🏁</p>
              <p>Über: Hauptstraße ➡️</p>
              <p>Ziel: Marktplatz 📍</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
