const DealerListing = require('../models/DealerListing');

exports.getListings = async (req, res) => {
  try {
    const listings = await DealerListing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createListing = async (req, res) => {
  const listing = new DealerListing(req.body);
  try {
    const newListing = await listing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
