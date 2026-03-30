import { useParams } from "react-router-dom";

function ProjectDetails() {

  const { projectId } = useParams();

  return (
    <div>
      <h2>Project Details</h2>

      <p>Project ID: {projectId}</p>

      <h3>Members 👥</h3>

      <h3>Tasks 📋</h3>

      <h3>Updates 📢</h3>

    </div>
  );
}

export default ProjectDetails;