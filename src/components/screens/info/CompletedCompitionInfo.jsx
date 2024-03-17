import React from "react";
import Info from "./Info";
import PurpleButton from "./PurpleButton";

class CompletedCompitionInfo extends React.Component {
  render() {
    return (
      <>
        <Info
          color="bg-purple"
          arrowColor="text-white"
          title="О конкурсе"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          button={
            <PurpleButton
              text={
                <>
                  <p className="text-white text-left py-2">Оценка: A</p>
                  <p className="text-white text-left py-2">Получено баллов: 100</p>
                </>
              }
            />
          }
        />
      </>
    );
  }
}

export default CompletedCompitionInfo;
