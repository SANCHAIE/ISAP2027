import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TopicIcon from "@mui/icons-material/Topic";
import RadioIcon from "@mui/icons-material/Radio";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import { keyframes } from "@mui/system";

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

const topics = [
  {
    category: "A. ANTENNAS",
    icon: <RadioIcon />,
    color: "#5fb3d0",
    bgGradient: "linear-gradient(135deg, #5fb3d0 0%, #7dc4d8 100%)",
    items: [
      "Antenna Theory and Design",
      "Small Antennas and RF Sensors",
      "Antennas for Mobile and V2X Applications",
      "Broadband and Multi-band Antennas",
      "Active, In-package, and On-Chip Antennas",
      "Adaptive and Reconfigurable Antennas",
      "Additive Manufacturing",
      "Array Antennas",
      "Reflectarrays and Transmitarrays",
      "Antenna Measurements",
      "Millimeter-wave, THz, and Optical Antennas",
      "HF/VHF Antennas",
      "Reflector, Lens, and Radomes",
      "Antennas with Periodic Structures",
      "Other Antenna-related Topics",
    ],
  },
  {
    category: "B. PROPAGATION",
    icon: <SignalCellularAltIcon />,
    color: "#f0b94d",
    bgGradient: "linear-gradient(135deg, #f0b94d 0%, #f5c970 100%)",
    items: [
      "Propagation Theory and Models",
      "Millimeter-Wave, THz, and Optical Propagation",
      "Machine-to-machine/Infrastructure Propagation",
      "Channel Sounding and Channel Estimation",
      "Radar, DOA, Localization, and Sensing",
      "Propagation for Vehicular Communications",
      "Terrestrial, Earth-space, and Ionospheric Propagation",
      "Propagation Measurement Techniques",
      "Other Propagation-related Topics",
    ],
  },
  {
    category: "C. ELECTROMAGNETIC",
    icon: <FlashOnIcon />,
    color: "#2c5f7c",
    bgGradient: "linear-gradient(135deg, #2c5f7c 0%, #4a8db0 100%)",
    items: [
      "Electromagnetic Theory",
      "Computational and Numerical Techniques",
      "Scattering, Diffraction, and RCS",
      "Inverse and Imaging Techniques",
      "Metamaterials, Metasurfaces, and Artificial Materials",
      "Periodic Structures",
      "Nano-electromagnetics",
      "Other EM Wave Theory-related Topics",
    ],
  },
  {
    category: "D. AP-RELATED TOPICS",
    icon: <DeviceHubIcon />,
    color: "#1e4256",
    bgGradient: "linear-gradient(135deg, #1e4256 0%, #2c5f7c 100%)",
    items: [
      "Passive and Active Components",
      "Reconfigurable Intelligent Surfaces",
      "Antenna Systems for Mobile (5G, B5G, and 6G) Communications",
      "MIMO, Diversity, and Their Applications",
      "Broadcasting and Receiving Technologies",
      "Wireless Power Transfer Technologies",
      "Wearable Device Networks and Medical Applications",
      "Sensor Networks and Ad-hoc Systems",
      "RFID and Applications",
      "EMC/EMI Technologies",
      "Satellite and Military Applications",
      "Machine Learning and Artificial Intelligence",
      "Other AP-related Topics",
    ],
  },
];

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 * @param {(path: string) => void} props.onNavigate
 */
function ConferenceTopics({ fullPage = false, onNavigate }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpenModal = (topic) => {
    setSelectedTopic(topic);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTopic(null);
  };

  return (
    <Box
      sx={{
        py: 6,
        background: fullPage
          ? "background.default"
          : "linear-gradient(135deg, #f8fafe 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(95, 179, 208, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
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
              mb: 2,
              animation: `${fadeInUp} 1s ease-out`,
            }}
          >
            CONFERENCE TOPICS
          </Typography>
          <Box
            sx={{
              width: 120,
              height: 6,
              background:
                "linear-gradient(135deg, #f0b94d 0%, #5fb3d0 100%)",
              margin: "0 auto",
              borderRadius: 3,
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Explore cutting-edge research areas and submit your innovative work
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {topics.map((topic, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid rgba(44, 95, 124, 0.1)",
                  borderRadius: 4,
                  animation: `${fadeInUp} 1s ease-out ${index * 0.1}s both`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: topic.bgGradient,
                  },
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.02)",
                    boxShadow: `0 25px 50px rgba(0,0,0,0.15), 0 0 30px ${topic.color}30`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "& .topic-icon": {
                      animation: `${float} 2s ease-in-out infinite`,
                      transform: "scale(1.1)",
                    },
                    "& .topic-count": {
                      transform: "scale(1.1)",
                    },
                  },
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      className="topic-icon"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: topic.bgGradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        boxShadow: `0 8px 20px ${topic.color}40`,
                        "& svg": {
                          fontSize: 28,
                          color: "white",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {topic.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          color: topic.color,
                          fontWeight: 700,
                          mb: 1,
                          fontSize: "1.1rem",
                        }}
                      >
                        {topic.category}
                      </Typography>
                      <Chip
                        className="topic-count"
                        label={`${topic.items.length} topics`}
                        size="small"
                        sx={{
                          backgroundColor: topic.color,
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                    </Box>
                  </Box>

                  <List
                    dense={!fullPage}
                    sx={{ "& .MuiListItem-root": { py: 0.5 } }}
                  >
                    {topic.items
                      .slice(0, fullPage ? topic.items.length : 5)
                      .map((item, itemIndex) => (
                        <ListItem
                          key={itemIndex}
                          disableGutters
                          sx={{
                            "&:hover": {
                              backgroundColor: `${topic.color}10`,
                              borderRadius: 1,
                              transform: "translateX(8px)",
                              transition: "all 0.2s ease",
                            },
                            transition: "all 0.2s ease",
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 20 }}>
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: 8,
                                color: topic.color,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              color: "text.primary",
                              lineHeight: 1.4,
                            }}
                          />
                        </ListItem>
                      ))}
                    {!fullPage && topic.items.length > 5 && (
                      <ListItem
                        disableGutters
                        sx={{
                          mt: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Chip
                          label={`+${topic.items.length - 5} more topics`}
                          size="small"
                          clickable
                          onClick={() => handleOpenModal(topic)}
                          sx={{
                            backgroundColor: topic.color,
                            color: "white",
                            fontWeight: 500,
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: topic.color,
                              filter: "brightness(1.1)",
                              transform: "scale(1.05)",
                            },
                            transition: "all 0.2s ease",
                          }}
                        />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Card
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #f8fafe 0%, #ffffff 100%)",
                borderRadius: 4,
                border: "1px solid rgba(44, 95, 124, 0.1)",
                boxShadow: "0 8px 32px rgba(44, 95, 124, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, color: "primary.main", fontWeight: 600 }}
              >
                💡 Open to Innovation
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                This is a comprehensive but not exhaustive list of topics.
                Researchers are encouraged to submit papers in related fields not
                explicitly mentioned above.
              </Typography>
            </Card>
          </Box>
        )}
      </Container>

      {/* Modal for showing all topics */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            maxHeight: "85vh",
            background: "linear-gradient(135deg, #f8fafe 0%, #ffffff 100%)",
          },
        }}
      >
        {selectedTopic && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: selectedTopic.bgGradient,
                color: "white",
                py: 4,
                px: 4,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    "& svg": {
                      fontSize: 28,
                      color: "white",
                    },
                  }}
                >
                  {selectedTopic.icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {selectedTopic.category}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {selectedTopic.items.length} research topics
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseModal}
                sx={{ 
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            
            <DialogContent sx={{ p: 0 }}>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    mb: 4, 
                    color: selectedTopic.color,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Explore all research areas in {selectedTopic.category.toLowerCase()}
                </Typography>
                
                <Grid container spacing={2}>
                  {selectedTopic.items.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          p: 3,
                          border: "1px solid",
                          borderColor: `${selectedTopic.color}30`,
                          borderRadius: 3,
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: `${selectedTopic.color}08`,
                            borderColor: selectedTopic.color,
                            transform: "translateY(-2px)",
                            boxShadow: `0 8px 25px ${selectedTopic.color}20`,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: `${selectedTopic.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: selectedTopic.color,
                              fontWeight: 700,
                              fontSize: "0.75rem",
                            }}
                          >
                            {(index + 1).toString().padStart(2, '0')}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            color: "text.primary",
                            lineHeight: 1.4,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </DialogContent>
            
            <DialogActions 
              sx={{ 
                px: 4, 
                pb: 4, 
                pt: 2,
                borderTop: "1px solid",
                borderColor: "rgba(44, 95, 124, 0.1)",
                background: "rgba(248, 250, 254, 0.5)",
              }}
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  Ready to submit your research in any of these areas?
                </Typography>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  size="large"
                  sx={{
                    background: selectedTopic.bgGradient,
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0 8px 25px ${selectedTopic.color}40`,
                    },
                  }}
                >
                  Close & Continue
                </Button>
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default ConferenceTopics;
