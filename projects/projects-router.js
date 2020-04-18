const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.post('/resources', (req, res) => {
  resourceData = req.body;

  Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.post('/', (req, res) => {
  projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.post('/tasks', (req, res) => {
  taskData = req.body;

  Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.get('/tasks', (req, res) => {
  
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" })
    });
})

module.exports = router;