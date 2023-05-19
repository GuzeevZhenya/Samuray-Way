import React, { useState } from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export type PostPropsType = {
  message: string;
  likesCount: string | number;
  id: string | number;
};

export const MyPosts = () => {
  let [postsData, setPostsData] = useState<PostPropsType[]>([
    { id: 1, message: "Alex", likesCount: 12 },
    { id: 2, message: "Vitia", likesCount: 12 },
    { id: 3, message: "Valera", likesCount: 12 },
    { id: 4, message: "Vasia", likesCount: 12 },
    { id: 5, message: "Alex", likesCount: 12 },
  ]);

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
        {postsData.map((el) => (
          <Post key={el.id} id={el.id} likesCount={el.likesCount} message={el.message} />
        ))}
      </div>
    </div>
  );
};
