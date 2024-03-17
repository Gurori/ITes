import React from "react";
import styles from "./UserPage.module.css";
import { ChevronRight } from "lucide-react";

class BlocksOnUserPage extends React.Component {
    render() {
      return (
        <div className={styles.block}>
            <div className={`${styles.border} ${this.props.borderColor}`}>
                <p className="text-xl text-white"><b>{this.props.text1}</b></p>
                <p className="text-xs text-gray">{this.props.text2}</p>
                <ChevronRight className="absolute bottom-3 right-2 text-white" size={26} />
            </div>
        </div>
      );
    }
  }
  
  export default BlocksOnUserPage;