const Message = require('../models/Message');

exports.scheduleMessage = async (req, res) => {
  try {
    // Create and save the message
    const { content, scheduledAt } = req.body;
    const newMessage = new Message({
      user: req.user._id,
      content,
      scheduledAt,
    });
    await newMessage.save();
    res.status(201).json({ message: 'Message scheduled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    // Fetch all messages for the logged-in user
    const messages = await Message.find({ user: req.user._id });
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
