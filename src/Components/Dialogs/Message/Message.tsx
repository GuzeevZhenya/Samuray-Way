import React, { useState } from "react";
import styles from "./../Dialogs.module.css";

type MessagePropsType = {
  id: string | number;
  message: string;
};

export const Message = (props: MessagePropsType) => {
  return <div className={styles.message}>{props.message}</div>;
};
