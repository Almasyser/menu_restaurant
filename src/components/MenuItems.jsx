import React from 'react';
import { useState } from "react";
import "./MenuItems.css";

function MenuItems({props}) {
  const [isFavorite, setIsFavorite]= useState(props.isFavorite);
  function handleClick(){
    setIsFavorite(!isFavorite);
    }
  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={props.foodImage} alt="" />
        </div>
        <div className="itemDescription">
          <h3>{props.itemName}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div id="favorite"
        className = {isFavorite ? "favorite":"nofavorite"}
        onClick={handleClick}></div>
        <div>{`${props.price},00 €`}</div>
      </div>
    </div>
  );
}

export default MenuItems;