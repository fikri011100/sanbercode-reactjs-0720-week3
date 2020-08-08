import React from "react";
import logo from "./logo.svg";
import HargaBuah from "./View/TugasDay1/tugas11.js";
import CountDown from "./View/TugasDay2/tugas12.js";
import HargaBuahCRUD from "./View/TugasDay3/tugas13.js";
import Timer from "./Component/Timer.js";
import HargaBuahDay14 from "./View/TugasDay4/tugas14.js";
import "./App.css";
import Tugas15Routes from "./View/TugasDay5/Tugas15Routes.js";

function App() {
  return (
    <div>
      {/* <h1>Tugas day 1</h1>
      <HargaBuah />
      <h1>Tugas day 2</h1> */}
      {/* <HargaBuahCRUD /> */}
      {/* <HargaBuahDay14 /> */}
      <Tugas15Routes />
    </div>
  );
}

export default App;
