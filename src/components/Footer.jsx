import React from "react";
import itesLogo from "/bigItesLogo.svg";
import telegramLogo from "/telegramLogo.svg";
import facebookLogo from "/facebookLogo.svg";
import whatsappLogo from "/whatsappLogo.svg";
import purpleStar from "/purpleStar.svg";
import mlgLogo from "/mlgLogo.svg";
import { Phone } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="bg-purple">
        <div className="container md:container md:mx-auto py-28">
          <h3 className="text-reallywhite">Остались еще вопросы?</h3>

          <img className="absolute right-96" src={purpleStar} alt="" />

          <p className="text-reallywhite pt-3 pb-10">
            Свяжитесь с нами в социальных сетях!
          </p>

          <div className="flex justify-start">
            <img className="pr-7" src={telegramLogo} alt="" />
            <img className="pr-7" src={facebookLogo} alt="" />
            <img className="pr-7" src={whatsappLogo} alt="" />
          </div>

          <div className="flex justify-start pt-5">
            <Phone className="text-black" size={18} />
            <p className="pl-2">+00000000000</p>
          </div>
        </div>
      </div>
      <div className="bg-black relative">
        <div className="container md:container md:mx-auto flex justify-start py-16">
            <img className="pr-32" src={itesLogo} alt="" />
            <img src={mlgLogo} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
