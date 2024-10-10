import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../assets/WhatsApp_Image_2024-10-06_at_12.27.12_AM-removebg-preview.png";
import React from "react";

const Navbar = () => {
  const heightWithOffset = window.innerHeight - 100;
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > heightWithOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    console.log("Height", heightWithOffset);
    console.log("Scroll", window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      sx={{
        background: isSticky ? "blue" : "transparent",
        zIndex: 10,
        width: "100vw",
        transition: "all .5s ease-in",
        position: "fixed",
        opacity: 0.3,
        top: 0,
        marginTop: "0px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "17px",
          fontWeight: 600,
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: { xs: "100px", md: "130px" } }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: "bold",
              position: "relative",
              left: -17,
              top: -5,
            }}
          >
            Entery Testing
            <br /> Service Pakistan
          </Typography>
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 5,
          }}
        >
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
      </Container>
    </Box>
  );
};

export default Navbar;
