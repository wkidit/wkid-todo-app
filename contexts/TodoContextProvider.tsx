import { Todo } from '@/lib/types';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import  { createContext, ReactNode, useEffect, useState } from 'react'

interface TodoContextProviderProps {
  children: ReactNode;

}

const publicApi = process.env.NEXT_PUBLIC_API

export const TodosContext = createContext<{
  todos: Todo[];
  isLoading: boolean;
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
} | null>(null)


export default function TodoContextProvider({
    children,
}:TodoContextProviderProps){
    const { isAuthenticated } = useKindeAuth();


    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.completed).length;

    const addTodo = (content: string) => {
      // check if user is logged in
      if (todos.length >= 3 && !isAuthenticated) {
        alert("To add more todos, please log in.");
        return;
      }
  
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          content,
          completed: false,
        },
      ]);
    };
    
    const toggleTodo = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
    const deleteTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    useEffect(() => {
      const fetchTodos = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch(`${publicApi}`);
          const todos = await response.json();
          setTodos(todos);
          console.log(todos)
        } catch (error) {
          console.error("Failed to fetch todos:", error);
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchTodos();
    }, []);
    

  return (
    <TodosContext.Provider
      value={{
        todos,
        isLoading,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

