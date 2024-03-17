import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import SidePanel from "./SidePanel";
import Search from "../../Search";
import Block from "./BlocksOnUser";
import Blocks from "./Blocks2";
import Star from "/smallStar.svg";
import Messages from "/messages.svg";
import Project from "../../Project";
import styles from "./UserPage.module.css";
import BigStar from "/bigBlackStar.svg";
import InformationBlocks from "../../InformationBlocks";
import Text from "../../InformationText";
import Achievement from "../../Achievement";
import Firts from "/firtsPlace.svg";
import Third from "/thirdPlace.svg";
import { Plus } from "lucide-react";

class UserPage extends React.Component {
  render() {
    return (
      <div className="bg-black flex">
        <SidePanel />
        <div className="px-28 pt-5">
          <div className="flex">
            <div>
              <Search className="mb-7" width="110" />
              <div className="flex">
                <Block
                  borderColor="border-purple"
                  text1={<h6 className="text-white text-2xl">TEAM 1</h6>}
                  text2="4 участников"
                />
                <Block borderColor="border-white" text1="Перейти к заданиям" />
                <div className="ml-7">
                  <Blocks
                    styles="mb-4 bg-yellow"
                    text="Перейти к чату"
                    anything={Messages}
                  />
                  <Blocks
                    styles="bg-purple"
                    color="text-white"
                    text="Приглашения в команду"
                  />
                </div>
              </div>
            </div>
            <div className={styles.balance}>
              <img className="mx-auto" src={Star} alt="" />
              <h2 className="text-center text-2xl text-white">Ваш баланс</h2>
              <h1 className="text-center text-4xl text-white pt-2">300</h1>
            </div>
          </div>
          <img
            className="absolute -top-12 left-10 no-select"
            src={BigStar}
            alt=""
          />
          <Tabs className={`mt-8`}>
            <TabList className={`flex relative`}>
              <Tab className={styles.tab}>
                <p className="text-white">Мои работы</p>
              </Tab>
              <Tab className={styles.tab}>
                <p className="text-white">Выполненное</p>
              </Tab>
              <Tab className={styles.tab}>
                <p className="text-white">Заявки</p>
              </Tab>
              <Tab className={styles.tab}>
                <p className="text-white">Избранное</p>
              </Tab>
              <Tab className={styles.tab}>
                <p className="text-white">Достижения</p>
              </Tab>
            </TabList>

            <div className={styles.tabPanel}>
              <TabPanel className={`grid grid-cols-5 gap-y-7 gap-x-6`}>
              <Link to="/info/project">
                <Project
                  styles="bg-white grid place-content-center"
                  content={
                    <Plus
                      className="m-auto text-gray"
                      size={80}
                      strokeWidth={4}
                    />
                  }
                />
                </Link>
                <Link to="/info/project">
                  <Project text="Проект 1" />
                </Link>
                <Link to="/info/project">
                  <Project text="Без названия" />
                </Link>
                <Link to="/info/project">
                  <Project text="Без названия" />
                </Link>
                <Link to="/info/project">
                  <Project text="Без названия" />
                </Link>
                <Link to="/info/project">
                  <Project text="Без названия" />
                </Link>
                <Link to="/info/project">
                  <Project text="Без названия" />
                </Link>
              </TabPanel>
              <TabPanel>
                <InformationBlocks
                  link="/info/compition"
                  number={5}
                  text="Участие в конкурсах: 6"
                  color="bg-purple"
                />
                <InformationBlocks
                  link="/info/task"
                  number={5}
                  text="Всего выполнено заданий: 14"
                />
                <InformationBlocks
                  link="/info/order"
                  number={5}
                  text="Всего выполнено заказов: 7"
                  color="bg-yellow"
                />
              </TabPanel>
              <TabPanel>
                <InformationBlocks
                  link="/compition"
                  number={5}
                  text="Отправлено заявок на конкурсы: 6"
                  color="bg-purple"
                />
                <InformationBlocks
                  link="/task"
                  number={5}
                  text="Всего ожидается заданий: 14"
                />
                <InformationBlocks
                  link="/order"
                  number={5}
                  text="Всего ожидается заказов: 7"
                  color="bg-yellow"
                />
              </TabPanel>
              <TabPanel>
                <InformationBlocks
                  link="/compition"
                  number={5}
                  text="Конкурсы: 6"
                  color="bg-purple"
                />
                <InformationBlocks link="/task" number={5} text="Задания: 14" />
                <InformationBlocks
                  link="/order"
                  number={5}
                  text="Заказы: 7"
                  color="bg-yellow"
                />
              </TabPanel>
              <TabPanel>
                <Text text="Последние достижения:" /> <br /> <br />
                <div className="grid grid-cols-5">
                  <Achievement />
                  <Achievement place={Third} />
                  <Achievement place={Firts} />
                  <Achievement />
                  <Achievement />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default UserPage;
