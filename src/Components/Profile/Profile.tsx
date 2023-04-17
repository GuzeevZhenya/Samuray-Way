import React from "react";
import styles from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
          alt="main"
        />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};
