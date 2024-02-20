import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginAndOut from "./components/Login/LoginAndOut";
import  Contacts  from "./components/contact/Contacts";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp-Login" element={<LoginAndOut />} />
        <Route path="/contactus" element={<Contacts/>} />
      </Routes>
    </>
  );
}
