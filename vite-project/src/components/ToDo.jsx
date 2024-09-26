import React from "react";
import calendar from "../assets/calendar.png";
import ToDoItems from "./ToDoItems";

const ToDo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/*------Title--------- */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-7" src={calendar} alt="" />
        <h1 className="text-3xl font-semibold ">To-Do list</h1>
      </div>

      {/*------Input field--------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">
          ADD +
        </button>
      </div>

      {/*------To-Do List--------- */}
      <div>
        <ToDoItems text={"Learn coding"} />
        <ToDoItems text={"Learn jiu jutsu"} />
      </div>
    </div>
  );
};

export default ToDo;
