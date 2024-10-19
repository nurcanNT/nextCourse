import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Divider, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
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

    if (name === 'password' && !validatePassword(value)) {
      newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character';
    }

    if (name === 'confirmPassword' && value !== formData.password) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formValid = false;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character';
      formValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
      formValid = false;
    }

    if (formValid) {
      console.log('Form Submitted', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
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
          Welcome to Our Community!
        </Typography>
        <Typography variant="subtitle1">
          Create an account to enjoy all the features.
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
          onBlur={handleBlur} 
          sx={{ width: '100%', marginBottom: '20px' }}
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'} 
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur} 
          sx={{ width: '100%', marginBottom: '20px' }}
          required
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur} 
          sx={{ width: '100%', marginBottom: '20px' }}
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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

        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <a href="/SignIn" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign In
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
