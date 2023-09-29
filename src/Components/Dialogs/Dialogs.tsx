import React, { FormEvent, useState } from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ActionsType, DialogsPageType } from "../../redux/state";
import { sendMessageActionCreator } from "../../redux/state";

type DialogsPropsType = {
  state: DialogsPageType;
  dispatch: (action: any) => void;
  store: any;
};
export const Dialogs = (props: DialogsPropsType) => {
  const [messageInput, setMessageInput] = useState("");

  let state = props.store.getState().dialogReducer;

  let textInput = React.createRef<HTMLTextAreaElement>();

  let addDialogMessage = () => {
    let text = textInput.current!.value;
    console.log(text);
    if (text) {
      props.dispatch(sendMessageActionCreator(text));
    }
    setMessageInput("");
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {props.state.dialogs.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <textarea
          ref={textInput}
          value={messageInput}
          onChange={(e) => setMessageInput(e.currentTarget.value)}
        >
          input
        </textarea>
        <button onClick={addDialogMessage}>Add</button>
        {props.state.messages.map((el) => (
          <Message key={el.id} message={el.message} id={el.id} />
        ))}
      </div>
    </div>
  );
};
