import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CatalogSection from '../components/CatalogSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function HomePage() {
  const [flowers] = useState([
    { id: 1, name: 'Rose', price: 5.99, image: 'https://via.placeholder.com/300x400?text=Rose' },
    { id: 2, name: 'Tulip', price: 4.99, image: 'https://via.placeholder.com/300x400?text=Tulip' },
    { id: 3, name: 'Lily', price: 6.99, image: 'https://via.placeholder.com/300x400?text=Lily' },
    { id: 4, name: 'Daisy', price: 3.99, image: 'https://via.placeholder.com/300x400?text=Daisy' }
  ]);

  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection flowers={flowers} />
      <ContactForm />
      <Footer />
    </Box>
  );
}

export default HomePage;
