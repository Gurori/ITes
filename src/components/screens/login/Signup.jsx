import React from "react"; 
import { Link } from "react-router-dom";
import Styles from "./Signup.module.css";
import Input from "./AuthorizationInput";

function Signup() {
    return (
        <div className="bg-purple h-screen">
            <div className="center grid justify-items-center">
                <Input style={Styles.input} placeholder="ФИО"/> <br />
                <Input style={Styles.input} type="email" placeholder="email"/> <br />
                <Input style={Styles.input} type="tel" placeholder="номер телефона"/> <br />

                <Link to="/user/edit">
                    <button className={`${Styles.button} mt-5`}>Зарегистрироваться</button>
                </Link>
            </div>
        </div>
    )
}

export default Signup