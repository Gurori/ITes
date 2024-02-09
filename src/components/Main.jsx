import mascot from "/mascot.svg";
import laptop from "/laptop.svg";
import columns from "/columns.svg";
import guys from "/guys.svg";
import styles from "./Main.module.css";
import GrayText from "./GrayText";
import React from "react";
import { Link } from "react-router-dom";
import TextOnMain from "./TextOnMain";

function Main() {
  return (
    <main>
      <div className="container md:container md:mx-auto">
        <div className="py-64">
          <p className="text-purple mb-3">
            <b>ПРИВЕТСТВУЕМ ВАС!</b>
          </p>
          <h1 className={styles.bold}>Платформа для</h1>
          <h1 className={`${styles.bold} ${styles.purple}`}>
            проведения
            <br />
            конкурсов МПИТ
          </h1>
          <p className="my-5">
            У нас собраны все самые необходимые функции для развития сообщества
            МПИТ.
          </p>
          <Link to="/signin/identifier">
          <button className={styles.button}>Узнать поподробнее</button>
          </Link>
        </div>
      </div>
      <div class="absolute -right-0 top-16">
        <img className="" src={mascot} alt="" />
      </div>

      <div className="bg-gray relative -top-9">
        <div className="container md:container md:mx-auto">
          <div className="grid grid-cols-3 gap-3 py-28 justify-items-center">
            <GrayText bigText="100+" smallText="регистраций в день" />
            <GrayText bigText="60K+" smallText="активных участников" />
            <GrayText bigText="600K+" smallText="заработано" />
          </div>
        </div>
      </div>

      <div className="container md:container md:mx-auto">
        <div className="grid grid-cols-2 gap-2 items-center">
            <img className="relative right-16" src={laptop} alt="" />
            <TextOnMain purpletext="ЗАРАБОТОК" title="Возможность  работать на заказ" text="Создавайте свое портфолио, ищите заказы и зарабатывайте на них."/>
        </div>
        <div className="grid grid-cols-2 gap-2 my-20 items-center">
            <TextOnMain purpletext="ОПЫТ" title="Участвовать на конкурсах и получать за это оценки" text="Отправляйте заявки  на конкурсы и получайте  заслуженные баллы."/>
            <img className="pl-52" src={columns} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
            <img src={guys} alt="" />
            <TextOnMain purpletext="ЭФФЕКТИВНОСТЬ" title="Возможность создавать и работать в команде " text="Приглашайте других понравившихся участников в свою команду и работайте вместе."/>
        </div>
      </div>
    </main>
  );
}

export default Main;
