import React from "react";
import { Link } from "react-router-dom";
import itesLogo from "/itesLogo.svg";
import styles from "./Header.module.css";

function Header() {
    return (
      <header className="relative flex items-center">
        <img src={itesLogo} alt="" />
        <select className="ml-5" name="" id="">
          <option value="">РУС</option>
          <option value="">САХ</option>
          <option value="">ENG</option>
        </select>
        <div className="flex absolute right-0 items-center">
          <p className="mx-10">Главная</p>
          <p className="mx-10">Про сайт</p>
          <p className="mx-10">Свяжитесь с нами</p>

          <Link to="/signin/identifier">
          <button className={styles.button}>Войти</button>
          </Link>
        </div>
      </header>
    );
  }

  export default Header