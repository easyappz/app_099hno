import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import FlowerCard from './FlowerCard';

const CatalogContainer = styled(Box)({
  padding: '60px 0',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
});

const CatalogSection = ({ flowers }) => {
  return (
    <CatalogContainer>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Our Flower Catalog
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {flowers.map((flower) => (
            <Grid item xs={12} sm={6} md={3} key={flower.id}>
              <FlowerCard flower={flower} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </CatalogContainer>
  );
};

export default CatalogSection;
