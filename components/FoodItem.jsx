// src/components/FoodItem.jsx

import React from 'react';
 // Optional: if you split styles into a separate file

const FoodItem = ({ item }) => {
  return (
    <div className="food-item">
      <img src={item.image} alt={item.name} className="food-image" />
      <h3 className="food-name">{item.name}</h3>
      <p className="food-category">{item.category}</p>
      <p className="food-price">{item.price}</p>
    </div>
  );
};

export default FoodItem;
