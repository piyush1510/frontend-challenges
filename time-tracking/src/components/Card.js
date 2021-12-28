import React from "react";
import "./Card.css";
import Ellipse from "./Ellipse";

export default function Card(props) {
  const msgs = {
    weekly: "Last Week",
    daily: "yesterday",
    monthly: "last month",
  };
  return (
    <div
      style={{ backgroundColor: props.data.color }}
      className={"card " + props.data.title.replace(" ", "").toLowerCase()}
    >
      <img src={props.data.icon} alt={props.data.title} />
      <div className="data">
        <div className="title-container">
          <p>{props.data.title}</p>
          <Ellipse />
        </div>
        <div className="time">
          <h1>{props.data.timeframes[props.data.current].current}hrs</h1>
          <p>
            {msgs[props.data.current]} -{" "}
            {props.data.timeframes[props.data.current].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
