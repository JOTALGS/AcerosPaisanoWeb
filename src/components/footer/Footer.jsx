import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Colores del tema industrial
  const COLORS = {
    background: "#0B0B0B",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.5)",
    accent: "#DC543E",
    hover: "#DC543E",
  };

  // Estilo monoespaciado para textos técnicos
  const monoStyle = {
    fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    lineHeight: 1.8,
    color: COLORS.textMuted,
  };

  // Estilo para títulos de sección
  const headingStyle = {
    color: COLORS.text,
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    mb: 3,
    fontFamily: "'Inter', sans-serif",
  };

  // Componente de enlace con flecha
  const NavLink = ({ to, children }) => (
    <Box
      component={Link}
      to={to}
      sx={{
        display: "flex",
        alignItems: "center",
        color: COLORS.text,
        textDecoration: "none",
        mb: 2,
        fontSize: "0.95rem",
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease",
        "&:hover": {
          color: COLORS.hover,
          transform: "translateX(4px)",
        },
      }}
    >
      <Box component="span" sx={{ mr: 1.5, fontSize: "0.8rem", color: COLORS.textMuted }}>
        ↳
      </Box>
      {children}
    </Box>
  );

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: COLORS.background,
        borderRadius: "20px",
        mx: { xs: 2, md: 3 },
        mb: { xs: 2, md: 3 },
        overflow: "hidden",
        position: "relative",
        // Grain effect sutil
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply',
        },
      }}
    >
      {/* Sección de Contacto - Texto blanco sobre negro */}
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          px: { xs: 4, md: 8, lg: 10 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: COLORS.text,
                mb: 1,
              }}
            >
              Ponete en contacto
            </Typography>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: COLORS.text,
              }}
            >
              Para aprender más.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: COLORS.textMuted,
                    mb: 1,
                  }}
                >
                  Teléfono
                </Typography>
                <Typography
                  component="a"
                  href="tel:+59823650000"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: COLORS.text,
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: COLORS.hover,
                    },
                  }}
                >
                  +598 2365 0000
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: COLORS.textMuted,
                    mb: 1,
                  }}
                >
                  Consultas Generales
                </Typography>
                <Typography
                  component="a"
                  href="mailto:info@acerospaisano.com.uy"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: COLORS.text,
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: COLORS.hover,
                    },
                  }}
                >
                  info@aceros.uy
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: COLORS.textMuted,
                    mb: 1,
                    mt: 3,
                  }}
                >
                  Prensa
                </Typography>
                <Typography
                  component="a"
                  href="mailto:press@acerospaisano.com.uy"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: COLORS.text,
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: COLORS.hover,
                    },
                  }}
                >
                  press@aceros.uy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          p: { xs: 4, md: 8, lg: 10 },
          pb: { xs: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Logo Column - Video Liquid Logo */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              {/* Video Liquid Logo */}
              <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  width: { xs: "140px", md: "180px" },
                  height: "auto",
                  opacity: 0.9,
                  mixBlendMode: 'screen',
                  filter: 'contrast(1.2) brightness(0.9)',
                  display: "block",
                  mb: 4,
                }}
              >
                <source src="/videos/Liquidlogo.mp4" type="video/mp4" />
              </Box>
            </Box>
          </Grid>

          {/* Navigation Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={headingStyle}>Navegación</Typography>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>

            {/* Forjado en Uruguay */}
            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg"
                  alt="Uruguay"
                  style={{
                    width: '20px',
                    height: 'auto',
                    opacity: 0.8,
                  }}
                />
                <Typography
                  sx={{
                    ...monoStyle,
                    fontSize: "0.65rem",
                  }}
                >
                  Forjado en Uruguay. Para Uruguay.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Products Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={headingStyle}>
              Productos Principales
            </Typography>
            <NavLink to="/productos/barras-tratadas">Barras de Acero Tratadas</NavLink>
            <NavLink to="/productos/perfiles">Perfiles Estructurales</NavLink>
            <NavLink to="/productos/mallas-electrosoldadas">Mallas Electrosoldadas</NavLink>
            <NavLink to="/productos/corte-doblado">Corte y Doblado CNC</NavLink>
            <NavLink to="/productos/vigas">Vigas de Alta Resistencia</NavLink>

            {/* Dirección con mapa */}
            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                position: "relative",
                cursor: "help",
                "&:hover .map-tooltip": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0) scale(1)",
                },
              }}
            >
              <Typography sx={{ ...monoStyle, fontSize: "0.65rem", mb: 0.5 }}>
                ACEROS PAISANO HQ
              </Typography>
              <Typography sx={{ ...monoStyle, fontSize: "0.65rem", color: COLORS.text }}>
                RUTA 5 KM 25.500
              </Typography>
              <Typography sx={{ ...monoStyle, fontSize: "0.65rem", color: COLORS.text }}>
                LAS PIEDRAS, CANELONES
              </Typography>
              <Typography sx={{ ...monoStyle, fontSize: "0.65rem", color: COLORS.text }}>
                URUGUAY 90200
              </Typography>

              {/* Tooltip con mapa */}
              <Box
                className="map-tooltip"
                sx={{
                  position: "absolute",
                  bottom: "120%",
                  left: 0,
                  width: "280px",
                  height: "200px",
                  bgcolor: "#111",
                  borderRadius: "8px",
                  overflow: "hidden",
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translateY(10px) scale(0.95)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  zIndex: 1000,
                  pointerEvents: "none",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.640175301675!2d-56.209438423302966!3d-34.71421366337666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d2e207027085%3A0x5745037081900058!2sRuta%205%20Km%2025.500!5e0!3m2!1ses!2suy!4v1708090000000!5m2!1ses!2suy"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Aceros Paisano"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Bar - Separado del grid principal */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          p: { xs: 3, md: 4 },
          px: { xs: 4, md: 8, lg: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ ...monoStyle, fontSize: "0.65rem" }}>
            ©2026 Aceros Paisano S.A.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Typography
              component={Link}
              to="/privacidad"
              sx={{
                ...monoStyle,
                fontSize: "0.65rem",
                textDecoration: "none",
                "&:hover": { color: COLORS.text },
              }}
            >
              Política de Privacidad
            </Typography>
            <Typography
              component={Link}
              to="/terminos"
              sx={{
                ...monoStyle,
                fontSize: "0.65rem",
                textDecoration: "none",
                "&:hover": { color: COLORS.text },
              }}
            >
              Términos de Uso
            </Typography>
            <Typography
              component={Link}
              to="/licencia"
              sx={{
                ...monoStyle,
                fontSize: "0.65rem",
                textDecoration: "none",
                "&:hover": { color: COLORS.text },
              }}
            >
              Acuerdo de Licencia
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;