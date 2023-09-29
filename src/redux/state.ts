import { profile } from "console";
import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";

let rerenderEntireTree = () => {
  console.log("state");
};

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
  newDialogText: string;
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  messagesPage: DialogsPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  dispatch: (action: ActionsType) => void;
  subscribe: (callback: () => void) => void;
  _onChange: () => void;
};

export type AddPostActionType = {
  type: "ADD-POST";
  newPostText: string;
};

export type ChangePostType = {
  type: "UPDATE_NEW_POST_TEXT";
  newPostText: string;
};

export type ChangeDialogType = {
  type: "UPDATE_NEW_MESSAGE_BODY";
  newDialogText: string;
};

export type ActionsType = AddPostActionType | ChangePostType | ChangeDialogType;

export let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Alex", likesCount: 12 },
        { id: 2, message: "Vitia", likesCount: 4 },
        { id: 3, message: "Valera", likesCount: 54 },
        { id: 4, message: "Vasia", likesCount: 123 },
        { id: 5, message: "Alex", likesCount: 4 },
      ],
      newPostText: "",
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
      newDialogText: "",
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },
  _onChange() {
    console.log("state");
  },
  subscribe(observer: any) {
    this._onChange = observer;
  },

  // addPost() {
  //   // const newStateData = { ...this._state };
  //   const newPost: PostType = {
  //     // id: newStateData.messagesPage.messages.length + 1,
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.newPostText = "";
  //   console.log(newPost);

  //   this._state.profilePage.posts.push(newPost);

  //   // const newMessages = [...newStateData.messagesPage.messages, newPost];
  //   this.rerenderEntireTree();
  //   // setStateData({
  //   //   ...newStateData,
  //   //   messagesPage: {
  //   //     ...newStateData.messagesPage,
  //   //     messages: newMessages,
  //   //   },
  //   // });
  // },
  // updateNewPostText(newText: any) {
  //   console.log(this._state);
  //   this._state.profilePage.newPostText = newText;
  //   this.rerenderEntireTree();
  // },
  dispatch(action: ActionsType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);

    // switch (action.type) {
    //   // case "ADD-POST": {
    //   //   const newPost: PostType = {
    //   //     id: 5,
    //   //     message: action.newPostText,
    //   //     likesCount: 0,
    //   //   };
    //   //   this._state.profilePage.newPostText = "";

    //   //   this._state.profilePage.posts.push(newPost);
    //   //   // this._onChange(this._state);

    //   //   // const newMessages = [...newStateData.messagesPage.messages, newPost];
    //   //   this._onChange();
    //   //   // setStateData({
    //   //   //   ...newStateData,
    //   //   //   messagesPage: {
    //   //   //     ...newStateData.messagesPage,
    //   //   //     messages: newMessages,
    //   //   //   },
    //   //   // });
    //   //   break;
    //   // }
    //   case "UPDATE_NEW_POST_TEXT":
    //     this._state.profilePage.newPostText = action.newPostText;
    //     this._onChange();
    //     break;
    //   // case "UPDATE_NEW_MESSAGE_BODY":
    //   //   const newPost: MessageType = {
    //   //     id: 5,
    //   //     message: action.newDialogText,
    //   //   };
    //   //   this._state.messagesPage.newDialogText = action.newDialogText;
    //   //   this._state.messagesPage.messages.push(newPost);
    //   //   this._onChange();
    //   //   break;
    // }
  },
};

export const addPostActionCreator = (text: string): AddPostActionType => {
  return { type: "ADD-POST", newPostText: text };
};

export const sendMessageActionCreator = (text: string) => {
  return { type: "UPDATE_NEW_MESSAGE_BODY", newDialogText: text };
};

export const updateNewPostTextActionCreator = (
  text: string
): ChangePostType => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: text,
  };
};

export const updateNewDialogTextActionCreator = (
  text: string
): ChangeDialogType => {
  return {
    type: "UPDATE_NEW_MESSAGE_BODY",
    newDialogText: text,
  };
};
