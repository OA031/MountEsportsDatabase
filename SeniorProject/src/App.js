import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
// import Sample from "./components/Sample";
import ESportRegistration from "./pages/registration/ESportRegistration";
import RocketRegistration from "./pages/registration/RocketRegistration";
import SmashRegistration from "./pages/registration/SmashRegistration";
import ValorantRegistration from "./pages/registration/ValorantRegistration";
import OverwatchRegistration from "./pages/registration/OverwatchRegistration";
import ViewPlayers from "./pages/players/ViewPlayers";
import DropDownRegistrationSelect from "./pages/registration/DropDownRegistrationSelect";
import SearchByPlayer from "./pages/search/SearchByPlayer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ESportRegistration />}/>
        <Route path="/rocket-registration" element={<RocketRegistration />}/>
        <Route path="/smash-registration" element={<SmashRegistration />}/>
        <Route path="/valorant-registration" element={<ValorantRegistration />}/>
        <Route path="/overwatch-registration" element={<OverwatchRegistration />}/>
        <Route path="/view-players" element={<ViewPlayers />}/>
        <Route path="/drop-down-registration-select" element={<DropDownRegistrationSelect />}/>
        <Route path="/search" element={<SearchByPlayer />}/>
      </Routes>
    </div>
  );
}

export default App;
