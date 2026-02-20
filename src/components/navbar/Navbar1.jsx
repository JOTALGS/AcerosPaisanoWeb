import React, { useState, useEffect, useRef } from "react";
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

  // ✅ medir altura real de la navbar para que el Drawer entre “apenas debajo”
  const appBarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(76);

  // ✅ lock scroll pro (incluye iOS) para que NO se vea nada atrás ni haya scroll
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (hidden) {
      const timeout = setTimeout(() => setDelayedHidden(true), 2000);
      return () => clearTimeout(timeout);
    } else {
      setDelayedHidden(false);
    }
  }, [hidden]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) setHidden(true);
      else setHidden(false);

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
    return () => document.head.removeChild(styleElement);
  }, []);

  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  // ✅ medir altura navbar (en mount, resize, y al abrir menú)
  useEffect(() => {
    const measure = () => {
      if (!appBarRef.current) return;
      const h = appBarRef.current.getBoundingClientRect().height;
      if (h && Math.abs(h - navHeight) > 1) setNavHeight(Math.round(h));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, menuOpen]);

  // ✅ lock scroll (no scroll, no overscroll “verde”, no ver fondo)
  useEffect(() => {
    const html = document.documentElement;

    if (menuOpen) {
      scrollYRef.current = window.scrollY;

      html.style.overscrollBehavior = "none";
      html.style.backgroundColor = "#000";
      document.body.style.backgroundColor = "#000";

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = scrollYRef.current;

      html.style.overscrollBehavior = "";
      html.style.backgroundColor = "";
      document.body.style.backgroundColor = "";

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, y);
    }
  }, [menuOpen]);

  // ✅ nav items correctos
  const navItems = [
    { title: "Inicio", path: "/" },
    { title: "Sobre nosotros", path: "/sobre-nosotros" },
    { title: "Productos", path: "/productos" },
    { title: "Contacto", path: "/contacto" },
  ];

  const handleNavClick = (path) => {
    window.scrollTo(0, 0);
    if (isMobile) toggleMenu();
  };

  return (
    <>
      <GlobalStyles
        styles={{
          '@import': 'url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Urbanist:wght@300;400;500;700&display=swap")',
          'button:focus, a:focus': { outline: 'none' },
          'a, button': { WebkitTapHighlightColor: 'transparent' }
        }}
      />
      
      {/* Wrapper original, pero cuando menuOpen: zIndex alto para que navbar quede arriba */}
      <Box
        sx={{
          position: "fixed",
          right: "auto",
          zIndex: menuOpen ? 2200 : (delayedHidden ? -1 : 100),
          width: "100vw",
          height: "100px"
        }}
      >
        <AppBar
          ref={appBarRef}
          position="fixed"
          sx={{
            right: "auto",
            width: "100vw",
            // ✅ márgenes simétricos (mobile/web)
            padding: isMobile ? "6px 16px" : "3px 23px",
            transition: "transform 0.4s ease-in-out, background-color 0.3s ease-in-out",
            transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
            backgroundColor: menuOpen ? "#000000" : "transparent",
            backdropFilter: menuOpen ? "none" : "blur(10px)",
            boxShadow: "none",
            zIndex: 2201,
          }}
        >
          {/* Toolbar sin padding extra para que quede igual a ambos lados */}
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}>
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
                sx={{ height: isMobile ? 40 : 40 }} 
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
                          "&:hover": { color: "white" }
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
                        "&:hover": { color: "white" }
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
                  '&:hover': { backgroundColor: 'transparent' }
                }}
              >
                <AnimatedMenuIcon isOpen={menuOpen} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* ✅ Menú: entra debajo de la navbar + NO bloquea clicks a la navbar */}
        <Drawer
          anchor="bottom"
          open={menuOpen}
          onClose={toggleMenu}
          hideBackdrop
          ModalProps={{
            keepMounted: true,
            disableScrollLock: true
          }}
          sx={{
            zIndex: 2190,
            // ✅ clave: el root del Drawer no captura clicks (deja clickeable la navbar)
            pointerEvents: "none",
            "& .MuiDrawer-paper": {
              pointerEvents: "auto"
            }
          }}
          PaperProps={{
            sx: { 
              width: "100%", 
              top: `${navHeight}px`,
              height: `calc(100vh - ${navHeight}px)`,
              backgroundColor: "#000000", 
              backgroundImage: "none",
              color: "white", 
              overflow: "hidden",
              overscrollBehavior: "none",
              WebkitTapHighlightColor: "transparent",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              boxShadow: "none",
              borderTop: "none",
              margin: 0,
            },
          }}
          transitionDuration={{ enter: 500, exit: 500 }}
          SlideProps={{ direction: "up" }}
        >
          <Box sx={{ 
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "12vh"
          }}>
            <List sx={{ width: "100%", padding: 0, margin: 0 }}>
              {navItems.map((item, index) => (
                <ListItem 
                  key={index}
                  sx={{
                    padding: "10px 0",
                    justifyContent: "flex-start",
                    width: "auto"
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
                          padding: 0,
                          minWidth: "auto",
                          justifyContent: "flex-start",
                          "&:hover": { backgroundColor: "transparent" }
                        }}
                      >
                        <Typography
                          fontFamily="Archivo"
                          fontWeight={500} // ✅ medium real
                          sx={{
                            fontSize: "clamp(26px, 7.2vw, 34px)", // ✅ más chica
                            letterSpacing: "-0.03em",
                            lineHeight: 0.98,
                            textTransform: "none",
                            textShadow: "none"
                          }}
                        >
                          {item.title}
                          {item.title === "Productos" && (
                            <sup style={{ fontSize: "14px", marginLeft: "6px" }}>6</sup>
                          )}
                        </Typography>
                      </Button>
                    }
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
