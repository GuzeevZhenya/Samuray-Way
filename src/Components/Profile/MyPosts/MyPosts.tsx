import React, { createRef, useState } from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/state";

type PostPropsType = {
  posts: PostType[];
  addPost: (message: string) => void;
};

export const MyPosts = (props: PostPropsType) => {
  const [postData, setPostData] = useState("");

  let textInput = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    let text = textInput.current?.value;
    if (text) {
      props.addPost(text);
      setPostData('');
    }
  }; 

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={textInput}
            value={postData}
            onChange={(e) => setPostData(e.currentTarget.value)}
          ></textarea>
        </div>
        <div>
          <button onClick={() => addPost()}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.posts.map((el) => (
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
