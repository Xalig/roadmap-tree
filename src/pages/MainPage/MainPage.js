import React, { useState } from "react";
import CardsItem from "../../components/CardItem/CardsItem";
import Header from "../../components/Header/Header";
import "./MainPage.css";
import App1 from "./App1.js";
import SideBar from "./SideBar.js";

const MainPage = () => {
  const [clicked, setClicked] = useState(false);
  const pushed = () => {
    setClicked(!clicked);
  };

  return (
    <div className="main">
      <Header />
      <div className="commonBlock">
        <div className="cardsItem">
          <CardsItem clicked={pushed} />
        </div>
        <div className="Trees">{clicked && <App1 />}</div>
        {/* <SideBar /> */}
      </div>
    </div>
  );
};

export default MainPage;
