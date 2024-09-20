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

        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Button color="inherit" component={Link} href="/signin">
          Sign In
        </Button>
        <Button color="inherit" component={Link} href="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
