import React from "react";
import { Route, Routes } from "react-router-dom";
import Contest from "./Components/Contest";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/contextpage" element={<Contest />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
