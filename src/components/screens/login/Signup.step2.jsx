import React from "react";
import { Link } from "react-router-dom";
import Block from "./BlocksOnSinup";

function SignupStep2() {
  return (
    <div className="bg-true-black h-screen">
      <div className="center grid justify-items-center">
        <p className="text-white mb-10">Продолжить как...</p>

        <div className="grid grid-cols-3 gap-8">
          <Link to="/signin" >
            <Block text="УЧАСТНИК" />
          </Link>
          <Link to="/signin" >
            <Block text="ЗАКАЗЧИК" />
          </Link>
          <Link to="/signin" >
            <Block text="ОРГАНИЗАТОР" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupStep2;
