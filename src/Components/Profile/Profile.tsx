import React from "react";
import styles from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

export type PostsPropsType = {
  profilePage: ProfilePageType;
  dispatch: () => void;
};

export const Profile = (props: PostsPropsType) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};
