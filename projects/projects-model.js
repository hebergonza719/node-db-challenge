const db = require('../data/db-config.js');

function addResource(resourceData) {
  return db('resources')
    .insert(resourceData);
}

function getResources() {
  return db('resources');
}

function addProject(projectData) {
  return db('projects')
    .insert(projectData);
}

function getProjects() {
  return db('projects');
}

function addTask(taskData) {
  return db('tasks')
    .insert(taskData);
}

function getTasks() {
  return db('projects as p')
    .join('tasks as t', 'p.id', 't.project_id')
    .select('t.description as Task Description', 'p.name as Project Name', 'p.description as Project Description')
}


module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
}