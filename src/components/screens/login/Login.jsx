import React from "react"; 
import { Link } from "react-router-dom";
import Styles from "./AuthorizationInput.module.css";
import Input from "./AuthorizationInput";
import userIcon from "/public/userIcon.svg"

function Login() {
    return (
        <div className="bg-black h-screen">
            <div className={`center ${Styles.backround1}`}>
                <div className={`center ${Styles.backround2}`} />
            </div>
            <div className="center bg-white p-10 pt-32 rounded-3xl grid justify-items-center">
                <img src={userIcon} className="absolute -top-20" alt="" />


                <Input style={Styles.input} placeholder="email"/> <br />
                <Input style={Styles.input} placeholder="пароль"/> <br />

                <Link to="/user">
                    <button className={Styles.button}>Войти</button>
                </Link>

                <Link to="/signup">
                    <p className={Styles.text}>Ещё не зарегистрированы?</p>
                </Link>
            </div>
        </div>
    )
}

export default Login