const mongoose = require('mongoose');

const dealerListingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dealer: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, enum: ['Tour', 'Car Hire'], required: true },
  description: String,
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DealerListing', dealerListingSchema);
