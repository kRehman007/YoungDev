import { Container, Typography, Box } from "@mui/material";
import img from "../assets/img5.jfif";
import React from "react";
import Navbar from "./Navbar";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Container
        id="about"
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "min-content", md: "100vh" },
          paddingTop: { xs: "170px" },
          fontWeight: 600,
          padding: "50px",
        }}
      >
        <Typography sx={{ minWidth: "40%", order: { xs: 2, md: 1 } }}>
          <Box
            component="img"
            src={img}
            sx={{
              width: "100%",
              height: { xs: "300px", md: "470px" },
              borderRadius: "20px",
            }}
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            gap: 1,
            order: { xs: 1, md: 2 },
          }}
        >
          <Typography
            sx={{
              color: "blue",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            About Organization
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            Dedicated Practice,
            <br /> Outstanding Results!
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            <p>
              Welcome to Entry Testing Service Pakistan, a leading institution
              dedicated to guiding students through the preparation process for
              MDCAT, ECAT, and general entry tests. Our mission is to equip
              students with the essential knowledge, skills, and confidence
              required to excel in these crucial examinations. We offer a
              rigorous curriculum that includes meticulously crafted mock tests
              designed to simulate the actual exam conditions. These tests not
              only familiarize students with the format and content but also
              sharpen their critical thinking and time management abilities,
              ensuring they are well-prepared for exam day.
            </p>

            <p style={{ margin: "5px 0px" }}>
              At Entry Testing Service Pakistan, we prioritize personalized
              learning and individual attention. Our team of experienced
              instructors provides detailed feedback and tailored guidance to
              each student, addressing their unique strengths and areas needing
              improvement. Whether its mastering challenging concepts or
              refining exam strategies, we are committed to supporting every
              student on their academic journey.
            </p>

            <p>
              Join us at Entry Testing Service Pakistan and embark on a
              transformative educational experience. Let us empower you to
              achieve your academic aspirations and prepare you for a successful
              future in your chosen field.
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Aboutus;
