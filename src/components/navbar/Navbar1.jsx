import React, { useState, useEffect } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Box, 
  Drawer,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemText,
  GlobalStyles
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const fontImportStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Urbanist:wght@300;400;500;700&display=swap');
`;

const AnimatedMenuIcon = ({ isOpen }) => (
  <Box sx={{ 
    width: '36px',
    height: '36px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Box sx={{ 
      width: '30px',
      height: '3px',
      backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
      position: 'absolute',
      transition: 'all 0.3s ease',
      transform: isOpen ? 'rotate(45deg)' : 'translateY(-6px)',
      boxShadow: isOpen ? '0 0 5px #FFFFFF' : 'none',
    }} />
    <Box sx={{ 
      width: '30px',
      height: '3px',
      backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
      position: 'absolute',
      transition: 'all 0.3s ease',
      transform: isOpen ? 'rotate(-45deg)' : 'translateY(6px)',
      boxShadow: isOpen ? '0 0 5px #FFFFFF' : 'none',
    }} />
  </Box>
);

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [delayedHidden, setDelayedHidden] = useState(hidden);

  useEffect(() => {
    if (hidden) {
      const timeout = setTimeout(() => {
        setDelayedHidden(true);
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      setDelayedHidden(false);
    }
  }, [hidden]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      
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
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(fontImportStyles));
    
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  useEffect(() => {
    if (menuOpen) {
      setHidden(false);
    }
  }, [menuOpen]);

  const navItems = [
    { title: "Inicio", path: "/" },
    { title: "Sobre Nosotros", path: "/sobre-nosotros" },
    { title: "Productos y Servicios", path: "/productos-y-servicios" },
    { title: "Contacto", path: "/contacto" },
  ];

  const handleNavClick = (path) => {
    window.scrollTo(0, 0);
    if (isMobile) {
      toggleMenu();
    }
  };

  return (
    <>
      <GlobalStyles
        styles={{
          '@import': 'url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Urbanist:wght@300;400;500;700&display=swap")',
          'button:focus, a:focus': {
            outline: 'none'
          },
          'a, button': {
            WebkitTapHighlightColor: 'transparent'
          }
        }}
      />
      
      <Box sx={{ position: "fixed", right: "auto", zIndex: delayedHidden ? -1 : 100, width: "100vw", height: "100px" }}>
        <AppBar
          position="fixed"
          sx={{
            right: "auto",
            width: "100vw",
            padding: isMobile ? "6px 8px" : "6px 16px",
            transition: "transform 0.4s ease-in-out, background-color 0.3s ease-in-out",
            transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
            backgroundColor: menuOpen ? "#000000" : "transparent",
            backdropFilter: menuOpen ? "none" : "blur(10px)",
            boxShadow: "none",
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: isMobile ? "0 8px" : "0 16px" }}>
            <Button 
              component={Link} 
              to="/" 
              onClick={() => {window.scrollTo(0, 0);}} 
              color="inherit"
              sx={{ padding: isMobile ? "4px" : "8px" }}
            >
              <Box 
                component="img" 
                src="/images/logo.png" 
                alt="Logo" 
                sx={{ height: isMobile ? 40 : 50 }} 
              />
            </Button>

            {!isMobile && (
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  width: isTablet ? "65%" : "45%",
                  flexWrap: isTablet ? "wrap" : "nowrap",
                }}
              >
                <Box 
                  sx={{ 
                    display: "flex", 
                    justifyContent: isTablet ? "space-around" : "space-between", 
                    width: isTablet ? "100%" : "70%",
                    mb: isTablet ? 1 : 0
                  }}
                >
                  {navItems.slice(0, 3).map((item, index) => (
                    <Button 
                      key={index}
                      component={Link} 
                      to={item.path} 
                      onClick={() => {window.scrollTo(0, 0);}} 
                      color="inherit" 
                      sx={{ 
                        textTransform: "none",
                        fontSize: isTablet ? "0.9rem" : "inherit"
                      }} 
                    >
                      <Typography 
                        fontSize={isTablet ? "1rem" : "1.2rem"} 
                        color="rgba(255, 255, 255, 0.75)"
                        sx={{
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "white"
                          }
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Button>
                  ))}
                </Box>

                {!isTablet && (
                  <Button 
                    component={Link} 
                    to="/contacto" 
                    onClick={() => {window.scrollTo(0, 0);}} 
                    color="inherit" 
                    sx={{ textTransform: "none" }} 
                  >
                    <Typography 
                      fontSize={"1.2rem"} 
                      color="rgba(255, 255, 255, 0.75)"
                      sx={{
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "white"
                        }
                      }}
                    >
                      Contacto
                    </Typography>
                  </Button>
                )}
              </Box>
            )}

            {isMobile && (
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu" 
                onClick={toggleMenu}
                sx={{ 
                  color: "white",
                  padding: 1,
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <AnimatedMenuIcon isOpen={menuOpen} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="bottom"
          open={menuOpen}
          onClose={toggleMenu}
          PaperProps={{
            sx: { 
              width: "100%", 
              height: "calc(100vh - 70px)",
              backgroundColor: "#000000", 
              color: "white", 
              overflow: "hidden", 
              backdropFilter: "none",
              WebkitTapHighlightColor: "transparent",
              top: "69px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              boxShadow: "none",
              borderTop: "none",
              margin: 0,
            },
          }}
          transitionDuration={{ enter: 500, exit: 500 }}
          SlideProps={{
            direction: "up"
          }}
          ModalProps={{
            BackdropProps: {
              invisible: true
            }
          }}
        >
          
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column",
            padding: "24px",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginTop: "0"
          }}>
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {navItems.map((item, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    padding: "12px 0",
                    borderBottom: "none",
                    justifyContent: "center",
                    textAlign: "center"
                  }}
                >
                  <ListItemText 
                    primary={
                      <Button
                        component={Link}
                        to={item.path}
                        color="inherit"
                        onClick={() => handleNavClick(item.path)}
                        sx={{ 
                          width: "auto",
                          justifyContent: "center",
                          padding: "6px 12px",
                          borderRadius: "0",
                          transition: "all 0.3s ease",
                          "&:active": {
                            backgroundColor: "transparent"
                          },
                          "&:hover": {
                            backgroundColor: "transparent"
                          }
                        }}
                      >
                        <Typography 
                          fontWeight={600}
                          fontFamily="Archivo"
                          fontSize={36}
                          color="#FFFFFF"
                          letterSpacing="0.05em"
                          sx={{
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                            textShadow: "0 0 5px rgba(255,255,255,0.5)",
                            "&:hover": {
                              color: "white",
                              textShadow: "0 0 8px rgba(255,255,255,0.8)"
                            }
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Button>
                    }
                    sx={{ width: "100%" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};