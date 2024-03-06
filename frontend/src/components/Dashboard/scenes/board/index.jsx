import { Box } from "@mui/material";
import React from "react";
import Header from "../../comp/Header";

const board = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};

export default board;
