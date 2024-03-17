import React from "react";
import Styles from "./AuthorizationInput.module.css";

function AuthorizationInput(props) {
    return (
        <>
    <input className={`${Styles.AuthorizationInput} ${props.style}`} type={props.type} placeholder={props.placeholder} />
    </>
    )
}

AuthorizationInput.defaultProps = {type : "text"};
export default AuthorizationInput;