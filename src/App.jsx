import React from "react";
import "./App.css";
import { Home } from "./pages/home/home";
import { Route, BrowserRouter as Switch, Routes } from 'react-router-dom';
import { LogIn } from "./pages/login/log-in";
import { Register } from "./pages/register/register";

function App() {
  return (
    <div className="app">
      <Switch>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="login" element={<LogIn/>} />
          <Route path="join" element={<Register/>} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
