import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { stateData } from "./redux/state";
import { addPost } from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App stateData={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
