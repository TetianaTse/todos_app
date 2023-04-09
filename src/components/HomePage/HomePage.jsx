import React, { useState } from "react";
import TodoItem from "../Item/TodoItem"
import CreatedNewTodo from "./CreatedNewTodo";

const data = [
    {
        id: "todo_1",
        title: "Buy products in the supermarket",
        isCompleted: false,
    },
    {
        id: "todo_2",
        title: "Watch my favorite movie",
        isCompleted: false,
    },
    {
        id: "todo_3",
        title: "Call a friend at 7 p.m.",
        isCompleted: false,
    }
]

function HomePage() {
    const [todos, setTodos] = useState(data);
    
    const changeTodo = (id) => {
        const copyTodos = [...todos]
        const currentTodo = copyTodos.find(todo => todo.id === id);
        currentTodo.isCompleted = !currentTodo.isCompleted;
        setTodos(copyTodos);
    }
    const removeTodo = (id) => {
        const copyTodos = [...todos]
        setTodos(copyTodos.filter(item => item.id !== id));
    }
    
    return ( 
        <div className=" text-white text-lg w-2/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-5 uppercase">Your to-do list</h1>
            <CreatedNewTodo setTodos={setTodos}/>
            {todos.map(todo => 
                <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
            )}
        </div>
     );
}

export default HomePage;