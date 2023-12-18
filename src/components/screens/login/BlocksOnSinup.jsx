import React from "react"; 
import styles from "./BlocksOnSinup.module.css";

function BlocksOnSinup(props) {
    return (
        <div className={styles.bg}>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default BlocksOnSinup