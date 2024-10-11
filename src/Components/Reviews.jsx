import React, { useRef } from "react";
import Navbar from "./Navbar";
import { Container, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img8.jpg";
import img2 from "../assets/img9.jfif";
import img3 from "../assets/img4.jfif";
import img4 from "../assets/img5.jfif";
import img5 from "../assets/img6.jfif";
import "swiper/css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Reviews = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <Navbar />
      <Container
        id="reviews"
        sx={{
          width: "100vw",
          height: "min-content",
          display: "flex",
          flexDirection: "column",

          fontWeight: 600,
          paddingTop: { xs: "100px", md: "150px" },
        }}
      >
        <Typography
          sx={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Ratings
        </Typography>
        <Typography
          sx={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}
        >
          What Student Says
        </Typography>
        <Box sx={{ display: "flex", gap: { xs: 1, md: 4 }, marginTop: "60px" }}>
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>
            <ArrowCircleLeftIcon sx={{ fontSize: "40px" }} />
          </button>
          <Box
            sx={{
              display: "flex",
              gap: 0,
              flexGrow: 1,
              overflow: "hidden",
              padding: "10px",
              background: "lightgray",
            }}
          >
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Box
                  className="shadow-2xl"
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: { xs: "10px", md: "30px" },
                    minWidth: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img1}
                      style={{
                        border: "4px solid blue",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, color: "blue" }}>
                        Buraque Sayed
                      </Typography>
                      <Typography>Entery Test Pakistan</Typography>
                    </Box>
                  </Box>
                  <Typography>
                    Entry Exam Solutions Pakistan ensured my ECAT success. Their
                    mock tests and guidance boosted my confidence and refined my
                    strategies. The supportive environment and learning
                    opportunities enhanced my grasp of concepts. I recommend
                    them.
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="shadow-2xl"
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: { xs: "10px", md: "30px" },
                    minWidth: "48%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img2}
                      style={{
                        border: "4px solid blue",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, color: "blue" }}>
                        Yousuf Ahmed
                      </Typography>
                      <Typography>Entery Test Pakistan</Typography>
                    </Box>
                  </Box>
                  <Typography>
                    Thanks to Entry Exam Solutions Pakistan, I excelled in ECAT.
                    Their mock tests and coaching sharpened my skills
                    effectively. The collaborative learning and feedback were
                    invaluable. Highly recommend for ECAT preparation, I love
                    Entry Testing Service
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="shadow-2xl"
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: { xs: "10px", md: "30px" },
                    minWidth: "48%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img3}
                      style={{
                        border: "4px solid blue",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, color: "blue" }}>
                        Yousuf Ahmed
                      </Typography>
                      <Typography>Entery Test Pakistan</Typography>
                    </Box>
                  </Box>
                  <Typography>
                    Thanks to Entry Exam Solutions Pakistan, I excelled in ECAT.
                    Their mock tests and coaching sharpened my skills
                    effectively. The collaborative learning and feedback were
                    invaluable. Highly recommend for ECAT preparation, I love
                    Entry Testing Service
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="shadow-2xl"
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: { xs: "10px", md: "30px" },
                    minWidth: "49%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img4}
                      style={{
                        border: "4px solid blue",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, color: "blue" }}>
                        Yousuf Ahmed
                      </Typography>
                      <Typography>Entery Test Pakistan</Typography>
                    </Box>
                  </Box>
                  <Typography>
                    Thanks to Entry Exam Solutions Pakistan, I excelled in ECAT.
                    Their mock tests and coaching sharpened my skills
                    effectively. The collaborative learning and feedback were
                    invaluable. Highly recommend for ECAT preparation, I love
                    Entry Testing Service
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="shadow-2xl"
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: { xs: "10px", md: "30px" },
                    minWidth: "48%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img5}
                      style={{
                        border: "4px solid blue",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, color: "blue" }}>
                        Yousuf Ahmed
                      </Typography>
                      <Typography>Entery Test Pakistan</Typography>
                    </Box>
                  </Box>
                  <Typography>
                    Thanks to Entry Exam Solutions Pakistan, I excelled in ECAT.
                    Their mock tests and coaching sharpened my skills
                    effectively. The collaborative learning and feedback were
                    invaluable. Highly recommend for ECAT preparation, I love
                    Entry Testing Service
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          <button onClick={() => swiperRef.current.swiper.slideNext()}>
            <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
          </button>
        </Box>
      </Container>
    </>
  );
};

export default Reviews;
