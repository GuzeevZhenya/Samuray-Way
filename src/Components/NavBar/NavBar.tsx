import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/musics"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Musics
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
