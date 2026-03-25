const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {

    const { title, description, techStack } = req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      createdBy: req.user.id
    });

    res.json(project);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {

    const projects = await Project.find()
      .populate("createdBy", "name email skills")
      .populate("collaborators", "name email");

    res.json(projects);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.joinProject = async (req, res) => {
  try {

    const project = await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        $addToSet: { collaborators: req.user.id }
      },
      { new: true }
    );

    res.json(project);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};