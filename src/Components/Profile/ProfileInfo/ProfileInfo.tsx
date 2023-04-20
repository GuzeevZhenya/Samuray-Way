import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
          alt="main"
        />
      </div>
      <div className={styles.descriptionBlock}>
        <div>avatar + description</div>
      </div>
    </div>
  );
};
