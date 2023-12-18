import React from "react";
import Styles from "./AuthorizationInput.module.css";

function AuthorizationInput(props) {
    return (
        <>
    <input className={`${Styles.AuthorizationInput} ${props.style}`} type="text" placeholder={props.placeholder} />
    </>
    )
}

export default AuthorizationInput