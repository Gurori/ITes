import React from "react";
import Arrow from "/arrow.svg";
import Star from "/starNoColor.svg";
import styles from "./UserPage.module.css";

class Blocks2 extends React.Component {
    render() {
      return (
        <div className={`${styles.blocks} ${this.props.styles} pl-12 relative flex items-center`}>
            <p className={`${this.props.textColor} text-xl`}><b>{this.props.text}</b></p>
            <img className="absolute right-10 top-3" src={Star} alt="" />
            <img className="absolute right-16" src={this.props.anything} alt="" />
            <img className={`${this.props.color} absolute right-8`} src={this.props.arrow} alt="" />
        </div>
      );
    }
  }
  
  Blocks2.defaultProps = {arrow : Arrow};
  export default Blocks2;