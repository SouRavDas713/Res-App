import React, { useState, useEffect } from 'react';
import MenuFilter from './components/MenuFilter';
import FoodItem from './components/FoodItem';
import Footer from './components/Footer';
import Header from './components/Header';
import foodData from './data/foodData';
import './App.css'; // Import CSS

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false); // Add mounted state

  useEffect(() => {
    setMounted(true); // Set mounted to true after initial render
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredFood = selectedCategory === 'All'
    ? foodData
    : foodData.filter((item) => item.category === selectedCategory);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  if (!mounted) return null; // Don't render until mounted

  return (
    <div className="app-container">
      <Header />
      <MenuFilter onCategoryChange={handleCategoryChange} categories={categories} />
      <main className="main-content">
        <div className="food-grid">
          {filteredFood.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
