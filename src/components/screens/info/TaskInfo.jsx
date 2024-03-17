import React from "react";
import Info from "./Info";
import DarkGrayButton from "./DarkGrayButton";

class TaskInfo extends React.Component {
  render() {
    return (
      <>
        <Info
          color="bg-dark-gray"
          arrowColor="text-white"
          title="О задании"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          button={<DarkGrayButton text="Отправить заявку" />}
        />
      </>
    );
  }
}

export default TaskInfo;