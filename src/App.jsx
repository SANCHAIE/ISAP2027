import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import NavBar from "./components/Layout/NavBar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import LocationIndicator from "./components/UI/LocationIndicator.jsx";
import HeroSection from "./components/UI/HeroSection.jsx";
import ImportantDates from "./components/Sections/ImportantDates.jsx";
import ConferenceTopics from "./components/Sections/ConferenceTopics.jsx";
import VenueInfo from "./components/Sections/VenueInfo.jsx";
import OrganizingCommittee from "./components/Sections/OrganizingCommittee.jsx";
import TechnicalSponsors from "./components/Sections/TechnicalSponsors.jsx";

import pattayaBg from "./assets/pattaya-bg.jpg";
import submenuBg from "./assets/submenu-bg.jpg";
import isapLogo from "./assets/isap2027-logo.png"; // Add logo import

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c5f7c", // Deep blue from poster
      dark: "#1e4256",
      light: "#4a8db0",
    },
    secondary: {
      main: "#5fb3d0", // Light blue/teal from poster
      dark: "#4a8fa8",
      light: "#7dc4d8",
    },
    tertiary: {
      main: "#f0b94d", // Yellow accent from poster
    },
    background: {
      default: "#f8fafe", // Very light blue background
      paper: "#ffffff",
    },
    text: {
      primary: "#1a3d4f", // Dark blue text
      secondary: "#4a6973",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.005em",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 600,
          padding: "10px 24px",
        },
        contained: {
          backgroundColor: "#2c5f7c",
          "&:hover": {
            backgroundColor: "#1e4256",
          },
        },
        outlined: {
          borderColor: "#2c5f7c",
          color: "#2c5f7c",
          "&:hover": {
            borderColor: "#1e4256",
            backgroundColor: "rgba(44, 95, 124, 0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(44, 95, 124, 0.1)",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(44, 95, 124, 0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#1a3d4f",
        },
        h2: {
          color: "#1a3d4f",
        },
        h3: {
          color: "#1a3d4f",
        },
        h4: {
          color: "#2c5f7c",
        },
      },
    },
  },
});

function App() {
  const [currentPath, setCurrentPath] = useState(["Home"]);
  const [currentContent, setCurrentContent] = useState("home");

  const handleNavigate = (pathString) => {
    if (pathString === "Home") {
      setCurrentPath(["Home"]);
      setCurrentContent("home");
    } else {
      const pathParts = pathString.split(" > ");
      setCurrentPath(["Home", ...pathParts]);

      const section = pathParts[0].toLowerCase().replace(/\s+/g, "-");
      setCurrentContent(section);
    }
  };

  const isHomePage = currentPath.length === 1 && currentPath[0] === "Home";
  const pageTitle = currentPath[currentPath.length - 1];

  const renderContent = () => {
    if (isHomePage) {
      return (
        <>
          <ImportantDates />
          <ConferenceTopics onNavigate={handleNavigate} />
          <VenueInfo />
          <OrganizingCommittee />
          <TechnicalSponsors />
        </>
      );
    }

    switch (currentContent) {
      case "important-dates":
        return <ImportantDates fullPage />;
      case "organizing-committee":
        return <OrganizingCommittee fullPage />;
      case "technical-co-sponsors":
        return <TechnicalSponsors fullPage />;
      case "conference-topics":
        return <ConferenceTopics fullPage onNavigate={handleNavigate} />;
      case "about-isap":
        return (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <h2>About ISAP</h2>
            <p>
              The International Symposium on Antennas and Propagation (ISAP) is
              a premier forum for sharing the latest research and innovation in
              antennas, propagation, and electromagnetic theory.
            </p>
          </Container>
        );
      default:
        return (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <h2>{pageTitle}</h2>
            <p>Content for {pageTitle} will be updated soon.</p>
          </Container>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar onNavigate={handleNavigate} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <LocationIndicator
            currentPath={currentPath}
            onNavigate={handleNavigate}
          />
          <HeroSection
            isHomePage={isHomePage}
            logo={isapLogo}
            title={
              isHomePage
                ? "2027 INTERNATIONAL SYMPOSIUM ON ANTENNAS AND PROPAGATION"
                : pageTitle
            }
            subtitle={
              isHomePage
                ? "NOV 9 TUESDAY - 12 FRIDAY, 2027 PATTAYA, THAILAND"
                : null
            }
            backgroundImageUrl={isHomePage ? pattayaBg : submenuBg}
          />
          {renderContent()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
