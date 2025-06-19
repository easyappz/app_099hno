import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)({
  padding: '60px 0',
  backgroundColor: '#fff',
  textAlign: 'center',
});

const AboutSection = () => {
  return (
    <AboutContainer>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          About FlowerBloom
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          At FlowerBloom, we believe in the power of flowers to bring joy and beauty to any occasion. 
          With years of experience in floristry, we source the freshest blooms from local and international growers. 
          Our mission is to create stunning arrangements that speak to the heart.
        </Typography>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
