import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserEdit.module.css";
import Search from "../../Search";
import Input from "./InputOnUserEdit";
import Block from "./Blocks";
import violaceous from "/violaceousStar.svg";
import violet from "/violetStar.svg";
import xanthous from "/yellowStar.svg";
import pink from "/pinkStar.svg";
import userIcon from "/userIcon.svg";
import { ChevronLeft } from "lucide-react";
import { Pencil } from "lucide-react";

class UserEditPage extends React.Component {
  render() {
    return (
      <div className="bg-true-black h-auto pb-8">
        <header className={styles.header}>
          <Search width="70" />
        </header>
        <main className={styles.main}>
          <div className="flex items-center">
            <Link to="/user">
              <ChevronLeft className="bg-gray pr-0.5 rounded-full w-8 h-8" strokeWidth={0.7} />
            </Link>
            <p className="text-white ml-5">Настроить профиль</p>
          </div>
          <p className="text-white mt-10">Введите ФИО</p>
          <Input placeholder="Фамилия" />
          <Input placeholder="Имя" />
          <Input placeholder="Отчество" />
          <p className="text-white mt-10">О себе</p>
          <Input placeholder="Напишите свои навыки" textarea />
          <p className="text-white mt-10">Выберите роль</p>
          <div className="flex flex-wrap gap-6 ml-10 mt-5">
            <div className="flex flex-wrap gap-6">
              <Block text="МЕНЕДЖЕР" color="text-pink" star={pink} />
              <Block text="РАЗРАБОТЧИК" color="text-violet" star={violet} />
            </div>
            <div className="flex flex-wrap gap-6">
              <Block text="ДИЗАЙНЕР" color="text-violaceous" star={violaceous} />
              <Block text="МАРКЕТОЛОГ" color="text-xanthous" star={xanthous} />
            </div>
          </div>
          <p className="text-white mt-10">Выберите аватарку</p>
          <div className="relative ml-10 mt-5">
            <img src={userIcon} alt="" />
            <div className="bg-reallygray rounded-full absolute h-9 w-9 bottom-2 left-28">
              <Pencil className="center text-white" strokeWidth={1} size={20} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default UserEditPage;
