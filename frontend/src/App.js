// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginAndOut from "./components/Login/LoginAndOut";
import Contacts from "./components/contact/Contacts";
import Dashboard from "./components/Dashboard/dashboard";

import HomePage from "./components/Videochat/Home/index"
import RoomPage from "./components/Videochat/Room/index"

import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp-Login" element={<LoginAndOut />} />
        <Route path="/contactus" element={<Contacts />} />


        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}
