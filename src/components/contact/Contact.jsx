import React, { useEffect, useRef, useState } from "react";
import { TextField, Button, Typography, Box, Grid, FormControlLabel, Checkbox, Alert, Input, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import gsap from "gsap";
import * as emailjs from "emailjs-com";

const ContactComponent = ({ isPage = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: "",
    agree: false,
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    services: "",
    agree: "",
  });

  // Estado para controlar si se ha intentado enviar el formulario
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const servicesList = ["Estribos a Medida", "Barras Lisas", "Barras Conformadas", "Mallas Electrosoldadas", "Otros Productos"];
  const budgetOptions = ["0-5K", "5-10K", "10-20K", "20-40K", "Mayor a 40K"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Actualizar los datos del formulario
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Si el campo ha sido editado y hay errores, validar en tiempo real
    if (submitted) {
      validateField(name, type === "checkbox" ? checked : value);
    }
  };

  const handleServiceSelect = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    
    setFormData((prev) => ({
      ...prev,
      services: updatedServices,
    }));

    // Validar servicios si ya se intentó enviar el formulario
    if (submitted) {
      validateField('services', updatedServices);
    }
  };

  // Función para validar un campo específico
  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        newErrors.name = value.trim() === "" ? "El nombre es requerido" : "";
        break;
      case 'email':
        if (value.trim() === "") {
          newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Email inválido";
        } else {
          newErrors.email = "";
        }
        break;
      case 'services':
        newErrors.services = value.length === 0 ? "Seleccione al menos un servicio" : "";
        break;
      case 'agree':
        newErrors.agree = !value ? "Debe aceptar el procesamiento de datos" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return newErrors[fieldName] === "";
  };

  // Función para validar todo el formulario
  const validateForm = () => {
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const servicesValid = validateField('services', formData.services);
    const agreeValid = validateField('agree', formData.agree);

    return nameValid && emailValid && servicesValid && agreeValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      try {
        const templateParams = {
          from_name: formData.email,
          user_name: formData.name,
          company: formData.company,
          to_name: "Dear",
          services: formData.services,
          budget: formData.budget,
          message: formData.message,
          agree: formData.agree,
        };

        emailjs
          .send(
            "service_ybabvup",
            "template_w6xty5u",
            templateParams,
            "L6N1Xu8IVjNmQXfKD"
          )
          .then(
            (result) => {
              console.log(result.text);
              setSuccess(true);
              setFormData({ name: "", email: "", company: "", services: [], budget: "", message: "", agree: false });
              setSubmitted(false); // Resetear el estado de envío
            },
            (error) => {
              console.log(error.text);
              console.error("Error submitting form:", error);
            }
          );
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form has validation errors");
    }
  };

  useEffect(() => {
    // Apply animation on all screen sizes
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(formRef.current, { y: "0" }, { y: isMobile ? "50px" : isTablet ? "150px" : "180px", duration: 1.5, ease: "power3.out" });
  }, [isMobile, isTablet]);

  const redIntensity = "#EE2737";
  const errorColor = "#f44336";

  // Calculate responsive font size for the heading
  const getHeadingFontSize = () => {
    if (isMobile) return "60px";
    if (isTablet) return "80px";
    return "120px";
  };

  return (
    <Box 
      paddingBottom={isMobile ? "70px" : "100px"}
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%"
      }}
    >
      <Box 
        position="absolute" 
        zIndex={0}
        sx={{
          top: isMobile ? "2%" : "10%",
          left: 0,
          width: "100%",
          textAlign: isMobile ? "center" : "left",
          paddingLeft: isMobile ? 0 : "20px"
        }}
      >
       <Typography 
        variant="h2" 
        fontSize={getHeadingFontSize()} 
        fontFamily="'Archivo', sans-serif" 
        fontWeight={400} 
        color="#fff"
      >
          Contacto
        </Typography>
      </Box>

      <Box
        ref={formRef}
        sx={{
          width: "100%",
          maxWidth: "100vw",
          color: "#fff",
          p: 0,
          borderRadius: 0,
          boxShadow: 0,
          bgcolor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "end",
          justifyContent: "space-between",
          alignContent: "center",
          marginTop: isMobile ? "120px" : isTablet ? "100px" : "120px",
        }}
      >
        {success && 
          <Alert 
            severity="success"
            sx={{
              width: isMobile ? "90%" : "75%",
              margin: "0 auto"
            }}
          >
            ¡Gracias! Tu solicitud ha sido enviada correctamente.
          </Alert>
        }
        
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          padding={isMobile ? "30px 0" : "50px 0"} 
          sx={{ 
            width: isMobile ? "95%" : isTablet ? "85%" : "75%",
            margin: isMobile ? "0 auto" : "0",
            position: "relative",
            zIndex: 2,
            paddingBottom: isMobile ? "50px" : "30px"
          }}
        >
          <Grid 
            container
            padding={isMobile ? "20px" : "40px"} 
            display="flex" 
            flexDirection="column" 
            alignItems="start" 
            spacing={isMobile ? 1 : 2}
          >
            <Grid item xs={12} paddingTop="20px">
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                NOMBRE
              </Typography>
            </Grid>
            
            <Grid item xs={12} width={isMobile ? "100%" : "90%"} padding="10px 0">
              <Input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                sx={{
                  width: "100%",
                  color: errors.name ? errorColor : "#991923",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 },
                  "&:before": { borderBottom: `1px solid ${errors.name ? errorColor : "#d3d3d3"}` },
                  "&:hover:before": { borderBottom: errors.name ? errorColor : redIntensity },
                  "&:after": { borderBottom: `2px solid ${errors.name ? errorColor : "#991923"}` },
                }}
              />
              {errors.name && (
                <FormHelperText error={true} sx={{ marginLeft: "3px", fontWeight: "500" }}>
                  {errors.name}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} paddingTop="20px">
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                EMAIL
              </Typography>
            </Grid>
            
            <Grid item xs={12} width={isMobile ? "100%" : "90%"} padding="10px 0">
              <Input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                sx={{
                  width: "100%",
                  color: errors.email ? errorColor : "#991923",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 },
                  "&:before": { borderBottom: `1px solid ${errors.email ? errorColor : "#d3d3d3"}` },
                  "&:hover:before": { borderBottom: errors.email ? errorColor : redIntensity },
                  "&:after": { borderBottom: `2px solid ${errors.email ? errorColor : "#991923"}` },
                }}
              />
              {errors.email && (
                <FormHelperText error={true} sx={{ marginLeft: "3px", fontWeight: "500" }}>
                  {errors.email}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} paddingTop="20px">
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                EMPRESA
              </Typography>
            </Grid>
            
            <Grid item xs={12} width={isMobile ? "100%" : "90%"} padding="10px 0">
              <Input
                type="text"
                placeholder="Empresa (Opcional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disableUnderline={false}
                sx={{
                  width: "100%",
                  color: "#991923",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 },
                  "&:before": { borderBottom: "1px solid #d3d3d3" },
                  "&:hover:before": { borderBottom: redIntensity },
                  "&:after": { borderBottom: "2px solid #991923" },
                }}
              />
            </Grid>
            
            <Grid item xs={12} paddingTop="20px">
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                PRODUCTOS Y SERVICIOS
              </Typography>
            </Grid>
            
            <Grid 
              item 
              xs={12} 
              width={isMobile ? "100%" : "90%"} 
              padding="10px 0" 
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: isMobile ? "center" : "flex-start"
              }}
            >
              {servicesList.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <Button
                    key={service}
                    variant={isSelected ? "contained" : "outlined"}
                    onClick={() => handleServiceSelect(service)}
                    sx={{
                      m: 0.5,
                      borderRadius: "5px",
                      color: "#fff",
                      borderColor: errors.services && !isSelected ? errorColor : "#fff",
                      bgcolor: isSelected ? "#991923" : "transparent",
                      "&:hover": {
                        bgcolor: redIntensity,
                        color: "#fff",
                      },
                      fontSize: isMobile ? "0.7rem" : "0.875rem",
                      padding: isMobile ? "3px 8px" : "6px 16px"
                    }}
                  >
                    {service}
                  </Button>
                );
              })}
              {errors.services && (
                <FormHelperText error={true} sx={{ width: "100%", textAlign: "left", marginLeft: "8px", fontWeight: "500" }}>
                  {errors.services}
                </FormHelperText>
              )}
            </Grid>
            
            <Grid item xs={12} paddingTop="20px">
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                MENSAJE
              </Typography>
            </Grid>
            
            <Grid item xs={12} width={isMobile ? "100%" : "90%"} padding="10px 0">
              <Input
                type="text"
                placeholder={isMobile ? "¿Cuáles son los objetivos de tu proyecto? (Opcional)" : "¿Cuáles son los objetivos de tu proyecto, requisitos o plazo específico...? (Opcional)"}
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{
                  width: "100%",
                  color: "#991923",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 },
                  "&:before": { borderBottom: "1px solid #d3d3d3" },
                  "&:hover:before": { borderBottom: redIntensity },
                  "&:after": { borderBottom: "2px solid #991923" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    sx={{
                      color: errors.agree ? errorColor : redIntensity,
                      "& .MuiSvgIcon-root": { color: errors.agree ? errorColor : "#fff" },
                      "& .MuiCheckbox.Mui-checked": { color: errors.agree ? errorColor : redIntensity },
                    }}
                  />
                }
                label={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: errors.agree ? errorColor : "#fff",
                      fontSize: isMobile ? "0.75rem" : "0.875rem" 
                    }}
                  >
                    Acepto el procesamiento de datos personales
                  </Typography>
                }
              />
              {errors.agree && (
                <FormHelperText error={true} sx={{ marginLeft: "32px", fontWeight: "500" }}>
                  {errors.agree}
                </FormHelperText>
              )}
            </Grid>

            <Grid 
              item 
              xs={12} 
              sx={{ 
                textAlign: "left",
                marginTop: "20px",
                marginBottom: isMobile ? "30px" : "20px",
                position: "relative",
                zIndex: 5
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "auto",
                  borderRadius: "5px",
                  bgcolor: redIntensity,
                  color: "#fff",
                  "&:hover": { bgcolor: redIntensity, color: "#fff" },
                  padding: isMobile ? "5px 15px" : "6px 20px",
                  textTransform: "none",
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  position: "relative",
                  zIndex: 10
                }}
              >
                Enviar Solicitud
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;