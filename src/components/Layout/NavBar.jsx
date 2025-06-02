import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import isapLogo from "../../assets/isap2027-logo.png";

const menuItems = [
  { id: "home", label: "Home", hasSubmenu: false },
  { id: "dates", label: "Important Dates", hasSubmenu: true },
  { id: "committee", label: "Organizing Committee", hasSubmenu: true },
  { id: "sponsors", label: "Technical Co-Sponsors", hasSubmenu: true },
  { id: "topics", label: "Conference Topics", hasSubmenu: true },
  { id: "about", label: "About ISAP", hasSubmenu: true },
];

const subMenuItems = {
  dates: [
    "Paper Submission",
    "Notification of Acceptance",
    "Early-bird Registration",
  ],
  committee: [
    "Honorary Chairs",
    "General Co-Chairs",
    "Technical Program Committee",
    "Special Session Committee",
  ],
  sponsors: ["IEEE", "IEICE", "ECTI", "URSI"],
  topics: [
    "Antennas",
    "Propagation",
    "Electromagnetic Wave Theory",
    "AP-Related Topics",
  ],
  about: ["About ISAP", "About Pattaya", "Contact Information"],
};

/**
 
 * @param {object} props 
 * @param {(path: string) => void} props.onNavigate 
 */
function NavBar({ onNavigate }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const handleMenuOpen = (event, menuId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(menuId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  const handleSubmenuItemClick = (menuLabel, subItemLabel) => {
    handleMenuClose();
    onNavigate(`${menuLabel} > ${subItemLabel}`);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const handleHomeClick = () => {
    handleMenuClose();
    onNavigate("Home");
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMobileSubmenuClick = (menuId) => {
    setOpenMobileSubmenu(openMobileSubmenu === menuId ? null : menuId);
  };

  // Mobile drawer content
  const mobileDrawerContent = (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleHomeClick}>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontWeight: "bold",
                color: "primary.main",
              }}
            />
          </ListItemButton>
        </ListItem>

        {menuItems
          .filter((item) => item.hasSubmenu)
          .map((item) => (
            <React.Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleMobileSubmenuClick(item.id)}
                >
                  <ListItemText primary={item.label} />
                  {openMobileSubmenu === item.id ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse
                in={openMobileSubmenu === item.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {(
                    subMenuItems[item.id] || [
                      "Sub Item A",
                      "Sub Item B",
                      "Sub Item C",
                    ]
                  ).map((subItem, index) => (
                    <ListItemButton
                      key={index}
                      sx={{ pl: 4 }}
                      onClick={() =>
                        handleSubmenuItemClick(item.label, subItem)
                      }
                    >
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg, #2c5f7c 0%, #4a8db0 100%)",
        color: "white",
        boxShadow: "0 2px 12px rgba(44, 95, 124, 0.3)",
        borderRadius: 0,
        "& .MuiToolbar-root": {
          borderRadius: 0,
        },
      }}
    >
      <Toolbar sx={{ borderRadius: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleHomeClick}
        >
          <img
            src={isapLogo}
            alt="ISAP 2027 Logo"
            style={{
              height: "40px",
              marginRight: "12px",
              filter: "brightness(1.1)",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            ISAP2027
          </Typography>
        </Box>

        {/* Mobile menu button */}
        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {!isMobile && (
          <Box sx={{ display: "flex" }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={(event) => {
                  if (item.hasSubmenu) {
                    handleMenuOpen(event, item.id);
                  } else {
                    handleHomeClick();
                  }
                }}
                endIcon={item.hasSubmenu ? <KeyboardArrowDownIcon /> : null}
                aria-controls={
                  openMenuId === item.id ? `menu-${item.id}` : undefined
                }
                aria-haspopup="true"
                aria-expanded={openMenuId === item.id ? "true" : undefined}
                sx={{
                  marginLeft: 1,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.02)",
                    transition:
                      "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Desktop Submenus */}
        {!isMobile &&
          menuItems
            .filter((item) => item.hasSubmenu)
            .map((menuItem) => (
              <Menu
                key={`menu-${menuItem.id}`}
                id={`menu-${menuItem.id}`}
                anchorEl={anchorEl}
                open={openMenuId === menuItem.id}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": `button-${menuItem.id}`,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {(
                  subMenuItems[menuItem.id] || [
                    "Sub Item A",
                    "Sub Item B",
                    "Sub Item C",
                  ]
                ).map((subItem) => (
                  <MenuItem
                    key={subItem}
                    onClick={() =>
                      handleSubmenuItemClick(menuItem.label, subItem)
                    }
                  >
                    {subItem}
                  </MenuItem>
                ))}
              </Menu>
            ))}

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {mobileDrawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
