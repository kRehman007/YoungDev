import { Container, Box, Typography } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const ContactUs = () => {
  return (
    <Container
      id="contactUs"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "min-content", sm: "100vh" },
        gap: 1,
        alignItems: "center",

        paddingTop: "150px",
        fontWeight: 600,
      }}
    >
      <Typography sx={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}>
        CONTACT US
      </Typography>
      <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
        Get in Touch
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 7,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          marginTop: { xs: "20px", md: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "50%" },
            padding: { xs: "20px", md: 0 },
          }}
        >
          <Typography
            sx={{ fontSize: "24px", marginTop: { xs: "40px", md: 0 } }}
          >
            Send us a Message
          </Typography>
          <Typography sx={{ color: "gray" }}>
            Feel free to contact us at any time, we are always available for you
            we respect aispirants to grow in thier future.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <AttachEmailIcon />
            <Typography>etsporg@yahoo.com</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CallIcon />
            <Typography>+923342949753</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <LocationOnIcon />
            <Typography>Islamabad Pakistan</Typography>
          </Box>
        </Box>
        <Box style={{ flexGrow: 1, width: "90%" }}>
          <form
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>
              Name
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                style={{
                  background: "lightgray",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </Typography>
            <br />
            <Typography>
              Phone Number
              <br />
              <input
                type="tel"
                placeholder="Enter  Phone Number"
                style={{
                  background: "lightgray",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </Typography>
            <br />
            <Typography>
              Write Your Message Here.
              <br />
              <textarea
                rows={5}
                placeholder="Enter your Message"
                style={{
                  background: "lightgray",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </Typography>
            <button
              type="submit"
              style={{
                background: "blue",
                color: "#fff",
                marginTop: "5px",
                padding: "7px 20px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
