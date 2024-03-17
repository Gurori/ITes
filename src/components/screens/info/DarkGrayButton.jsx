import React from "react";
import styles from "./Info.module.css";

function DarkGrayButton(props) {
  return <button className={styles.darkGray}>{props.text}</button>;
}

export default DarkGrayButton;
