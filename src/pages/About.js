"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Header from '../components/Header';

export default function About() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <Header />
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our website! We are a company dedicated to providing top-quality services 
        to our clients. Our team is passionate about innovation and customer satisfaction.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you need digital solutions, marketing, or product development, we are here 
        to help you achieve your goals. Our mission is to empower your business with cutting-edge 
        technology and strategies.
      </Typography>
    </Box>
  );
}
