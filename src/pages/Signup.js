import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Divider, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
    } else {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: 'url(/background.jpg)', // Arka plan resmi ekleyin
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Başlık ve Hoş Geldiniz Mesajı */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our Community!
        </Typography>
        <Typography variant="subtitle1">
          Create an account to enjoy all the features.
        </Typography>
      </Box>

      {/* Form Alanları */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Hafif şeffaf bir beyaz arka plan
          borderRadius: '8px',
          padding: '40px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleChange}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            width: '100%',
            height: '50px',
            marginBottom: '20px',
            '&:hover': {
              backgroundColor: '#45a049',
            },
          }}
        >
          Sign Up
        </Button>

        <Divider sx={{ marginY: '20px' }}>Or Sign Up with</Divider>

        {/* Sosyal Medya Butonları */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
          <IconButton sx={{ color: '#db4437' }}>
            <GoogleIcon />
          </IconButton>
          <IconButton sx={{ color: '#3b5998' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#1da1f2' }}>
            <TwitterIcon />
          </IconButton>
        </Box>

        {/* Giriş Linki */}
        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <a href="/signin" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign In
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
