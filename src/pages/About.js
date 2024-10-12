"use client";

import React from "react";
import { Box, Typography, Container, Card, CardContent, Grid, Button } from "@mui/material";
import Header from '../components/Header';
import Image from 'next/image';

export default function About() {
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
        <Container maxWidth="lg">
          
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
            About Us
          </Typography>

          
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "#666",
              fontSize: "18px",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Welcome to our website! We are a company dedicated to providing top-quality services
            to our clients. Our team is passionate about innovation and customer satisfaction.
            Whether you need digital solutions, marketing, or product development, we are here
            to help you achieve your goals. Our mission is to empower your business with 
            cutting-edge technology and strategies.
          </Typography>

          
          <Grid container spacing={4} sx={{ marginTop: "40px" }}>
            
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#4caf50", fontWeight: "bold" }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: "10px", color: "#666" }}
                  >
                    Our mission is to help businesses grow and succeed by offering 
                    innovative digital solutions tailored to their needs. We strive to be at the forefront
                    of technology and innovation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#4caf50", fontWeight: "bold" }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: "10px", color: "#666" }}
                  >
                    We envision a world where businesses of all sizes can access powerful 
                    digital tools and strategies to excel in their respective industries.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

         
          <Box
            sx={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/team.jpg" 
              alt="Our Team"
              width={800}
              height={450}
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Box
            sx={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
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
              Learn More About Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
