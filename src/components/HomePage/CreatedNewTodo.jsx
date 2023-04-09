import React, { useState } from "react";

function CreatedNewTodo({setTodos}) {
    const [title, setTitle] = useState("");

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle("")
    }

    return ( 
        <div className="flex items-center justify-between rounded-xl border-gray-700 px-5 py-3 mb-2 w-full border-2">
            <input type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            onKeyDown={e => {
                if (e.key === "Enter") {
                  addTodo(title);
                }
              }}
            className="bg-transparent w-full border-none outline-none"
            placeholder="Enter todo"
            />
        </div>
     );
}

export default CreatedNewTodo;