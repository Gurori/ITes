import React from "react";
import styles from "./Information.module.css";

class InformationText extends React.Component {
  render() {
    return (
      <div className="relative">
        <p className={styles.text}>{this.props.text}</p>
        <p className={`${styles.text} absolute right-16 text-purple`}>
          Все
        </p>
      </div>
    );
  }
}

export default InformationText;
