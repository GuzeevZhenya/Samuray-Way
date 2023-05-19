import React, { useState } from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogPropsType = {
  name: string;
  id: string | number;
};

type MessagePropsType = {
  message: string;
  id: string | number;
};

const DialogItem = (props: DialogPropsType) => {
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props: MessagePropsType) => {
  return <div className={styles.message}>{props.message}</div>;
};

export const Dialogs = (props: any) => {
  let [dialogsData, setDialogsData] = useState<DialogPropsType[]>([
    { id: 1, name: "Alex" },
    { id: 2, name: "Vitia" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Vasia" },
    { id: 5, name: "Alex" },
  ]);

  let [messagesData, setMessageData] = useState<MessagePropsType[]>([
    { id: 1, message: "Alex" },
    { id: 2, message: "Vitia" },
    { id: 3, message: "Valera" },
    { id: 4, message: "Vasia" },
    { id: 5, message: "Alex" },
  ]);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsData.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} />
        ))}
      </div>
      <div className={styles.messages}>
        {messagesData.map((el) => (
          <Message key={el.id} message={el.message} id={el.id} />
        ))}
      </div>
    </div>
  );
};
