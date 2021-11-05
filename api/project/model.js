// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const result = await db("projects");
  const boolResult = result.map((project) => {
    if (project.project_completed === 1) {
      return { ...project, project_completed: true };
    } else {
      return { ...project, project_completed: false };
    }
  });
  return boolResult;
}

async function getProjectById(project_id) {
  const result = await db("projects").where("project_id", project_id).first();
  if (result.project_completed === 1) {
    return { ...result, project_completed: true };
  } else {
    return { ...result, project_completed: false };
  }
}

async function insertProject(project) {
  const [project_id] = await db("projects").insert(project);
  const foundProject = await getProjectById(project_id);
  return foundProject;
}
module.exports = {
  getProjects,
  insertProject,
};
