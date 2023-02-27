import React, { useState, useEffect } from "react";
import pizza from './images/pizza.jpg'
import burger from './images/burger.jpg'
import pasta from './images/pasta.jpg'
import Cards from "./Cards";
import Tables from "./Tables";

function VotingApp() {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Pizza",
      image: pizza,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Burger",
      image: burger,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 3,
      name: "Pasta",
      image: pasta,
      likes: 0,
      dislikes: 0,
    },
  ]);

  useEffect(() => {
    dishes.forEach((dish) => {
      if (dish.likes >= 10) {
        console.log(`The winner is ${dish.name} with ${dish.likes} likes!`);
      }
    });
  }, [dishes]);

  const handleLike = (id) => {
    const updatedDishes = dishes.map((dish) =>
      dish.id === id ? { ...dish, likes: dish.likes + 1 } : dish
    );
    setDishes(updatedDishes);
  };

  const handleDislike = (id) => {
    const updatedDishes = dishes.map((dish) =>
      dish.id === id ? { ...dish, dislikes: dish.dislikes + 1 } : dish
    );
    setDishes(updatedDishes);
  };

  return (
    <div className="results">
      <h1>Vote for the Best Dish</h1>
      <div className="dishes">
        {dishes?.map((dish)=> <Cards {...dish} handleLike={handleLike} handleDislike={handleDislike}/>)}
      </div>
    <Tables dishes={dishes}/>
    </div>
  );
}

export default VotingApp;
