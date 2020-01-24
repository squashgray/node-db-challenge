const db = require("../data/dbConfig");

module.exports = {
  findProjects,
  findTasks,
  findResources,
  addProject,
  addResources,
  addTask,
  removeProject,
  removeTask,
  updateProject,
  findAllTasks,
  updateTask,
  findProjectById
};

function findProjects() {
  return db("project");
}

function findAllTasks() {
  return db("task");
}

function findTasks(project_id) {
  return db("task")
    .select(
      "task.id",
      "task.task_description",
      "task.notes",
      "project.name",
      "project.description"
    )
    .join("project", "task.project_id", "project.id")
    .where({ project_id });
}

function findProjectById(id) {
  return db("project")
    .where("project.id", id)

    .select(
      "project.id",
      "project.name",
      "project.description",
      "task.id",
      "task.task_description",
      "task.notes"
    )

    .innerJoin("task", "task.project_id", "project.id");
}

function findResources() {
  return db("resources");
}

function addProject(project) {
  return db("project").insert(project);
}

function addResources(resource) {
  return db("resources").insert(resource);
}

function addTask(task) {
  return db("task").insert(task);
}

function removeProject(id) {
  return db("project")
    .where("id", id)
    .del();
}

function removeTask(id) {
  return db("task")
    .where("id", id)
    .del();
}

function updateProject(id, project) {
  return db("project")
    .where("id", Number(id))
    .update(project);
}

function updateTask(id, task) {
  return db("task")
    .where("id", Number(id))
    .update(task);
}
