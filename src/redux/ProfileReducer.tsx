import { PostType } from "./state";

const initialState = {
  posts: [
    { id: 1, message: "Alex", likesCount: 12 },
    { id: 2, message: "Vitia", likesCount: 4 },
    { id: 3, message: "Valera", likesCount: 54 },
    { id: 4, message: "Vasia", likesCount: 123 },
    { id: 5, message: "Alex", likesCount: 4 },
  ],
  newPostText: "",
};

export const profileReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostType = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      state.newPostText = action.newPostText;
      state.posts.push(newPost);
      return state;
    case "UPDATE_NEW_POST_TEXT":
      state.profilePage.newPostText = action.newPostText;
      // onChange();
      return state;

    default:
      return state;
  }
};
