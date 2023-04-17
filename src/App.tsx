import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Profile } from "./Components/Profile/Profile";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* <Profile /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
