import React from "react";

const Tables = ({dishes}) => {
  return (
    <div>
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
};

export default Tables;
