import React, { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Profile } from "./Components/Profile/Profile";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
// import { updateNewPostText } from "./redux/state";

// type PropsType = {
//   state: StateType
//   addPost: (message: string) => void
// }

export const App = (props: any) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs state={props.stateData.messagesPage} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.stateData.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
