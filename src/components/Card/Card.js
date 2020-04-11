import React from "react";
import "./Card.css";
export default function Card({ monster }) {
  return (
    <div className="card-container">
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
}
