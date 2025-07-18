const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  username: String,
  email: String,
  password: String,
  webUrl: String,
  category: String,
  isFavorite: { type: Boolean, default: false },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Password', passwordSchema);
