import React, { useState } from 'react';
import '../styles/Explorer.css';

const places = [
  { id: 1, name: 'Englischer Garten', category: 'park', rating: 4.8 },
  { id: 2, name: 'Deutsches Museum', category: 'museum', rating: 4.7 },
  { id: 3, name: 'Viktualienmarkt', category: 'market', rating: 4.6 },
  { id: 4, name: 'Olympiapark', category: 'park', rating: 4.5 },
  { id: 5, name: 'Pinakothek der Moderne', category: 'museum', rating: 4.6 },
  { id: 6, name: 'Marienplatz', category: 'landmark', rating: 4.7 }
];

function Explorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaces = places.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explorer-page">
      <div className="explorer-header">
        <h1>Entdecken Sie interessante Orte</h1>
        <div className="explorer-controls">
          <input
            type="text"
            placeholder="Nach Orten suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Alle Kategorien</option>
            <option value="park">Parks</option>
            <option value="museum">Museen</option>
            <option value="market">Märkte</option>
            <option value="landmark">Sehenswürdigkeiten</option>
          </select>
        </div>
      </div>
      
      <div className="places-grid">
        {filteredPlaces.map(place => (
          <div key={place.id} className="place-card">
            <div className="place-image">
              <img src={`/assets/places/${place.category}.jpg`} alt={place.name} />
            </div>
            <div className="place-info">
              <h3>{place.name}</h3>
              <p className="category">{place.category}</p>
              <div className="rating">
                <span className="stars">{'★'.repeat(Math.floor(place.rating))}</span>
                <span className="rating-number">{place.rating}</span>
              </div>
              <button className="button-primary">Route planen</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;
