// Dashboard.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DashboardContent from "./scenes/board";
import Form from "./scenes/form";
import Team from "./scenes/team";
import Orders from "./scenes/contacts"; // Corrected import
import Calendar from "./scenes/calendar/calendar";
import Invoices from "./scenes/orders";

import "./dashboard.css";

const Dashboard = () => {
  const [theme, colorMode] = useMode();
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
              <Route path="team" element={<Team />} />
              <Route path="/contacts" element={<Orders />} />
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
}

export default Dashboard;
