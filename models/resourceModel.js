const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;
