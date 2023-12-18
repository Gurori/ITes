import React from "react";
import SidePanel from "./SidePanel";
import Search from "../../Search";
import Block from "./BlocksOnUser";
import Blocks from "./Blocks2";
import Star from "/smallStar.svg";
import BlackArrow from "/blackArrow.svg"
import Messages from "/messages.svg"
import styles from "./UserPage.module.css";

class UserPage extends React.Component {
    render() {
      return (
        <div className="bg-black flex">
            <SidePanel />
            <div className="px-28 pt-5 flex">
              <div> 
               <Search width="110" />
                <div className="flex">
                <Block borderColor="border-purple" text1={<h6 className="text-white text-2xl">TEAM 1</h6>} text2="4 участников"/>
                <Block borderColor="border-white" text1="Перейти к заданиям" />
                <div className="ml-7"> 
                  <Blocks styles="mb-4 bg-yellow" text="Перейти к чату" arrow={BlackArrow} anything={Messages} />
                  <Blocks styles="bg-purple" textColor="text-white" text="Приглашения в команду" />
                </div>
                </div>
              </div>
              <div className={styles.balance}> 
                <img className="mx-auto" src={Star} alt="" />
                <h2 className="text-center text-2xl text-white">Ваш баланс</h2> 
                <h1 className="text-center text-4xl text-white pt-2">300</h1>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default UserPage;