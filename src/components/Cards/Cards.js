import React from "react";
import "../Cards/Cards.css";

const Cards = (props) => {
  const { title, imageUrl } = props;

  // const openBar = () => {
  //   const a = document.querySelector(".sidebar");
  //   a.style.width = "750px"
  //   // document.getElementById("main").style.marginLeft = "250px"
  // };

  return (
    <div className="cards">
      <div className="card__image">
        <img src={imageUrl} alt="" />
      </div>
      <p className="card__title">{title}</p>
      
    </div>
  );
};

export default Cards;
