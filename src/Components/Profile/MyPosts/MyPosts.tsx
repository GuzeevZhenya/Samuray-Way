import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message="hi" likesCount="0"/>
        <Post message="wtf" likesCount="20"/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
