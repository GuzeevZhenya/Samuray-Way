import React, { useState } from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogPropsType, MessagePropsType } from "../../App";

export type DialogsPageType = {
  dialogsData: DialogPropsType[];
  messagesData: MessagePropsType[];
};

export const Dialogs = (props: DialogsPageType) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {props.dialogsData.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} />
        ))}
      </div>
      <div className={styles.messages}>
        {props.messagesData.map((el) => (
          <Message key={el.id} message={el.message} id={el.id} />
        ))}
      </div>
    </div>
  );
};
