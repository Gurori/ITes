import React from "react";
import styles from "./Information.module.css";
import Second from "/secondPlace.svg";
import { ChevronRight } from "lucide-react";

class Achievement extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.achievement}>
        <ChevronRight className="text-white justify-self-end" size={26} />
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