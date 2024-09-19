import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ServicesIcon from '@mui/icons-material/Build';
import ContactIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button component={Link} href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} href="/services">
          <ListItemIcon>
            <ServicesIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} href="/contact">
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}
