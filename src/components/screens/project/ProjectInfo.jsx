import React from "react";
import styles from "./ProjectInfo.module.css";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProjectInfo() {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen">
      <div className={`center px-8 py-6 rounded-2xl w-1/2 ${styles.shadow}`}>
        <div className="flex items-center">
          <button>
            <ChevronLeft
              onClick={() => navigate(-1)}
              className="bg-gray rounded-full h-8 w-8 text-black"
              strokeWidth={1}
            />
          </button>
          <p className="text-white ml-6">Информация о проекте</p>
        </div>
        <div className="mx-4">
          <div className="flex my-10">
            <div className="bg-gray rounded-2xl w-60 h-44 shadow-sm"></div>
            <table className="table-fixed mx-8">
              <tr>
                <td>Название:</td>
                <td>Проект 1</td>
              </tr>
              <tr>
                <td>Описание:</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
              </tr>
              <tr>
                <td>Формат:</td>
                <td>png</td>
              </tr>
              <tr>
                <td>Размер:</td>
                <td>1863,0  МБ</td>
              </tr>
              <tr>
                <td>Продан:</td>
                <td>Нет</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
