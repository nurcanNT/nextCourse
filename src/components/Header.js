"use client";

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Box, TextField, InputAdornment, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null); // Kullanıcı bilgisi state'i
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Burada localStorage'den veya API'den kullanıcıyı alabilirsiniz
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    // Kullanıcıyı çıkış yaptırma işlemleri (ör. localStorage'dan temizleme)
    localStorage.removeItem('user');
    setUser(null);
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
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </IconButton>

          {/* Desktop Menu Links */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Link href="/" passHref>
                <Button sx={{ color: 'black' }} color="inherit">Home</Button>
              </Link>
              <Link href="/About">
                <Button sx={{ color: 'black' }} color="inherit">About</Button>
              </Link>
              <Link href="/Blog" passHref>
                <Button sx={{ color: 'black' }} color="inherit">Blog</Button>
              </Link>
              <Link href="/Contact">
                <Button sx={{ color: 'black' }} color="inherit">Contact</Button>
              </Link>
            </Box>
          )}

          {/* Kullanıcı durumu */}
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <Avatar sx={{ bgcolor: '#4caf50', mr: 1 }}>
                {user.name.charAt(0).toUpperCase()} {/* Kullanıcının baş harfi */}
              </Avatar>
              <Typography variant="body1" sx={{ mr: 2 }}>
                {user.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ backgroundColor: '#f44336' }}
              >
                Çıkış Yap
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              <Link href="/login" passHref>
                <Button sx={{ backgroundColor: '#4caf50',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },}}>Giriş Yap</Button>
              </Link>
              <Link href="/register" passHref>
                <Button sx={{ backgroundColor: '#4caf50',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },}}>Kayıt Ol</Button>
              </Link>
            </Box>
          )}

          {/* Search Button */}
          <IconButton color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>

          {/* Mobile Menu Icon (Aligned to Right) */}
          {isMobile && (
            <Box sx={{ ml: 'auto' }}>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component="a" href="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="/About">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component="a" href="/Blog">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component="a" href="/Contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Toolbar />

      {/* Search Box */}
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
              width: isMobile ? '90%' : '70%',
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
