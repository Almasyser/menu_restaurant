// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React from 'react';
import './app.css';
import MenuList from './components/MenuList';

const foodItems = [
  {
    itemName: "Caesar's Salad",
    description: "The original Caesar's Salad recipe",
    foodImage: 'https://bit.ly/2GJFu5W',
    price: 12,
    isFavorite: true
  },
  {
    itemName: 'Spaghetti Carbonara',
    description: "Better than your nonna's! All local and fresh ingredients",
    foodImage: 'https://bit.ly/2GBnz1n',
    price: 15,
    isFavorite: false
  },
  {
    itemName: 'Grilled Whole Fish',
    description: 'Fish of the day, grilled whole with a side of vegetables',
    foodImage: 'https://bit.ly/3d6iKsJ',
    price: 20,
    isFavorite: true
  },
  {
    itemName: 'Steak Florentine',
    description: 'Meat!',
    foodImage: 'https://bit.ly/3d6iKsJ',      // 3ddiSH1',
    price: 30,
    isFavorite: false
  }
];

function App() {
  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      {<MenuList props={foodItems} />}
      
    </div> 
  );
   
}

export default App
