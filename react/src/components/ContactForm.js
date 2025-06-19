import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
  padding: '60px 0',
  backgroundColor: '#fff',
  textAlign: 'center',
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <FormContainer>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '500px', margin: '0 auto' }}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: 2, backgroundColor: '#ff6f61', '&:hover': { backgroundColor: '#e65a50' } }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </FormContainer>
  );
};

export default ContactForm;
