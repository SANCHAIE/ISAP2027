import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { keyframes } from "@mui/system";
import ieeeLogo from "../../assets/IEEE-logo.png";
import ieiceLogo from "../../assets/IEICE-logo.png";
import ieeeapsLogo from "../../assets/IEEEAPS-logo.png";
import ursiLogo from "../../assets/ursi-logo.png";
import IEEEMTTLogo from "../../assets/IEEE-MTT-AP-ED-logo.png";

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

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Technical co-sponsors data from the conference info
const technicalSponsors = [
  {
    name: "IEICE",
    fullName:
      "Institute of Electronics, Information and Communication Engineers",
    logo: ieiceLogo,
    description:
      "IEICE is an academic organization established with the aim of advancing the science and technology of electronics, information, and communication.",
    sections: ["IEICE Bangkok Section"],
  },
  {
    name: "IEEE APS",
    fullName: "IEEE Antennas and Propagation Society",
    logo: ieeeapsLogo,
    description:
      "IEEE Antennas and Propagation Society is dedicated to advancing the knowledge of antennas and propagation.",
    sections: [],
  },
  {
    name: "IEEE Thailand",
    fullName: "IEEE Thailand Section",
    logo: ieeeLogo,
    description:
      "IEEE Thailand Section promotes IEEE activities and serves the professional community in Thailand.",
    sections: [],
  },
  {
    name: "IEEE MTT/AP/ED",
    fullName: "IEEE MTT/AP/ED Thailand Chapter",
    logo: IEEEMTTLogo,
    description:
      "IEEE MTT/AP/ED Thailand Chapter covers Microwave Theory and Techniques, Antennas and Propagation, and Electron Devices.",
    sections: [],
  },
  {
    name: "URSI",
    fullName: "International Union of Radio Science",
    logo: ursiLogo,
    description:
      "URSI is responsible for stimulating and coordinating international studies, research, applications, scientific exchange, and communication in the fields of radio science.",
    sections: [],
  },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function TechnicalSponsors({ fullPage = false }) {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: fullPage ? "#f8fafc" : "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: fullPage
            ? "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%235fb3d0\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M20 20c0 11.046-8.954 20-20 20v20h40V20H20z\"/%3E%3C/g%3E%3C/svg%3E')"
            : "radial-gradient(circle at 20% 80%, rgba(95, 179, 208, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 185, 77, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
              mb: 3,
              animation: `${float} 3s ease-in-out infinite`,
              boxShadow: "0 12px 32px rgba(95, 179, 208, 0.4)",
              border: "4px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <HandshakeIcon sx={{ fontSize: 50, color: "white" }} />
          </Box>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textAlign: "center",
              mb: 2,
              background: "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
              animation: `${fadeInUp} 1s ease-out`,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 6,
                background: "linear-gradient(90deg, #5fb3d0 0%, #f0b94d 100%)",
                borderRadius: 3,
              },
            }}
          >
            TECHNICAL CO-SPONSORS
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
              mt: 3,
            }}
          >
            Proudly supported by leading international organizations
          </Typography>
        </Box>

        {!fullPage && (
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            {technicalSponsors.map((sponsor, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    textAlign: "center",
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    animation: `${fadeInUp} 1s ease-out ${0.1 * index}s both`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.05)",
                      "& img": {
                        animation: `${pulse} 2s infinite`,
                      },
                    },
                  }}
                >
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} Logo`}
                      style={{
                        maxHeight: "70px",
                        maxWidth: "90%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {sponsor.name}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {fullPage && (
          <>
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                p: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 4,
                border: "1px solid rgba(95, 179, 208, 0.1)",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #5fb3d0 0%, #f0b94d 50%, #2c5f7c 100%)",
                  borderRadius: "16px 16px 0 0",
                },
              }}
            >
              <Typography
                variant="h5"
                paragraph
                sx={{
                  mt: 2,
                  color: "text.primary",
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                ISAP2027 is proud to be technically co-sponsored by the following
                prestigious organizations:
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              {technicalSponsors.map((sponsor, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      border: "1px solid rgba(95, 179, 208, 0.1)",
                      borderRadius: 4,
                      transition: "all 0.3s ease",
                      animation: `${fadeInUp} 1s ease-out ${0.2 * index}s both`,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 16px 32px rgba(95, 179, 208, 0.15)",
                        border: "1px solid rgba(95, 179, 208, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 0,
                        paddingTop: "40%",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      {sponsor.logo ? (
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} Logo`}
                          style={{
                            maxHeight: "100px",
                            maxWidth: "80%",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            fontSize: "2.5rem",
                            fontWeight: 800,
                            background: "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {sponsor.name}
                        </Typography>
                      )}
                    </CardMedia>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: "#2c5f7c",
                          mb: 2,
                        }}
                      >
                        {sponsor.fullName}
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.7,
                        }}
                      >
                        {sponsor.description}
                      </Typography>

                      {sponsor.sections.length > 0 && (
                        <Box
                          sx={{
                            mt: 3,
                            p: 2,
                            background: "rgba(95, 179, 208, 0.05)",
                            borderRadius: 2,
                            border: "1px solid rgba(95, 179, 208, 0.1)",
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: "#2c5f7c",
                              mb: 1,
                            }}
                          >
                            Participating Sections:
                          </Typography>
                          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                            {sponsor.sections.map((section, sectionIndex) => (
                              <li key={sectionIndex}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "text.primary" }}
                                >
                                  {section}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 6 }}>
              <Paper
                sx={{
                  p: 5,
                  borderRadius: 4,
                  border: "1px solid rgba(95, 179, 208, 0.1)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(90deg, #5fb3d0 0%, #f0b94d 50%, #2c5f7c 100%)",
                    borderRadius: "16px 16px 0 0",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    color: "#2c5f7c",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Sponsorship Opportunities
                </Typography>
                <Typography
                  variant="h6"
                  paragraph
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  ISAP2027 offers various sponsorship packages for companies and
                  organizations interested in showcasing their products and
                  services to the international antennas and propagation
                  community.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.7,
                  }}
                >
                  For more information about sponsorship opportunities, please
                  contact the Exhibition & Sponsorship Chair at{" "}
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    sponsors@isap2027.org
                  </Box>
                </Typography>
              </Paper>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default TechnicalSponsors;
