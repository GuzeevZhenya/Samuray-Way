import React, { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Profile } from "./Components/Profile/Profile";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

// export type ProfilePage = {
//   postsData: any;
//   posts: Array<PostPropsType>;
// };
export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type DialogPropsType = {
  id: string | number;
  name: string;
};

export type MessagePropsType = {
  id: string | number;
  message: string;
};

export const App = () => {
  let [postsData, setPostsData] = useState<PostPropsType[]>([
    { id: 1, message: "Alex", likesCount: 12 },
    { id: 2, message: "Vitia", likesCount: 12 },
    { id: 3, message: "Valera", likesCount: 12 },
    { id: 4, message: "Vasia", likesCount: 12 },
    { id: 5, message: "Alex", likesCount: 12 },
  ]);

  let [dialogsData, setDialogsData] = useState<DialogPropsType[]>([
    { id: 1, name: "Alex" },
    { id: 2, name: "Vitia" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Vasia" },
    { id: 5, name: "Alex" },
  ]);

  let [messagesData, setMessageData] = useState<MessagePropsType[]>([
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "wtf" },
    { id: 4, message: "how are you" },
    { id: 5, message: "lol kek" },
  ]);

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={() => (
              <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
            )}
          />
          <Route path="/profile" element={<Profile postsData={postsData} />} />
        </Routes>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
