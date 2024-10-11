import React from "react";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const Sidebar = ({ onClick, isOpen }) => {
  return (
    <div
      className="fixed top-0 right-0 bg-blue-600 z-[1000]  h-screen min-w-[200px]
    "
      style={{
        transform: isOpen ? "translateX(0%)" : "translateX(100%)",
        transition: "transform .5s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: "40px",
          color: "#fff",
        }}
      >
        <ClearIcon onClick={onClick} />
        <a href="#home">Home</a>
        <a href="#test">Tests</a>
        <a href="#about">About us</a>
        <a href="#organization">Orgnization</a>
        <a href="#reviews">Reviews</a>
        <button
          style={{
            background: "#fff",
            padding: "10px 15px",
            borderRadius: "20px",
            color: "#000",
          }}
        >
          <a href="#contactUs">Contact us</a>
        </button>
      </Box>
    </div>
  );
};

export default Sidebar;
