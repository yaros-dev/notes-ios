import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { NotesProvider } from "./context";
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NotesProvider>
);
