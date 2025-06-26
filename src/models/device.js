const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  deviceType: { type: String, required: true },
  deviceBrand: { type: String, required: true },
  deviceModel: { type: String, required: true },
  dateOfPurchase: { type: Date, required: true },
  assignedEmployee: { type: String, default: null },
  currentStatus: { type: String, enum: ["In Use", "Available", "Under Repair", "Retired"], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Device', deviceSchema);
