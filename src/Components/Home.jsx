import React from "react";
import img from "../assets/photo-1549778399-f94fd24d4697.avif";
import { Container, Box, Typography, Button } from "@mui/material";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "min-content", md: "100vh" },
        width: "100vw",
      }}
    >
      <Box
        sx={{
          background: "blue",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          opacity: 0.4,
          paddingBottom: { xs: "20px", md: "0" },
        }}
      >
        <Navbar />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            gap: 2,
            textAlign: "center",
            paddingTop: { xs: "170px", md: "220px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", md: "55px" },
              fontWeight: 600,
              color: "#fff",
              maxWidth: "20ch",
            }}
          >
            Dedicated Practice, Outstanding Result!
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "14px", md: "17px" },
              width: { xs: "40ch", md: "70ch" },
            }}
          >
            Welcome to Entry Testing Service Pakistan, where we specialize in
            preparing students for MDCAT, ECAT, and general entry tests through
            comprehensive mock exams. Our tailored approach includes realistic
            test simulations, expert guidance, and personalized support to help
            students excel in their exams and achieve their academic goals.
          </Typography>
          <button
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: "20px",
              width: "150px",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            Explore More
          </button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
