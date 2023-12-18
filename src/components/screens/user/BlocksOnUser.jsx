import React from "react";
import Arrow from "/arrow.svg";
import styles from "./UserPage.module.css";

class BlocksOnUserPage extends React.Component {
    render() {
      return (
        <div className={styles.block}>
            <div className={`${styles.border} ${this.props.borderColor}`}>
                <p className="text-xl text-white"><b>{this.props.text1}</b></p>
                <p className="text-xs text-gray">{this.props.text2}</p>
                <img className="absolute bottom-4 right-4" src={Arrow} alt="" />
            </div>
        </div>
      );
    }
  }
  
  export default BlocksOnUserPage;