import React from "react";
import { Box, Typography, Container } from "@mui/material";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string | null} props.backgroundImageUrl
 * @param {boolean} props.isHomePage
 * @param {string} props.logo
 */
function HeroSection({
  title,
  subtitle,
  backgroundImageUrl,
  isHomePage,
  logo,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height: isHomePage ? "70vh" : "40vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {logo && (
            <Box
              component="img"
              src={logo}
              alt="ISAP Logo"
              sx={{
                height: isHomePage ? "120px" : "80px",
                width: "auto",
                filter: "brightness(1.1) contrast(1.1)",
              }}
            />
          )}
          <Typography
            variant={isHomePage ? "h1" : "h2"}
            sx={{
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              color: "white",
              letterSpacing: "0.02em",
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                  color: "rgba(255, 255, 255, 0.95)",
                  letterSpacing: "0.1em",
                  mb: 1,
                }}
              >
                PATTAYA, THAILAND
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  color: "#f0b94d",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                NOV 9 TUESDAY - 12 FRIDAY, 2027
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
