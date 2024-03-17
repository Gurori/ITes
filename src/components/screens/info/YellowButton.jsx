import React from "react";
import styles from "./Info.module.css";

function YellowButton(props) {
  return <button className={styles.yellow}>{props.text}</button>;
}

export default YellowButton;