import { useState } from "react";
import { rerenderEntireTree } from "../render";

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};

export type DialogsPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  messagesPage: DialogsPageType;
  sidebar: SidebarType;
};

export const stateData: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, message: "Alex", likesCount: 12 },
      { id: 2, message: "Vitia", likesCount: 4 },
      { id: 3, message: "Valera", likesCount: 54 },
      { id: 4, message: "Vasia", likesCount: 123 },
      { id: 5, message: "Alex", likesCount: 4 },
    ],
    newPostText: "it-camastunra",
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Vitia" },
      { id: 3, name: "Valera" },
      { id: 4, name: "Vasia" },
      { id: 5, name: "Alex" },
    ],

    messages: [
      { id: 1, message: "hi" },
      { id: 2, message: "hello" },
      { id: 3, message: "wtf" },
      { id: 4, message: "how are you" },
      { id: 5, message: "lol kek" },
    ],
  },
  sidebar: {},
};

export let addPost = (postMessage: string) => {
  const newStateData = { ...stateData };
  const newPost: PostType = {
    id: newStateData.messagesPage.messages.length + 1,
    message: postMessage,
    likesCount: 0,
  };

  console.log(newPost);

  stateData.profilePage.posts.push(newPost);

  const newMessages = [...newStateData.messagesPage.messages, newPost];
  rerenderEntireTree(stateData);
  // setStateData({
  //   ...newStateData,
  //   messagesPage: {
  //     ...newStateData.messagesPage,
  //     messages: newMessages,
  //   },
  // });
};
