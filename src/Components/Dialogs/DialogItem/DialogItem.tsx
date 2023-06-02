import React, { useState } from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogPropsType = {
  id: string | number;
  name: string;
};

export const DialogItem = (props: DialogPropsType) => {
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
