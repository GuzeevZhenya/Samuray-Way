import React from "react";
import styles from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

export type PostsPropsType = {
  profilePage: ProfilePageType;
  addPost: (message: string) => void;
};

export const Profile = (props: PostsPropsType) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} addPost={props.addPost} />
      </div>
    </div>
  );
};
