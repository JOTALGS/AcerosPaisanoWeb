import React, { useEffect, useRef, useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, FormControlLabel, Checkbox, Alert, Input } from "@mui/material";
import gsap from "gsap";

const ContactComponent = ({ isPage = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: "",
    agree: false,
  });
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const servicesList = ["Estribos a Medida", "Barras Lisas", "Barras Conformadas", "Mallas Electrosoldadas", "Otros Productos"];
  const budgetOptions = ["0-5K", "5-10K", "10-20K", "20-40K", "Mayor a 40K"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/moqgzovg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", company: "", services: [], budget: "", message: "", agree: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(formRef.current, { y: "0" }, { y: "180px", duration: 1.5, ease: "power3.out" });
  }, []);

  const redIntensity = "#EE2737";

  return (
    <Box paddingBottom="100px">
      <Box position="absolute" zIndex={0}>
        <Typography variant="h2" fontSize="120px" fontFamily={"Outfit"} fontWeight={300} color="#fff">
          Contáctanos
        </Typography>
      </Box>

      <Box
        ref={formRef}
        width="100vw"
        sx={{
          color: "#fff",
          p: 0,
          borderRadius: 0,
          boxShadow: 0,
          bgcolor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {success && <Alert severity="success">Thank you! Your request has been sent successfully.</Alert>}
        <Box position="absolute" top="12%" left="3%" zIndex={-1}>
          <Typography variant="h2" fontSize="20px" fontFamily={"Bona Nova SC"} color="#fff">
            (CONTACTO)
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} padding="50px 0" sx={{ width: "75%" }}>
          <Grid padding="40px" display="flex" flexDirection="column" alignItems="start" spacing={2}>
            <Grid paddingTop="20px" xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                NOMBRE
              </Typography>
            </Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
              <Input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
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

            <Grid paddingTop="20px" xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                EMAIL
              </Typography>
            </Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
              <Input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
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

            <Grid paddingTop="20px" xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                EMPRESA
              </Typography>
            </Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
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
            <Grid paddingTop="20px" xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                PRODUCTOS Y SERVICIOS
              </Typography>
            </Grid>
            <Grid width="90%" padding="10px 0" display="flex" gap={1} xs={12}>
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
                      borderColor: "#fff",
                      bgcolor: isSelected ? "#991923" : "transparent", // Set background color when outlined
                      "&:hover": {
                        bgcolor: redIntensity,
                        color: "#fff",
                      },
                    }}
                  >
                    {service}
                  </Button>
                );
              })}
            </Grid>
            <Grid paddingTop="20px" xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                MENSAJE
              </Typography>
            </Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
              <Input
                type="text"
                placeholder="¿Cuáles son los objetivos de tu proyecto, requisitos o plazo específico...? (Opcional)"
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
                      color: redIntensity,
                      "& .MuiSvgIcon-root": { color: "#fff" },
                      "& .MuiCheckbox.Mui-checked": { color: redIntensity },
                    }}
                  />
                }
                label="Acepto el procesamiento de datos personales"
                sx={{ color: "#fff" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "left" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "auto",
                  borderRadius: "5px",
                  bgcolor: redIntensity,
                  color: "#fff",
                  "&:hover": { bgcolor: redIntensity, color: "#fff" },
                  padding: "6px 20px",
                  textTransform: "none",
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
