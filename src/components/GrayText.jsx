import styles from "./GrayText.module.css"
import React from "react"

class GrayText extends React.Component {
    render() {
        return (
            <div>
        <p className={styles.Big}>{this.props.bigText}</p>
        <p className={styles.Small}>{this.props.smallText}</p>
    </div>
        )
    }
}

export default GrayText