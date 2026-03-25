const User = require("../models/User");

exports.searchDevelopers = async (req, res) => {
  try {

    const { skill } = req.query;

    const developers = await User.find({
      skills: { $in: [skill] }
    }).select("-password");

    res.json(developers);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};