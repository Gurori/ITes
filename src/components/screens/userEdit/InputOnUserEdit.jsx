import React from "react";
import styles from "./UserEdit.module.css";

class InputOnUserEdit extends React.Component {
  render() {
    const textarea = this.props.textarea;
    return (
      <>
        {textarea ? (
          <textarea
            placeholder={this.props.placeholder}
            type="text"
            className={styles.textarea}
            cols="50"
            rows="8"
          />
        ) : (
          <input
            placeholder={this.props.placeholder}
            type="text"
            className={styles.input}
          />
        )}
        <br />
      </>
    );
  }
}

export default InputOnUserEdit;
