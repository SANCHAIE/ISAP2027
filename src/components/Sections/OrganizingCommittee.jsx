import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import GroupsIcon from "@mui/icons-material/Groups";
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

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const committeeGroups = [
  {
    title: "Honorary Chairs",
    members: [
      "Monai Krairiksh (KMITL)",
      "Prayoot Akkaraekthalin (KMUTNB)",
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      "Danai Torrungrueng (KMUTNB)",
      "Chuwong Phongcharoenpanich (KMITL)",
    ],
  },
  {
    title: "Technical Program Committee Co-Chairs",
    members: [
      "Mitchai Chongcheawchamnan (PSU)",
      "Titipong Lertwiriyaprapa (KMUTNB)",
      "Sarawuth Chaimool (KKU)",
    ],
  },
  {
    title: "Special Session Committee Chair",
    members: ["Monthipa Uthansakul (SUT)"],
  },
  {
    title: "Workshop/Tutorial Committee Chairs",
    members: [
      "Peerapong Uthansakul (SUT)",
      "Kittisak Phaebua (KMUTNB)",
    ],
  },
  {
    title: "Local Arrangement Committee Chairs",
    members: [
      "Sanchai Eadprab (BUU)",
      "Akkarat Boonpoonga (KMUTNB)",
    ],
  },
  {
    title: "Exhibition & Sponsorship Chair",
    members: ["Suramate Chalermwisutkul (KMUTNB)"],
  },
  {
    title: "Publication Committee Chairs",
    members: [
      "Denchai Worasawete (KU)",
      "Ekasit Nugoolcharoenlap (RMUTR)",
    ],
  },
  {
    title: "Publicity Chair",
    members: ["Rardchawadee Silapunt (KMUTT)"],
  },
  {
    title: "Finance Chair",
    members: ["Nonchanutt Chudpooti (KMUTNB)"],
  },
  {
    title: "Registration Chair",
    members: ["Tanawut Tantisopharak (KKU)"],
  },
  {
    title: "Secretaries",
    members: [
      "Panuwat Janpugdee (CU)",
      "Supakit Kawdungta (RMUTL)",
    ],
  },
];

function OrganizingCommittee({ fullPage = false }) {
  const displayGroups = fullPage ? committeeGroups : committeeGroups.slice(0, 12);

  return (
    <Box
      sx={{
        py: fullPage ? 6 : 4,
        backgroundColor: fullPage ? "#f8fafc" : "white",
        position: "relative",
        overflow: "hidden",
        "&::before": fullPage ? {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%235fb3d0\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M20 20c0 11.046-8.954 20-20 20v20h40V20H20z\"/%3E%3C/g%3E%3C/svg%3E')",
          pointerEvents: "none",
        } : {},
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {fullPage && (
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
                mb: 3,
                animation: `${float} 3s ease-in-out infinite`,
                boxShadow: "0 8px 24px rgba(95, 179, 208, 0.3)",
              }}
            >
              <GroupsIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
          </Box>
        )}

        <Typography
          variant={fullPage ? "h3" : "h4"}
          component="h2"
          sx={{
            color: "#2c5f7c",
            fontWeight: 800,
            fontSize: fullPage ? "2.5rem" : "2rem",
            mb: fullPage ? 1 : 2,
            textAlign: "center",
            display: "block",
            animation: `${fadeInUp} 1s ease-out`,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #5fb3d0 0%, #f0b94d 100%)",
              borderRadius: 2,
            },
          }}
        >
          Organizing Committee
        </Typography>

        <Box sx={{ mt: fullPage ? 4 : 3 }}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              boxShadow: fullPage ? "0 8px 32px rgba(44, 95, 124, 0.1)" : "0 4px 16px rgba(44, 95, 124, 0.08)",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(95, 179, 208, 0.1)",
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: "linear-gradient(90deg, #5fb3d0 0%, #f0b94d 30%, #2c5f7c 70%, #5fb3d0 100%)",
                backgroundSize: "200% 100%",
                animation: `${shimmer} 3s infinite`,
              },
            }}
          >
            <Table>
              <TableBody>
                {displayGroups.map((group, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: "rgba(95, 179, 208, 0.02)",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(95, 179, 208, 0.08)",
                        transform: "scale(1.001)",
                        boxShadow: "inset 6px 0 0 #5fb3d0, 0 4px 12px rgba(95, 179, 208, 0.15)",
                      },
                      transition: "all 0.3s ease",
                      animation: `${fadeInUp} 1s ease-out ${0.3 + index * 0.1}s both`,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 3,
                        height: "60%",
                        background: "linear-gradient(180deg, #5fb3d0 0%, #f0b94d 100%)",
                        borderRadius: "2px 0 0 2px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover::after": {
                        opacity: 1,
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(95, 179, 208, 0.1)",
                        verticalAlign: "top",
                        py: 1.5,
                        width: "40%",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 4,
                          background: "linear-gradient(180deg, #5fb3d0 0%, #f0b94d 100%)",
                          opacity: 0.6,
                        },
                        pl: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #5fb3d0 0%, #f0b94d 100%)",
                            flexShrink: 0,
                            boxShadow: "0 2px 4px rgba(95, 179, 208, 0.3)",
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.2rem",
                            lineHeight: 1.3,
                            background: "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {group.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(95, 179, 208, 0.1)",
                        py: 1.5,
                        width: "60%",
                        background: "linear-gradient(90deg, transparent 0%, rgba(95, 179, 208, 0.01) 100%)",
                      }}
                    >
                      <Box>
                        {group.members.map((member, memberIndex) => (
                          <Box
                            key={memberIndex}
                            sx={{
                              mb: memberIndex < group.members.length - 1 ? 0.5 : 0,
                              p: 1,
                              borderRadius: 3,
                              transition: "all 0.2s ease",
                              border: "1px solid transparent",
                              background: "rgba(255, 255, 255, 0.7)",
                              backdropFilter: "blur(5px)",
                              "&:hover": {
                                backgroundColor: "rgba(95, 179, 208, 0.08)",
                                transform: "translateX(8px)",
                                border: "1px solid rgba(95, 179, 208, 0.2)",
                                boxShadow: "0 2px 8px rgba(95, 179, 208, 0.15)",
                              },
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#1e293b",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                lineHeight: 1.3,
                                display: "flex",
                                alignItems: "center",
                                "&::before": {
                                  content: '"◆"',
                                  color: "#5fb3d0",
                                  fontWeight: 700,
                                  mr: 1.5,
                                  fontSize: "1.2rem",
                                  textShadow: "0 1px 2px rgba(95, 179, 208, 0.3)",
                                },
                              }}
                            >
                              <Box component="span" sx={{ mr: 1, fontWeight: 700 }}>
                                {member.split(' (')[0]}
                              </Box>
                              <Box 
                                component="span" 
                                sx={{ 
                                  color: "#5fb3d0", 
                                  fontWeight: 600,
                                  fontSize: "1rem",
                                }}
                              >
                                ({member.split(' (')[1]}
                              </Box>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

       

        {fullPage && (
          <Box sx={{ mt: 6 }}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
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
                  borderRadius: "12px 12px 0 0",
                },
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  color: "#2c5f7c",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  mb: 3,
                }}
              >
                International Advisory Committee
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#64748b", mb: 3 }}>
                The International Advisory Committee membership will be announced soon.
              </Typography>

              <Divider sx={{ my: 3, borderColor: "rgba(95, 179, 208, 0.2)" }} />

              <Typography variant="body1" paragraph sx={{ color: "#475569", lineHeight: 1.6 }}>
                The Organizing Committee is responsible for all aspects of the ISAP2027 conference, 
                from technical content to logistics and operations.
              </Typography>
              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.6 }}>
                For any inquiries related to the conference organization, please contact the ISAP2027 Secretariat at:{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 700,
                    color: "#5fb3d0",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  isap2027@isap2027.org
                </Box>
              </Typography>
            </Paper>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default OrganizingCommittee;
