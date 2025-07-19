import React from 'react';

export const LocationCard = ({ location }) => {
  return (
    <div className="location-card">
      <h4>{location.name}</h4>
      <p>🧬 Type: {location.type}</p>
      <p>🌌 Dimension: {location.dimension}</p>
      <p>👤 Residents: {location.residents.length}</p>
    </div>
  );
};

import PropTypes from 'prop-types';

LocationCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string,
    residents: PropTypes.array,
  }).isRequired,
};
