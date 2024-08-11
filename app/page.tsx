"use client";

import App from "@/components/App";
import TodoContextProvider from "@/contexts/TodoContextProvider";

export default function Home() {
  return (
    <TodoContextProvider>
      <App />
    </TodoContextProvider>

  );
}
