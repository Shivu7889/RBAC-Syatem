const Resource = require("../models/resourceModel");

const getResource = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

module.exports = { getResource };
