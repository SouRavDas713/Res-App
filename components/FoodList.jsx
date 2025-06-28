// src/components/FoodList.jsx

import React from 'react';
import FoodItem from './FoodItem';
// Optional: import only if you're using separate CSS

const FoodList = ({ foods }) => {
  if (foods.length === 0) {
    return <p className="no-food-message">No food items found.</p>;
  }

  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodItem key={food.id} item={food} />
      ))}
    </div>
  );
};

export default FoodList;
