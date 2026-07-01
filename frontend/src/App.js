import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";


const App = () => {

  return (
    <>
    <MyNavbar/>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
