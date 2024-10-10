import { Container, Typography, Box } from "@mui/material";
import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.avif";
import Navbar from "./Navbar";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const Test = () => {
  return (
    <>
      <Navbar />
      <Container
        id="test"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          height: { xs: "min-content", sm: "100vh" },
          paddingTop: { xs: "50px", md: "150px" },
          fontWeight: 600,
        }}
      >
        <Typography
          sx={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}
        >
          Our Tests
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          What We Offer
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
            marginTop: "70px",
          }}
        >
          {/* <img
            src={img}
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          /> */}
          {/* <img
            src={img}
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          />
          <img
            src={img}
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          /> */}
          <Box
            sx={{
              width: "300px",
              height: "300px",
              background: `url(${img1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "blue",
                opacity: 0,
                transition: "opacity 0.5s ease",
                zIndex: 1,
              },
              "&:hover::after": {
                opacity: 0.3, // Adjust opacity for the color overlay
              },
              "&:hover .text": {
                transform: "translateY(-100%)",
                bottom: 90,
              },
            }}
          >
            <Typography
              className="text"
              sx={{
                transform: "translateY(100%)",
                position: "absolute",
                bottom: 0,
                transition: "all .5s",
                color: "#fff",
              }}
            >
              <ImportContactsIcon
                sx={{ fontSize: "50px", marginLeft: "-10px" }}
              />
              <br />
              Ecat
            </Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "300px",
              background: `url(${img2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "blue",
                opacity: 0,
                transition: "opacity 0.5s ease",
                zIndex: 1,
              },
              "&:hover::after": {
                opacity: 0.3, // Adjust opacity for the color overlay
              },
              "&:hover .text": {
                transform: "translateY(-100%)",
                bottom: 90,
              },
            }}
          >
            <Typography
              className="text"
              sx={{
                transform: "translateY(100%)",
                position: "absolute",
                bottom: 0,
                transition: "all .5s",
                color: "#fff",
              }}
            >
              <ImportContactsIcon sx={{ fontSize: "50px" }} />
              <br />
              MDCAT
            </Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "300px",
              background: `url(${img3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "blue",
                opacity: 0,
                transition: "opacity 0.5s ease",
                zIndex: 1,
              },
              "&:hover::after": {
                opacity: 0.3, // Adjust opacity for the color overlay
              },
              "&:hover .text": {
                transform: "translateY(-100%)",
                bottom: 90,
              },
            }}
          >
            <Typography
              className="text"
              sx={{
                transform: "translateY(100%)",
                position: "absolute",
                bottom: 0,
                transition: "all .5s",
                color: "#fff",
              }}
            >
              <ImportContactsIcon sx={{ fontSize: "50px" }} />
              <br />
              General Test
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Test;
