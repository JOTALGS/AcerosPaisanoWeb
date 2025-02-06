import React, { useEffect, useRef, useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, FormControlLabel, Checkbox, Alert, Input } from "@mui/material";
import gsap from "gsap";

const ContactComponent = ({ isPage=false }) => {
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
  const servicesList = ["Kitchen Remodeling", "Bathroom Renovation", "Whole-home Renovations", "Custom Closets", "Outdoor Living Spaces"];
  const budgetOptions = ["0-5K", "5-10K", "10-20K", "20-40K", "More than 40K"];

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

    tl.fromTo(
      formRef.current,
      { y: "0" }, 
      {
        y: "180px",
        duration: 1.5,
        ease: "power3.out",
      });

  }, []);

  return (
    <Box paddingBottom="60px">
      <Box position="absolute" zIndex={0}>
        <Typography variant="h2" fontSize="200px" fontFamily={"Bona Nova SC"} color="#fff">Contáctanos</Typography>
      </Box>

      <Box ref={formRef} width="100vw" sx={{ color: "#fff", p: 0, borderRadius: 0, boxShadow: 0, bgcolor: "#000", display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between", alignContent: "center" }}>
        {success && <Alert severity="success">Thank you! Your request has been sent successfully.</Alert>}
        <Box position="absolute" top="12%" left="3%" zIndex={-1}>
          <Typography variant="h2" fontSize="20px" fontFamily={"Bona Nova SC"} color="#fff">(CONTACT)</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} padding="50px 0" sx={{ width: "75%" }}>
          <Grid padding="40px" display="flex" flexDirection="column" alignItems="start" spacing={2}>
            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>YOUR NAME</Typography></Grid>
            <Grid width="90%" padding="10px 0" xs={12} >
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name} 
                onChange={handleChange}
                sx={{
                  width: "100%",
                  color: "text.primary",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 }, // Apply styles to textarea
                  "&:before": { borderBottom: "1px solid #d3d3d3" }, // Bottom border
                  "&:hover:before": { borderBottom: "1px solid #aaa" }, // Change border on hover
                }}
              />
            </Grid>
            
            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>YOUR EMAIL</Typography></Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email} 
                onChange={handleChange}
                sx={{
                  width: "100%",
                  color: "text.primary",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 }, // Apply styles to textarea
                  "&:before": { borderBottom: "1px solid #d3d3d3" }, // Bottom border
                  "&:hover:before": { borderBottom: "1px solid #aaa" }, // Change border on hover
                }}
              />
            </Grid>
            
            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>YOUR COMPANY NAME</Typography></Grid>
            <Grid width="90%" padding="10px 0" xs={12}>
              <Input
                type="text"
                placeholder="Company Name"
                name="company"
                value={formData.name} 
                onChange={handleChange}
                sx={{
                  width: "100%",
                  color: "text.primary",
                  input: { color: "#fff", borderRadius: 0 },
                  "& textarea": { color: "#fff", borderRadius: 0 }, // Apply styles to textarea
                  "&:before": { borderBottom: "1px solid #d3d3d3" }, // Bottom border
                  "&:hover:before": { borderBottom: "1px solid #aaa" }, // Change border on hover
                }}
              />
            </Grid>
            
            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>SERVICES</Typography></Grid>
            <Grid width="90%" padding="10px 0" display="flex" gap={1} xs={12}>
              {servicesList.map((service) => (
                <Button 
                  key={service} 
                  variant={formData.services.includes(service) ? "contained" : "outlined"} 
                  onClick={() => handleServiceSelect(service)} 
                  sx={{ 
                    m: 0.5, 
                    borderRadius: "5px", // Slightly rounded borders
                    color: "#fff", 
                    borderColor: "#fff", 
                    '&:hover': { bgcolor: "primary.main", color: "#fff" } 
                  }}>
                  {service}
                </Button>
              ))}
            </Grid>

            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>BUDGET IN USD</Typography></Grid>
            <Grid width="90%" padding="10px 0" display="flex" gap={1} xs={12}>
              {budgetOptions.map((option) => (
                <Button 
                  key={option} 
                  variant={formData.budget === option ? "contained" : "outlined"} 
                  onClick={() => setFormData({ ...formData, budget: option })} 
                  sx={{
                    borderRadius: "5px", // Slightly rounded borders
                    color: "#fff", 
                    borderColor: "#fff", 
                    '&:hover': { bgcolor: "primary.main", color: "#000" } 
                  }}>
                  {option}
                </Button>
              ))}
            </Grid>

            <Grid paddingTop="20px" xs={12}><Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>MESSAGE</Typography></Grid>
            <Grid width="90%" padding="10px 0" xs={12}>

              <Input
                type="text"
                placeholder="What are your project goals, requirements or specific timeline...(Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{
                  width: "100%",
                  color: "text.primary",
                  "& textarea": { color: "#fff", borderRadius: 0 }, // Apply styles to textarea
                  "&:before": { borderBottom: "1px solid #d3d3d3" }, // Bottom border
                  "&:hover:before": { borderBottom: "1px solid #aaa" }, // Change border on hover
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox name="agree" checked={formData.agree} onChange={handleChange} />} label="I agree with the collection and processing of my personal data." sx={{ color: "#fff" }} />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "left" }}> {/* Align to left */}
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  width: "auto", 
                  borderRadius: "5px", // Slightly rounded for Submit Request button
                  bgcolor: "primary.main", 
                  color: "#fff", 
                  "&:hover": { bgcolor: "accent.main", color: "#fff" },
                  padding: "6px 20px", // Smaller button
                  textTransform: "none", // Remove uppercase text
                }}>
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;
