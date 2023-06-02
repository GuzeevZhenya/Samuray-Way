import React, { useState } from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostTypes } from "../Profile";

export const MyPosts = (props: PostTypes) => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.postsData.map((el) => (
          <Post
            key={el.id}
            id={el.id}
            likesCount={el.likesCount}
            message={el.message}
          />
        ))}
      </div>
    </div>
  );
};
