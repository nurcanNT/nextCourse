"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form verilerinin güncellenmesi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
    // Local storage'a verileri kaydet
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    // Form verilerini sıfırla (isteğe bağlı)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Message sent!'); 
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      minHeight="100%" 
    >
      <Header />
      <Box
        sx={{
          marginTop: "100px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container maxWidth="md" sx={{paddingBottom: '100px' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#4caf50",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "#666",
              fontSize: "18px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
          </Typography>

          <Box 
            component="form" 
            noValidate 
            autoComplete="off" 
            sx={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit} 
          >
            <TextField
              label="Your Name"
              variant="outlined"
              required
              name="name" 
              value={formData.name}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              type="email"
              required
              name="email" 
              value={formData.email}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              name="message" 
              value={formData.message}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#4caf50",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "10px 20px",
                '&:hover': {
                  backgroundColor: "#388e3c",
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}
