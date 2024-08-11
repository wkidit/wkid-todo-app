import { TodosContext } from "@/contexts/TodoContextProvider";
import { useContext } from "react";

export function useTodosContext() {
    const context = useContext(TodosContext);

    if (!context) {
        throw new Error("TodoContext must be used within a TodoContextProvider component");
    }
    return context;
}