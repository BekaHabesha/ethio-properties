import React from 'react';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <img src={property.imageUrl} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.location}</p>
    <p>{property.price} Birr</p>
    <p>{property.size} sqm | {property.rooms} rooms</p>
    <p>Type: {property.type} | Floor: {property.floor}</p>
  </div>
);

export default PropertyCard;
