import React from "react";
import "./Main.scss";
import {categories} from "../../data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="cards-container">
        <Card data={categories} />
      </div>
    </div>
  );
};

export default Main;
