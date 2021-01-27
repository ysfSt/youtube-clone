import React, { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import { Switch as SwitchButton } from "@material-ui/core/";
import SideBar from "./SideBar/SideBar";
import { Switch, Route } from "react-router-dom";
import VideoContainer from "./VideoContainer/VideoContainer";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleChange = (event) => {
    setIsDark(!isDark);
  };
  return (
    <div className={`app ${isDark && "app--dark"}`}>
      <div className={`app__header ${isDark && "app__header--dark"}`}>
        <Header isChecked={isDark} />
        <SwitchButton className="switch" onChange={handleChange} />
      </div>
      <SideBar isChecked={isDark} />
      <div className="main">
        <Switch>
          <Route path="/" exact component={VideoContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
