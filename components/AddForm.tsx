"use client";

import { useTodosContext } from "@/lib/hooks"
import { useState } from "react";
import Button from "./Button";

export default function AddForm() {
    const [todoContent, setTodoContent] = useState("");
    const { addTodo } = useTodosContext();
    return (
        <form
         onSubmit={(e) => {
            e.preventDefault();
            addTodo(todoContent);
            setTodoContent("")
         }}
        >
            <h2 className="text-[#8E3E63] text-[16px] font-bold">
                Add a todo
            </h2>
            <input 
            type="text"
            className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[9] text-[14px]"
            value={todoContent}
            onChange={(e) => {
                setTodoContent(e.target.value);
            }}
            />
            <Button>Add to list</Button>
        </form>
    )
}