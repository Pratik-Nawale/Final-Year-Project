// Dashboard.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DashboardContent from "./scenes/board";
import Form from "./scenes/form";
import Team from "./scenes/team";
import UserInformation from "./scenes/contacts"; // Corrected import
import Calendar from "./scenes/calendar/calendar";
import Invoices from "./scenes/orders";
import ScorePrediction from "./scenes/ScorePrediction/ScorePrediction";
import RoomPage from "../Videochat/Room";
import { useSelector } from "react-redux";
import Gym from "./scenes/map/gym"
import Map from "./scenes/map/map"
import "./dashboard.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        // Your chatbot configuration goes here
        "composerPlaceholder": "Sportz Chatbot",
        "botConversationDescription": "Welcome!",
        "botId": "39f05996-025d-4ffe-b2ab-4966c250c911",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "39f05996-025d-4ffe-b2ab-4966c250c911",
        "webhookId": "7ea2a216-1ee0-4003-89b4-43e6574bfb28",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Sportz Chatbot",
        "avatarUrl": "",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/d2e5a646-5c11-4eb0-8b31-e9caee6206ae/v5834/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };

    document.head.appendChild(script);

    return () => {
      // Destroy chatbot when the component unmounts
      if (window.botpressWebChat && typeof window.botpressWebChat.destroy === "function") {
        window.botpressWebChat.destroy();
      }

      // Cleanup script
      document.head.removeChild(script);
    };
  }, [navigate]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/score-prediction" element={<ScorePrediction />} />
              <Route path={`/room/:roomId`} element={<RoomPage />} />
              // {/* <Route path="/nearest-academy" element={} /> */}
              <Route path="manageUser" element={<Team />} />
              <Route path="/userInformation" element={<UserInformation />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/nearest-academy" element={<Map />} />
              <Route path="/nearest-academy/gym/:gymId" element={<Gym />} />
              <Route path="/*" element={<Outlet />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Dashboard;
