"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About
            </Button>
            <Button color="inherit" component={Link} href="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} href="/contact">
              Contact
            </Button>
          </Box>

          <IconButton color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>

          <Button
            component={Link}
            href="/signin"
            sx={{
              color: '#666',
              backgroundColor: 'transparent',
              borderRadius: 0,
              border: 0,
              fontWeight: 'bold',
              mx: 1,
              '&:hover': {
                backgroundColor: '#f2f2f2',
              },
            }}
          >
            Sign In
          </Button>

          <Button
            component={Link}
            href="/signup"
            sx={{
              color: '#fff',
              backgroundColor: '#4caf50',
              borderRadius: 0,
              border: 0,
              fontWeight: 'bold',
              mx: 1,
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {searchOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '97px',
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
            padding: '15px',
          }}
        >
          <TextField
            label="Search..."
            variant="outlined"
            sx={{
              width: '70%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4caf50',
                  borderWidth: '2px',
                },
                '&:hover fieldset': {
                  borderColor: '#45a049',
                  borderWidth: '2px',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4caf50',
                  borderWidth: '2px',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#4caf50' }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: '#4caf50',
              color: '#fff',
              fontWeight: 'bold',
              height: '55px', 
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            SEARCH
          </Button>
        </Box>
      )}
    </>
  );
}
