"use client";

import App from "@/components/App";
import TodoContextProvider from "@/contexts/TodoContextProvider";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

export default function Home() {
  return (
    <KindeProvider
    clientId="2a935b26ca094412869438c1cdb758fd"
    domain="https://wkidauth.kinde.com"
    redirectUri="https://wkid-todo-app.vercel.app"
    logoutUri="https://wkid-todo-app.vercel.app"
    
    >
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    </KindeProvider>
  );
}
