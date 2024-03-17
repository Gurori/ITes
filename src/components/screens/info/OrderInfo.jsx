import React from "react";
import Info from "./Info";
import YellowButton from "./YellowButton";

class OrderInfo extends React.Component {
  render() {
    return (
      <>
        <Info
          color="bg-yellow"
          arrowColor="text-black"
          title="О заказе"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          button={<YellowButton text="Отправить заявку" />}
        />
      </>
    );
  }
}

export default OrderInfo;