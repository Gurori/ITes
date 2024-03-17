import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Info.module.css";
import { Bookmark, ChevronLeft, Phone } from "lucide-react";

function Info(props) {
  const navigate = useNavigate();
  const color = props.color;
  return (
    <div className="bg-black h-screen p-10">
      <button
        onClick={() => navigate(-1)}
        className={`${color} h-8 w-8 rounded-full flex`}
      >
        <ChevronLeft className={`${props.arrowColor} self-center ml-0.5`} />
      </button>
      <div className={`${styles.shadow} center`}>
        <div className={`${color} h-64 rounded-t-3xl`}></div>
        <div className="bg-white px-16 py-8 max-w-5xl rounded-b-3xl">
          <Bookmark className="flex absolute right-0 mr-16 text-black" size={26} />
          <h6>{props.title}</h6>
          <div className="flex flex-wrap gap-20 pt-6">
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
          </div>
          <p className="py-10">{props.text}</p>
          {props.button}
          <div className="flex absolute right-0 gap-1 mr-16">
            <Phone className="text-black" size={19} />
            <p>+00000000000</p>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Info;
