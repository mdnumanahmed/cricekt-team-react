import React from "react";

const Player = ({player, handleAddToTeam}) => {
    const {img, name, price, ratings} = player
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToTeam(player)} className="btn btn-primary">Add to Team</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
