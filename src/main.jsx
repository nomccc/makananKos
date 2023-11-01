import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./supabase/client.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SessionContextProvider supabaseClient={supabase}>
          <App />
        </SessionContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
