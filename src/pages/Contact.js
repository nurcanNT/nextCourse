"use client";

import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
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
        <Container maxWidth="md">
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

          {/* İletişim Formu */}
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Your Name"
              variant="outlined"
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              type="email"
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
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
        <Footer/>
      </Box>
    </>
  );
}
