import React from "react";
import styles from "./UserEdit.module.css";

class InputOnUserEdit extends React.Component {
  render() {
    return (
      <div className={styles.block}>
        <p className={`${styles.text} ${this.props.color}`}>{this.props.text}</p>
        <div className="grid place-content-end"><img className="mt-2" src={this.props.star} alt="" /></div>
      </div>
    );
  }
}

export default InputOnUserEdit;