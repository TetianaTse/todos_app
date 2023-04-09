import React from "react";
import Checkbox from "./Checkbox";
import { BsTrash3 } from "react-icons/bs"

function TodoItem({todo, changeTodo, removeTodo}) {
    return ( 
    <div className="flex items-center justify-between rounded-xl bg-gray-700 p-5 mb-2 w-full hover:bg-gray-600">
        <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
            <Checkbox isCompleted={todo.isCompleted}/>
            <span className={`${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</span>
        </button>
        <button onClick={() => removeTodo(todo.id)}>
            <BsTrash3 size={22} className="text-gray-500 hover:text-pink-300 transition-colors ease-in-out duration-300"/>
        </button>
    </div> 
    );
}

export default TodoItem;