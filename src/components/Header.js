// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';
import './Header.css';

const Header = ({ toggleTheme }) => (
  <AppBar position="static" className="header">
    <Toolbar>
      <Typography variant="h6" className="header-title">
        Admin Dashboard
      </Typography>
      <IconButton color="inherit" onClick={toggleTheme} className="header-icon">
        <Brightness4 />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

