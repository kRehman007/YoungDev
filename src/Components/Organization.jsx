import { Container, Typography, Box } from "@mui/material";
import React from "react";
import img1 from "../assets/img4.jfif";
import img2 from "../assets/img5.jfif";
import img3 from "../assets/img6.jfif";
import img4 from "../assets/img7.jfif";

import Navbar from "./Navbar";

const Organization = () => {
  return (
    <>
      <Navbar />
      <Container
        id="organization"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: { xs: "min-content", sm: "100vh" },
          gap: 1,
          alignItems: "center",
          paddingTop: { xs: "130px", md: "170px" },

          fontWeight: 600,
        }}
      >
        <Typography
          sx={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}
        >
          Organisation
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Our Photos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: 2,
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={img1}
            sx={{
              width: { xs: "150px", md: "300px" },
              height: { xs: "170px", md: "300px" },
              borderRadius: "20px",
            }}
          />
          <Box
            component="img"
            src={img2}
            sx={{
              width: { xs: "150px", md: "300px" },
              height: { xs: "170px", md: "300px" },
              borderRadius: "20px",
            }}
          />
          <Box
            component="img"
            src={img3}
            sx={{
              width: { xs: "150px", md: "300px" },
              height: { xs: "170px", md: "300px" },
              borderRadius: "20px",
            }}
          />
          <Box
            component="img"
            src={img4}
            sx={{
              width: { xs: "150px", md: "300px" },
              height: { xs: "170px", md: "300px" },
              borderRadius: "20px",
            }}
          />
        </Box>
        <button
          style={{
            background: "blue",
            color: "#fff",
            borderRadius: "20px",
            width: "170px",
            textAlign: "center",
            marginTop: "20px",
            padding: "10px 0",
          }}
        >
          See more here
        </button>
      </Container>
    </>
  );
};

export default Organization;
