const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Mock data for flowers
const flowersData = [
  { id: 1, name: 'Rose', price: 5.99, image: 'https://via.placeholder.com/300x400?text=Rose' },
  { id: 2, name: 'Tulip', price: 4.99, image: 'https://via.placeholder.com/300x400?text=Tulip' },
  { id: 3, name: 'Lily', price: 6.99, image: 'https://via.placeholder.com/300x400?text=Lily' },
  { id: 4, name: 'Daisy', price: 3.99, image: 'https://via.placeholder.com/300x400?text=Daisy' }
];

// Schema for contact messages
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Model for contact messages
const ContactModel = mongoose.model('Contact', ContactSchema);

// GET /api/flowers - Get list of flowers
router.get('/flowers', (req, res) => {
  res.json(flowersData);
});

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newContact = new ContactModel({
      name: name,
      email: email,
      message: message
    });
    
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/hello - Test endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Flower Shop API!' });
});

// GET /api/status - Server status
router.get('/status', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'flower-shop-backend'
  });
});

module.exports = router;
