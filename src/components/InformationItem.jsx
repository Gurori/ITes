import React from "react";
import styles from "./Information.module.css";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

class InformationItem extends React.Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className={`${this.props.styles} bg-true-black rounded-3xl`}>
        <div className="h-1/2 p-4">{this.props.bottomContent}</div>
        <div className={`${this.props.color} h-1/2 rounded-b-3xl p-3`}>
          {this.props.topContent}
          <div className="grid place-content-end">
            <ChevronRight className="text-black" size={26}/>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

InformationItem.defaultProps = { styles: styles.item, color: "bg-gray" };
export default InformationItem;
