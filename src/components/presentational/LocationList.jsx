import React from 'react';
import { useLocations } from '../hooks/useLocations';
import { LocationCard } from './LocationCard';
import { Collapse } from './Collapse';

export const LocationList = () => {
  const { locations, isLoading } = useLocations();

  if (isLoading) return <p>Loading locations...</p>;

  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="episode" // 👈 применяем стили как у эпизодов
          title={location.name}
          content={<LocationCard location={location} />}
        />
      ))}
    </div>
  );
};
