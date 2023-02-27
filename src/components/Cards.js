import React from "react";

const Cards = ({
  id,
  name,
  image,
  likes,
  dislikes,
  handleLike,
  handleDislike,
}) => {
  return (
    <div className="card">
      <img
        src={image}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
        className="card-img-top img-fluid"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="like-dislike">
        <div className="like">
          <button className="btn btn-success" onClick={() => handleLike(id)}>
            <i class="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <span>{likes}</span>
        </div>
        <div className="dislike">
          <button className="btn btn-danger" onClick={() => handleDislike(id)}>
            <i class="bi bi-hand-thumbs-down-fill"></i>
          </button>
          <span>{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
