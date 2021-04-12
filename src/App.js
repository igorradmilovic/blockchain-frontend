import React from "react";

import TypeWriter from "typewriter-effect";

import Dashboard from "./components/sections/dashboard/DashboardContainer";
import LiveFeed from "./components/sections/live-feed/LiveFeed";
import Input from "./components/sections/input/InputContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="page__header">
        <TypeWriter
          options={{
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Class ThisIsABlockchain {<br /> // Created by Igor Radmilovic<br />};"
              )
              .pauseFor(1500)
              .start();
          }}
        />
      </div>
      <div className="page__body">
        <div className="page__section two_sections">
          <Dashboard />
          <Input />
        </div>
        <div className="page__section one_section">
          <LiveFeed />
        </div>
      </div>
    </div>
  );
};

export default App;
