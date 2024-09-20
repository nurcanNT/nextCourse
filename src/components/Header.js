import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{  backgroundColor: '#fff',
        color: '#000',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center',  }}>
          <Button color="inherit" component={Link} href="/" sx={{fontWeight: 'bold'}}>
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about" sx={{fontWeight: 'bold'}}>
            About
          </Button>
          <Button color="inherit" component={Link} href="/services" sx={{fontWeight: 'bold'}}>
            Services
          </Button>
          <Button color="inherit" component={Link} href="/contact" sx={{fontWeight: 'bold'}}>
            Contact
          </Button>
        </Box>

        <IconButton color="inherit">
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
  );
}
