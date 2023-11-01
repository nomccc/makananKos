import { useState } from "react";
import "./App.css";
import Layouts from "./layouts/Layouts";
import Routing from "./routes/Route";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
        <Layouts>
          <Routing />
          <ToastContainer />
        </Layouts>
    </>
  );
}

export default App;
