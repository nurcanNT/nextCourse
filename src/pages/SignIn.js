import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Divider } from '@mui/material';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'email' && !validateEmail(value)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (name === 'password' && value.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted', formData);
      
      router.push('/');
    } else {
      setErrors(newErrors);
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
        backgroundImage: 'url(/background.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="subtitle1">
          Sign in to continue
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '8px',
          padding: '40px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ width: '100%', marginBottom: '20px' }}
          required
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            fontWeight: 'bold',
            width: '100%',
            height: '50px',
            marginBottom: '20px',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Sign In
        </Button>

        <Divider sx={{ marginY: '20px' }}>Or</Divider>

        <Typography variant="body2" align="center">
          Don't have an account?{' '}
          <a href="/signup" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign Up
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
