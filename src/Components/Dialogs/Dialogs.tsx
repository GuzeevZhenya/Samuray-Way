import React, { FormEvent, useState } from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPageType } from "../../redux/state";

type DialogsPropsType = {
  state: DialogsPageType;
};
export const Dialogs = (props: DialogsPropsType) => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {props.state.dialogs.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <textarea
          value={messageInput}
          onChange={(e) => setMessageInput(e.currentTarget.value)}
        >
          input
        </textarea>
        {props.state.messages.map((el) => (
          <Message key={el.id} message={el.message} id={el.id} />
        ))}
      </div>
    </div>
  );
};
