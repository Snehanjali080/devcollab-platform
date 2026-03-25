const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
  try {

    const messages = await Message.find({
      projectId: req.params.projectId
    }).sort({ createdAt: 1 });

    res.json(messages);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};