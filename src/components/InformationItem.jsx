import React from "react";
import styles from "./Information.module.css";
import Arrow from "/blackArrow.svg";
import { Link } from "react-router-dom";

class InformationItem extends React.Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className={`${this.props.styles} bg-true-black rounded-3xl`}>
        <div className="h-1/2 p-4">{this.props.bottomContent}</div>
        <div className={`${this.props.color} h-1/2 rounded-b-3xl p-4`}>
          {this.props.topContent}
          <div className="grid place-content-end">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

InformationItem.defaultProps = { styles: styles.item, color: "bg-gray" };
export default InformationItem;
