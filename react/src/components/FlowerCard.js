import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '0 auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const FlowerCard = ({ flower }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={flower.image}
        alt={flower.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {flower.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${flower.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant="contained" sx={{ backgroundColor: '#ff6f61', '&:hover': { backgroundColor: '#e65a50' } }}>
          Add to Cart
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default FlowerCard;
