import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)({
  backgroundImage: 'url("https://via.placeholder.com/1200x500?text=Beautiful+Flowers")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '0 20px',
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
        Beautiful Flowers for Every Occasion
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ maxWidth: '600px', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
        Discover our wide range of fresh flowers and make every moment special.
      </Typography>
      <Button variant="contained" size="large" sx={{ marginTop: 2, backgroundColor: '#ff6f61', '&:hover': { backgroundColor: '#e65a50' } }}>
        Shop Now
      </Button>
    </HeroContainer>
  );
};

export default HeroSection;
