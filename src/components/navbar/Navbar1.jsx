import React, { useState, useEffect, useContext } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer } from "@mui/material";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(true); // Start with hidden true
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false);
    }, 1000);

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box sx={{ position: "fixed", right: "auto", zIndex: 1000, width: "100vw", height: "100px" }}>
      <AppBar
        position="fixed"
        sx={{
          right: "auto",
          width: "100vw",
          padding: "6px 16px",
          transition: "transform 0.4s ease-in-out, background-color 0.3s ease-in-out, all 0.3s ease-in-out",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button component={Link} to="/" onClick={() => {window.scrollTo(0, 0);}} color="inherit">
            <Box component="img" src="/images/logo.png" alt="Logo" sx={{ height: 50 }} />
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "45%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "55%" }}>
              <Button component={Link} to="/" onClick={() => {window.scrollTo(0, 0);}} color="inherit" sx={{ textTransform: "none" }} >
                <Typography fontSize={"1.2rem"} color="white">Inicio</Typography>
              </Button>
              <Button component={Link} to="/about-us" onClick={() => {window.scrollTo(0, 0);}} color="inherit" sx={{ textTransform: "none" }} >
                <Typography fontSize={"1.2rem"} color="white">Sobre Nosotros</Typography>
              </Button>
              <Button component={Link} to="/catalogue" onClick={() => {window.scrollTo(0, 0);}} color="inherit" sx={{ textTransform: "none" }} >
                <Typography fontSize={"1.2rem"} color="white">Productos</Typography>
              </Button>
            </Box>

            <Button component={Link} to="/contact" onClick={() => {window.scrollTo(0, 0);}} color="inherit" sx={{ textTransform: "none" }} >
              <Typography fontSize={"1.2rem"} color="white">Contact Us</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sliding Fullscreen Menu */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: { height: "100vh", width: "100%", backgroundColor: "navbar.main", color: "text.primary", overflow: "hidden", backdropFilter: "blur(20px)", },
        }}
        transitionDuration={{ enter: 500, exit: 500 }}
      >
        <div className="menu-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", }}>
          <Typography fontFamily="Bona Nova SC" fontWeight="bold" fontSize={60} variant="h3" gutterBottom>Menu</Typography>
          <Button component={Link} to="/" color="inherit" sx={{ fontSize: 20, marginBottom: 2 }} onClick={() => {toggleMenu();window.scrollTo(0, 0);}}><Typography fontWeight="bold" fontFamily="Bona Nova SC" fontSize={30}>Home</Typography></Button>
          <Button component={Link} to="/about" color="inherit" sx={{ fontSize: 20, marginBottom: 2 }} onClick={() => {toggleMenu();window.scrollTo(0, 0);}}><Typography fontWeight="bold" fontFamily="Bona Nova SC" fontSize={30}>About</Typography></Button>
          <Button component={Link} to="/contact" color="inherit" sx={{ fontSize: 20, marginBottom: 2 }} onClick={() => {toggleMenu();window.scrollTo(0, 0);}}><Typography fontWeight="bold" fontFamily="Bona Nova SC" fontSize={30}>Contact</Typography></Button>
        </div>
      </Drawer>
    </Box>
  );
};

