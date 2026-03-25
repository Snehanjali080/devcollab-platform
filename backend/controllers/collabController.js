const Collaboration = require("../models/Collaboration");

exports.sendRequest = async (req, res) => {
  try {

    const { toUserId, projectIdea } = req.body;

    const request = await Collaboration.create({
      fromUser: req.user.id,
      toUser: toUserId,
      projectIdea
    });

    res.json(request);

  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

exports.getRequests = async (req, res) => {
  try {

    const requests = await Collaboration.find({
      toUser: req.user.id
    }).populate("fromUser", "name email skills");

    res.json(requests);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.acceptRequest = async (req, res) => {
  try {

    const request = await Collaboration.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );

    res.json(request);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.rejectRequest = async (req, res) => {
  try {

    const request = await Collaboration.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.json(request);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};