import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = mockData.find(p => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <main className="property-details">
      <h1>{property.title}</h1>
      <img src={property.imageUrl} alt={property.title} />
      <p>Location: {property.location}</p>
      <p>Price: {property.price} ETB</p>
      <p>Size: {property.size} sq. m</p>
      <p>Rooms: {property.rooms}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Description: {property.description}</p>
    </main>
  );
};

export default PropertyDetails;
