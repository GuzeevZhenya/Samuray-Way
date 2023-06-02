import React from "react";
import styles from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostPropsType } from "../../App";

export type PostTypes = {
  postsData: Array<PostPropsType>;
};

export const Profile = (props: PostTypes) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} />
      </div>
    </div>
  );
};
