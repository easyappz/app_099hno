import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Typography variant="body2">
          © {new Date().getFullYear()} FlowerBloom. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Contact us: info@flowerbloom.com | +1 (123) 456-7890
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
