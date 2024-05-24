const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/schedule', messageController.scheduleMessage);
router.get('/', messageController.getAllMessages);

module.exports = router;
