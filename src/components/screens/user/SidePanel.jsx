import React from "react";
import { Link } from "react-router-dom";
import itesLogo from "/itesWhiteLogo.svg";
import UserIcon from "/userIcon.svg";
import PenIcon from "/penIcon.svg";
import JobTitle from "../../JobTitle";
import Styles from "./SidePanel.module.css";

function SidePanel() {
  return (
    <div className={Styles.SidePanel}>
      <img className="relative -left-8" src={itesLogo} alt="" />
      <hr />
      <div className="grid justify-items-center">
        <img src={UserIcon} alt="" />
          <p className="text-white text-xl">Username</p>
          <img className="relative -top-5 left-16" src={PenIcon} alt="" />
          <div className="-mt-3">
          <JobTitle color="text-violaceous" text="Дизайнер" />
          </div>
          
      </div>
      <p className={`${Styles.text} mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

      <hr className="my-10" />

      <Link>
        <p className="text-white mb-10">Настроить профиль</p>
      </Link>
      <Link>
        <p className="text-white mb-10">Конфиденциальность</p>
      </Link>
      <Link>
        <p className="text-white mb-10">Данные и хранилище</p>
      </Link>
      <Link>
        <p className="text-white mb-10">Уведомления</p>
      </Link>
      <Link>
        <p className="text-white mb-10">Помощь</p>
      </Link>
      <Link>
        <p className="text-white">Пригласить друга</p>
      </Link>
    </div>
  );
}

export default SidePanel;
