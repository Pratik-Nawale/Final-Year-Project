import {
  CalendarTodayOutlined,
  ContactsOutlined,
  HomeOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PlaceIcon from '@mui/icons-material/Place';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import "../../dashboard.css";
import { message } from "antd";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { user } = useSelector((state) => state.user);

  const HandleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfull");
    // navigate("/SignUp-Login");
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item:active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../images/dashboard/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box> */}
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.fullName}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="News Feed"
              to="/dashboard"
              icon={<NewspaperIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Score Prediction"
              to="/dashboard/score-prediction"
              icon={<OnlinePredictionIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Video Conferencing"
              to={`/dashboard/room/${user?._id}`}
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Nearest Academy"
              to="/dashboard/nearest-academy"
              icon={<PlaceIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Item
              title="Sub"
              to="/dashboard/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Item
              title="Contact Us"
              to="/dashboard/form"
              icon={<ContactPageIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/dashboard/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            {user?.isAdmin ? (
              <>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Admin Controls
                </Typography>
                <Item
                  title="Manage User"
                  to="/dashboard/manageUser"
                  icon={<PeopleOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="User Information"
                  to="/dashboard/userInformation"
                  icon={<ContactsOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            ) : (
              <></>
            )}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Other
            </Typography>

            <MenuItem
              active={selected === "Logout"}
              style={{
                color: colors.grey[100],
              }}
              onClick={HandleLogout}
              icon={<LogoutOutlinedIcon />}
            >
              <Typography>Logout</Typography>
              <Link to="/SignUp-Login" />
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Sidebar;
