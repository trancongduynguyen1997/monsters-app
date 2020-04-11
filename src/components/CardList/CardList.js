import React from "react";
import "./CardList.css";

import Card from "../Card/Card";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
}
