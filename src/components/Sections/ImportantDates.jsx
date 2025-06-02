import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import EventIcon from "@mui/icons-material/Event";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import { keyframes } from "@mui/system";

const importantDates = [
  {
    title: "Paper Submission",
    date: "May 15, 2027",
    targetDate: new Date("2027-05-15T23:59:59"),
    icon: <CalendarTodayIcon />,
    color: "#5fb3d0",
    bgGradient: "linear-gradient(135deg, #5fb3d0 0%, #7dc4d8 100%)",
  },
  {
    title: "Notification of Acceptance",
    date: "July 23, 2027",
    targetDate: new Date("2027-07-23T23:59:59"),
    icon: <CheckCircleIcon />,
    color: "#f0b94d",
    bgGradient: "linear-gradient(135deg, #f0b94d 0%, #f5c970 100%)",
  },
  {
    title: "Early-bird Registration",
    date: "September 15, 2027",
    targetDate: new Date("2027-09-15T23:59:59"),
    icon: <AccessTimeIcon />,
    color: "#2c5f7c",
    bgGradient: "linear-gradient(135deg, #2c5f7c 0%, #4a8db0 100%)",
  },
  {
    title: "Conference Dates",
    date: "November 9-12, 2027",
    targetDate: new Date("2027-11-09T00:00:00"),
    icon: <EventIcon />,
    color: "#1e4256",
    bgGradient: "linear-gradient(135deg, #1e4256 0%, #2c5f7c 100%)",
  },
];

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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(240, 185, 77, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(240, 185, 77, 0.8), 0 0 30px rgba(240, 185, 77, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(240, 185, 77, 0.5);
  }
`;

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isExpired: false,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

/**
 * @param {object} props
 * @param {boolean} props.fullPage
 */
function ImportantDates({ fullPage = false }) {
  const getNextDeadline = () => {
    const now = new Date();
    return importantDates.find(date => date.targetDate > now) || importantDates[0];
  };

  const nextDeadline = getNextDeadline();
  const countdown = useCountdown(nextDeadline.targetDate);

  return (
    <Box
      sx={{
        py: 6,
        background: fullPage
          ? "linear-gradient(135deg, #f8fafe 0%, #eef6fb 100%)"
          : "linear-gradient(135deg, #f8fafe 0%, #eef6fb 50%, #ffffff 100%)",
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
            "radial-gradient(circle at 20% 50%, rgba(44, 95, 124, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(95, 179, 208, 0.06) 0%, transparent 50%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%235fb3d0\" opacity=\"0.03\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23f0b94d\" opacity=\"0.03\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
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
              background: "linear-gradient(135deg, #2c5f7c 0%, #5fb3d0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
              animation: `${fadeInUp} 1s ease-out`,
            }}
          >
            IMPORTANT DATES
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: "linear-gradient(135deg, #f0b94d 0%, #5fb3d0 100%)",
              margin: "0 auto",
              borderRadius: 2,
              mb: 4,
            }}
          />
          
          {/* Countdown Display */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #2c5f7c 0%, #4a8db0 50%, #5fb3d0 100%)",
              borderRadius: 3,
              maxWidth: 600,
              margin: "0 auto",
              animation: `${glow} 2s ease-in-out infinite`,
              boxShadow: "0 8px 32px rgba(44, 95, 124, 0.3)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
              <TimerIcon sx={{ color: "white", mr: 1, fontSize: 24 }} />
              <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                Next Deadline: {nextDeadline.title}
              </Typography>
            </Box>
            
            {!countdown.isExpired ? (
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((unit) => (
                  <Box key={unit.label} sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {unit.value.toString().padStart(2, '0')}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.9)" }}>
                      {unit.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
                🎉 Event Started!
              </Typography>
            )}
          </Paper>
        </Box>

        <Grid container spacing={4}>
          {importantDates.map((item, index) => {
            const isNext = item === nextDeadline;
            const daysToDue = Math.floor((item.targetDate - new Date()) / (1000 * 60 * 60 * 24));
            
            return (
              <Grid item xs={12} sm={6} md={fullPage ? 6 : 3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.95)",
                    border: isNext ? "2px solid" : "1px solid",
                    borderColor: isNext ? item.color : "rgba(44, 95, 124, 0.15)",
                    borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                    animation: `${fadeInUp} 1s ease-out ${index * 0.1}s both`,
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(44, 95, 124, 0.08)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: item.bgGradient,
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(44, 95, 124, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& .icon-container": {
                        animation: `${pulse} 1s ease-in-out infinite`,
                      },
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {isNext && (
                    <Chip
                      label="NEXT DEADLINE"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: item.bgGradient,
                        color: "white",
                        fontWeight: 600,
                        animation: `${pulse} 2s ease-in-out infinite`,
                      }}
                    />
                  )}
                  
                  <Box
                    className="icon-container"
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: item.bgGradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      boxShadow: `0 8px 20px ${item.color}40`,
                      "& svg": {
                        fontSize: 30,
                        color: "white",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: item.color,
                      letterSpacing: "0.02em",
                      mb: 2,
                    }}
                  >
                    {item.date}
                  </Typography>
                  
                  {daysToDue > 0 && (
                    <Chip
                      label={`${daysToDue} days left`}
                      size="small"
                      sx={{
                        backgroundColor: item.color,
                        color: "white",
                        fontWeight: 500,
                      }}
                    />
                  )}
                  
                  {daysToDue <= 0 && daysToDue > -30 && (
                    <Chip
                      label="Passed"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0,0,0,0.1)",
                        color: "text.secondary",
                      }}
                    />
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {fullPage && (
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Paper
              sx={{
                p: 4,
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: 3,
                border: "1px solid rgba(44, 95, 124, 0.15)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(44, 95, 124, 0.08)",
              }}
            >
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                🌍 All deadlines are at 11:59 PM Anywhere on Earth (AoE) time on
                the specified date.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                📅 Please note that these dates are subject to change. Check back
                regularly for updates.
              </Typography>
            </Paper>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ImportantDates;
