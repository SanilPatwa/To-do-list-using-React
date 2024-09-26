import React from "react";
import tick from "../assets/tick.png";
import unTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const ToDoItems = ({ text }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-7" src={tick} alt="" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>

      <img className="w-5 cursor-pointer" src={deleteIcon} alt="" />
    </div>
  );
};

export default ToDoItems;
