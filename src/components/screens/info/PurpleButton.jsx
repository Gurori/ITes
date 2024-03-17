import React from "react";
import styles from "./Info.module.css";

function PurpleButton(props) {
  return <button className={styles.purple}>{props.text}</button>;
}

export default PurpleButton;