const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  scheduledAt: { type: Date, required: true },
  sent: { type: Boolean, default: false },
});

module.exports = mongoose.model('Message', messageSchema);
