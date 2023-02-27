import React, { useState, useEffect } from "react";

function VotingApp() {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Pizza",
      image: "./components/images/pizza.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Burger",
      image: "./components/images/burger.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 3,
      name: "Pasta",
      image: "./components/images/pasta.jpg",
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
        {dishes.map((dish) => (
          <div key={dish.id} className="dish">
            <img src={dish.image} alt={dish.name} />
            <div className="like-dislike">
              <div className="like">
                <button
                  className="btn btn-success"
                  onClick={() => handleLike(dish.id)}
                >
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </button>
                <span>{dish.likes}</span>
              </div>
              <div className="dislike">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDislike(dish.id)}
                >
                  <i class="bi bi-hand-thumbs-down-fill"></i>
                </button>
                <span>{dish.dislikes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Votes</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Likes</th>
            <th>Dislikes</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish.id}>
              <td>{dish.name}</td>
              <td>{dish.likes}</td>
              <td>{dish.dislikes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VotingApp;
