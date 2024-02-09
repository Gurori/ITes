import React from "react";
import styles from "./Information.module.css";
import Second from "/secondPlace.svg";
import Arrow from "/arrow.svg";

class Achievement extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.achievement}>
        
        <img className="justify-self-end" src={Arrow} alt="" />
      </div>
      <div className="relative">
      <img className="absolute -top-64 right-6" src={this.props.place} alt="" />
      </div>
      </div>
    );
  }
}

Achievement.defaultProps = {place : Second};
export default Achievement;