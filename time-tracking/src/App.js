import "./App.css";
import avatar from "./image-jeremy.png";
import data from "./data.json";
import IconWork from "./icon-work.svg";
import IconPlay from "./icon-play.svg";
import IconStudy from "./icon-study.svg";
import IconExercise from "./icon-exercise.svg";
import IconSocial from "./icon-social.svg";
import IconSelfCare from "./icon-self-care.svg";
import Card from "./components/Card";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("weekly");
  const IconArray = [
    IconWork,
    IconPlay,
    IconStudy,
    IconExercise,
    IconSocial,
    IconSelfCare,
  ];
  const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)",
  ];
  const cards = [];
  for (var i in data) {
    cards.push(
      <Card
        key={uuid()}
        data={{
          ...data[i],
          icon: IconArray[i],
          color: colors[i],
          current: state,
        }}
      />
    );
  }
  return (
    <>
      <div className="a">
        <div className="avatar-details">
          <img src={avatar} alt="" />
          <br />
          <div>
            Report for
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <ul>
          <li
            className={state === "daily" ? "active" : ""}
            onClick={function () {
              setstate("daily");
            }}
          >
            Daily
          </li>
          <li
            className={state === "weekly" ? "active" : ""}
            onClick={function () {
              setstate("weekly");
            }}
          >
            Weekly
          </li>
          <li
            className={state === "monthly" ? "active" : ""}
            onClick={function () {
              setstate("monthly");
            }}
          >
            Monthly
          </li>
        </ul>
      </div>
      {cards}
      <br/>
    </>
  );
}

export default App;
