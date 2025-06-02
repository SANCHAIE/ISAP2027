import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import { keyframes } from "@mui/system";
import dusitThaniImg from "../../assets/dusit-thabni.jpg";
import whyPattayaImg from "../../assets/whypattaya.png";
import pattayaVideoSrc from "../../assets/PATTAYA CHONBURI.mp4";
import pattayaMapImg from "../../assets/pattaya-chonburi-map.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const shine = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const pattayaFeatures = [
  { icon: <BeachAccessIcon />, label: "Beach Paradise", color: "#5fb3d0" },
  { icon: <RestaurantIcon />, label: "World-Class Dining", color: "#f0b94d" },
  { icon: <NightlifeIcon />, label: "Vibrant Nightlife", color: "#2c5f7c" },
  { icon: <StarIcon />, label: "Luxury Resorts", color: "#1e4256" },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function VenueInfo({ fullPage = false }) {
  return (
    <Box
      sx={{
        py: 3,
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "left", mb: 3 }}>
          {fullPage ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon
                sx={{ mr: 2, fontSize: 40, color: "primary.main" }}
              />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                VENUE
              </Typography>
            </Box>
          ) : (
            <Card
              sx={{
                background: "white",
                borderRadius: 4,
                border: "1px solid rgba(44, 95, 124, 0.1)",
                boxShadow: "0 8px 32px rgba(44, 95, 124, 0.08)",
                animation: `${fadeInUp} 1s ease-out`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src={whyPattayaImg}
                      alt="Why Pattaya City"
                      sx={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    />

                    {/* Feature chips */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                        mt: 3,
                      }}
                    >
                      {pattayaFeatures.map((feature, index) => (
                        <Chip
                          key={index}
                          icon={feature.icon}
                          label={feature.label}
                          sx={{
                            backgroundColor: `${feature.color}20`,
                            color: feature.color,
                            fontWeight: 600,
                            border: `1px solid ${feature.color}40`,
                            animation: `${fadeInUp} 1s ease-out ${index * 0.1}s both`,
                            "&:hover": {
                              backgroundColor: feature.color,
                              color: "white",
                              transform: "translateY(-2px)",
                              boxShadow: `0 8px 25px ${feature.color}40`,
                            },
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box
                      component="video"
                      src={pattayaVideoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      sx={{
                        height: "100%",
                        minHeight: "300px",
                        maxWidth: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "25% center",
                        borderRadius: 3,
                        boxShadow: "0 8px 32px rgba(44, 95, 124, 0.15)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.02)",
                          boxShadow: "0 12px 48px rgba(44, 95, 124, 0.2)",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(44, 95, 124, 0.1)",
                borderRadius: 4,
                animation: `${fadeInUp} 1s ease-out 0.2s both`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background:
                    "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
                },
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px rgba(44, 95, 124, 0.15)",
                },
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 4,
                          animation: `${float} 3s ease-in-out infinite`,
                          boxShadow: "0 8px 24px rgba(95, 179, 208, 0.3)",
                          "& svg": {
                            fontSize: 48,
                            color: "white",
                          },
                        }}
                      >
                        <PlaceIcon />
                      </Box>
                      <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                          background:
                            "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          fontWeight: 800,
                          fontSize: "2.5rem",
                          letterSpacing: "0.02em",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                        }}
                      >
                        Pattaya City
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={7}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "primary.main",
                          fontWeight: 700,
                          mb: 2,
                          fontSize: "1.5rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Why Choose Pattaya?
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontSize: "1.25rem",
                          lineHeight: 1.6,
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          fontWeight: 500,
                          color: "text.primary",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mr: 2,
                            color: "primary.main",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            minWidth: "20px",
                          }}
                        >
                          »
                        </Box>
                        It is Asia's premier beach destination attracting over 6M
                        visitors a year.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontSize: "1.25rem",
                          lineHeight: 1.6,
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          fontWeight: 500,
                          color: "text.primary",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mr: 2,
                            color: "primary.main",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            minWidth: "20px",
                          }}
                        >
                          »
                        </Box>
                        Along Beach Road are restaurants, shopping areas, and night
                        attractions.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontSize: "1.25rem",
                          lineHeight: 1.6,
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          fontWeight: 500,
                          color: "text.primary",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mr: 2,
                            color: "primary.main",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            minWidth: "20px",
                          }}
                        >
                          »
                        </Box>
                        Famous for Sensational Lights & Nights.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontSize: "1.25rem",
                          lineHeight: 1.6,
                          display: "flex",
                          alignItems: "flex-start",
                          fontWeight: 500,
                          color: "text.primary",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mr: 2,
                            color: "primary.main",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            minWidth: "20px",
                          }}
                        >
                          »
                        </Box>
                        Entertainment, Spa, Sports, Beach & Nightlife
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    {/* Map image */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={pattayaMapImg}
                        alt="Pattaya Chonburi Map"
                        sx={{
                          width: 360,
                          height: 280,
                          borderRadius: 3,
                          border: "2px solid rgba(95, 179, 208, 0.3)",
                          boxShadow: "0 4px 16px rgba(95, 179, 208, 0.2)",
                          objectFit: "cover",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 8px 24px rgba(95, 179, 208, 0.3)",
                          },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    {/* Activity images grid */}
                    <Box sx={{ width: "100%", mt: 2 }}>
                      <Grid container spacing={0.5}>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#e3f2fd",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <BeachAccessIcon
                              sx={{ fontSize: 48, color: "#5fb3d0" }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#fff3e0",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <RestaurantIcon
                              sx={{ fontSize: 48, color: "#f0b94d" }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#f3e5f5",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <NightlifeIcon
                              sx={{ fontSize: 48, color: "#2c5f7c" }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#e8f5e8",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <StarIcon sx={{ fontSize: 48, color: "#1e4256" }} />
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#fce4ec",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <LocationOnIcon sx={{ fontSize: 48, color: "#e91e63" }} />
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{
                              aspectRatio: "1",
                              backgroundColor: "#e0f2f1",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          >
                            <PlaceIcon sx={{ fontSize: 48, color: "#009688" }} />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              How to Get There
            </Typography>
            <Typography variant="body1" paragraph>
              Pattaya is located approximately 150 kilometers southeast of
              Bangkok. Attendees can reach Pattaya via Suvarnabhumi
              International Airport (BKK) or Don Mueang International Airport
              (DMK).
            </Typography>
            <Typography variant="body1">
              Transportation options from Bangkok to Pattaya include:
            </Typography>
            <ul>
              <li>Airport shuttle services (approximately 2 hours)</li>
              <li>Taxi services</li>
              <li>Public bus transportation</li>
              <li>Private car rental</li>
            </ul>
            <Typography variant="body1" sx={{ mt: 2 }}>
              More detailed transportation information will be provided closer
              to the conference date.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default VenueInfo;
