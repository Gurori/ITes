import React from "react";
import styles from "./Info.module.css";

class Info extends React.Component {
  render() {
    return (
      <div className="bg-black h-screen">
        <div className={`${styles.shadow} center`}>
          <div className="bg-purple h-64 rounded-t-3xl"></div>
          <div className="bg-white px-16 py-12 max-w-5xl rounded-b-3xl">
            <h6>О задании</h6>
            <div className="flex flex-wrap gap-20 py-10">
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
