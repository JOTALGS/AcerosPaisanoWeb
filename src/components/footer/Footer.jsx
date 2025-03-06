import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  
  const customTheme = createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
  });

  const baseTextStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 400,
    transition: "color 0.3s ease",
    lineHeight: 1.8,
    display: "block",
    "&:hover": {
      color: "#ff0000",
    }
  };

  const StyledLink = ({ to, children }) => (
    <Box
      component={Link}
      to={to}
      sx={baseTextStyle}
    >
      {children}
    </Box>
  );

  const StyledExternalLink = ({ href, children }) => (
    <Box
      component="a"
      href={href}
      sx={baseTextStyle}
    >
      {children}
    </Box>
  );

  const headingStyle = {
    color: "#646464",
    fontSize: "1.2rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    marginBottom: "8px"
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        padding: isMobile ? "30px 20px 5px" : isTablet ? "40px 30px 5px" : "20px 20px 0px",
        overflow: "hidden",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& *": {
          fontFamily: "'Inter', sans-serif"
        }
      }}
    >
      {/* Grid Principal */}
      <Grid 
        container 
        sx={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "30vw 1.2fr 1.2fr 1.2fr",
          gap: isMobile ? "40px" : isTablet ? "40px" : "5vh",
          marginTop: "40px",
          marginBottom: isMobile ? "30px" : "40px",
          padding: "0 20px",
          alignItems: "start",
          textAlign: isMobile ? "center" : "left"
        }}
      >
        {/* Logo (video) */}
        <Box 
          sx={{
            width: isMobile ? "200px" : isTablet ? "400px" : "80%",
            height: isMobile ? "300px" : isTablet ? "500px" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: isMobile ? "0 auto" : "0"
          }}
        >
          <Box 
            component="video" 
            autoPlay 
            loop 
            muted 
            playsInline
            sx={{
              width: "90%",
              height: "auto",
              objectFit: "contain",
              opacity: 0.3
            }}
          >
            <source src="/videos/Liquidlogo.mp4" type="video/mp4" />
            Tu navegador no admite videos.
          </Box>
        </Box>

        {/* Columna 1: Descubrir */}
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: isMobile ? "center" : "flex-start" // Centrar en móvil
          }}
        >
          <Typography variant="h3" sx={headingStyle}>
            DESCUBRÍ
          </Typography>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: isMobile ? "center" : "flex-start" // Centrar en móvil
            }}
          >
            <StyledLink to="/#/">Inicio</StyledLink>
            <StyledLink to="/catalogue">Productos</StyledLink>
            <Box
              component="a"
              href="https://www.google.com/maps/place/Acerospaisano+S.A./@-34.7006875,-56.2419389,17z/data=!4m14!1m7!3m6!1s0x95a1cd0dee1b74d7:0x9d3355e7c66adcd2!2sAcerospaisano+S.A.!8m2!3d-34.7006919!4d-56.239364!16s%2Fg%2F11hd1s7_fc!3m5!1s0x95a1cd0dee1b74d7:0x9d3355e7c66adcd2!8m2!3d-34.7006919!4d-56.239364!16s%2Fg%2F11hd1s7_fc?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              sx={baseTextStyle}
            >
              Encuéntranos
            </Box>
            <StyledLink to="/about-us">Sobre nosotros</StyledLink>
            <StyledLink to="/contact">Contáctanos</StyledLink>
          </Box>
        </Box>

        {/* Columna 2: Contacto */}
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: isMobile ? "center" : "flex-start" // Centrar en móvil
          }}
        >
          <Typography variant="h3" sx={headingStyle}>
            CONTACTO
          </Typography>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: isMobile ? "center" : "flex-start" // Centrar en móvil
            }}
          >
            <StyledExternalLink href="tel:2365 0000">
              2365 0000
            </StyledExternalLink>
            <StyledExternalLink href="mailto:ventas@acerospaisano.com.uy">
              ventas@acerospaisano.com.uy
            </StyledExternalLink>
          </Box>
        </Box>

        {/* Columna 3: Encuéntranos */}
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifySelf: isTablet ? "start" : "auto",
            alignItems: isMobile ? "center" : "flex-start" // Centrar en móvil
          }}
        >
          <Typography variant="h3" sx={headingStyle}>
            ENCUÉNTRANOS
          </Typography>
          <Box 
            sx={{
              marginBottom: "10px",
              textAlign: isMobile ? "center" : "left" // Centrar en móvil
            }}
          >
            <Typography 
              sx={{
                fontWeight: 400,
                color: "#ffffff",
                fontSize: "0.9rem",
                lineHeight: 1.8
              }}
            >
              Aceros Paisano S.A.
            </Typography>
            <Box 
              className="address-tooltip-container"
              sx={{
                position: "relative",
                cursor: "pointer",
                "& .map-tooltip": {
                  display: "none"
                },
                "&:hover .map-tooltip": {
                  display: "block"
                }
              }}
            >
              <Box className="address-text">
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    lineHeight: 1.8
                  }}
                >
                  Ruta 5 KM 25.500
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    lineHeight: 1.8
                  }}
                >
                  Canelones, Las Piedras
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    lineHeight: 1.8
                  }}
                >
                  Uruguay
                </Typography>
              </Box>
              <Box 
                className="map-tooltip"
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: isMobile ? "50%" : "auto",
                  right: isMobile ? "auto" : "0",
                  transform: isMobile ? "translateX(-50%)" : "translateX(-20%)",
                  background: "#000",
                  padding: "15px",
                  borderRadius: "3px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  zIndex: 1000,
                  width: isMobile ? "300px" : isTablet ? "450px" : "500px",
                  marginTop: "10px",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "-8px",
                    left: isMobile ? "50%" : "80%",
                    transform: isMobile ? "translateX(-50%)" : "none",
                    borderWidth: "0 8px 8px 8px",
                    borderStyle: "solid",
                    borderColor: "transparent transparent #000 transparent"
                  }
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1779293687914!2d-56.24193892425555!3d-34.70069187291963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1cd0dee1b74d7%3A0x9d3355e7c66adcd2!2sAcerospaisano%20S.A.!5e0!3m2!1ses!2suy!4v1741197854397!5m2!1ses!2suy"
                  width="100%"
                  height={isMobile ? "250px" : "350px"}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sx={{
                    border: 0,
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease",
                    aspectRatio: "1/1",
                    "&:hover": {
                      filter: "grayscale(0%)"
                    }
                  }}
                />
                <Box
                  component="a"
                  href="https://www.google.com/maps/place/Acerospaisano+S.A./@-34.7006875,-56.2419389,17z/data=!4m14!1m7!3m6!1s0x95a1cd0dee1b74d7:0x9d3355e7c66adcd2!2sAcerospaisano+S.A.!8m2!3d-34.7006919!4d-56.239364!16s%2Fg%2F11hd1s7_fc!3m5!1s0x95a1cd0dee1b74d7:0x9d3355e7c66adcd2!8m2!3d-34.7006919!4d-56.239364!16s%2Fg%2F11hd1s7_fc?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "block",
                    boxSizing: "border-box",
                    textAlign: "center",
                    padding: "10px",
                    marginTop: "10px",
                    width: "100%",
                    background: "#333",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      background: "#444"
                    }
                  }}
                >
                  Ver en Google Maps
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px 5px",
          marginTop: isMobile ? "10px" : "20px",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "10px" : "0",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left" // Centrar en móvil
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px"
          }}
        >
          {/* Contenido opcional */}
        </Box>
      </Box>

      <Box>
        {/* Divider - Sin margen inferior */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "1px",
            backgroundColor: "#a1a0a0",
            margin: "0 20px",
            marginBottom: "0"
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 20px",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? "2px" : "0",
            textAlign: isMobile ? "center" : "left",
            paddingLeft: isMobile ? "20px" : isTablet ? "30px" : "20px",
            paddingRight: isMobile ? "20px" : isTablet ? "30px" : "20px",
            marginTop: "4px"
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.1rem"
            }}
          >
            ©2025 Aceros Paisano S.A.
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.1rem"
            }}
          >
            Todos los Derechos Reservados.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;