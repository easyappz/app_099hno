import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  color: '#333',
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ff6f61' }}>
          FlowerBloom
        </Typography>
        <Box>
          <Button color="inherit" sx={{ textTransform: 'none', color: '#333', marginRight: 2 }}>
            Home
          </Button>
          <Button color="inherit" sx={{ textTransform: 'none', color: '#333', marginRight: 2 }}>
            Catalog
          </Button>
          <Button color="inherit" sx={{ textTransform: 'none', color: '#333' }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
