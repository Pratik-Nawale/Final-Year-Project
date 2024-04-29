// Dashboard.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DashboardContent from "./scenes/board";
import Form from "./scenes/form";
import Team from "./scenes/team";
import UserInformation from "./scenes/contacts"; // Corrected import
import Calendar from "./scenes/calendar/calendar";
import Invoices from "./scenes/orders";
import { useSelector } from "react-redux";

import "./dashboard.css";

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const { user } = useSelector((state) => state.user);

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
              <Route path="manageUser" element={<Team />} />
              <Route path="/userInformation" element={<UserInformation />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/*" element={<Outlet />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Dashboard;
