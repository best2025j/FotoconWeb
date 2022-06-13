import React from "react";
import { Route, Routes } from "react-router-dom";
import ContestPage from "./Components/ContestPage";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/contestpage" element={<ContestPage />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
