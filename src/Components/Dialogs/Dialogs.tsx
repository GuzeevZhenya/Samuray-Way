import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogPropsType = {
  name: string;
  id: string;
};

type MessagePropsType = {
  message: string;
};

const DialogItem = (props: DialogPropsType) => {
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: MessagePropsType) => {
  return <div className={styles.message}>{props.message}</div>;
};

export const Dialogs = (props: any) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name="Alex" id="1" />
        <DialogItem name="Vitia" id="2" />
        <DialogItem name="Valera" id="3" />
        <DialogItem name="Vasia" id="4" />
      </div>
      <div className={styles.messages}>
        <Message message="hi" />
        <Message message="hello" />
        <Message message="WTF" />
      </div>
    </div>
  );
};
