import { MessageType } from "./state";

const initialState = {
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
};

export const dialogReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_BODY":
      const newPost: MessageType = {
        id: 5,
        message: action.newDialogText,
      };
      state.newDialogText = action.newDialogText;
      state.messages.push(newPost);
  }
  
  return state;
};
