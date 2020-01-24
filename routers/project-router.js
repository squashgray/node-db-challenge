const express = require("express");
const Projects = require("./project-model");
const router = express.Router();

router.get("/projects", (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
}); // working

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  Projects.findProjectById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "nah workin" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.findAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Tasks" });
    });
}); // working

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get Tasks" });
    });
});

router.get("/resources", (req, res) => {
  Projects.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Resources" });
    });
}); //working

router.post("/projects", (req, res) => {
  const newProject = req.body;

  Projects.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "could not add project" });
    });
}); // working

router.post("/resources", (req, res) => {
  const addResource = req.body;

  Projects.addResources(addResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "could not add resource" });
    });
}); //working

router.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = {
    ...req.body,
    project_id: id
  };

  Projects.addTask(task)
    .then(newtask => {
      res.status(201).json(newtask);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to add task" });
    });
}); // working

router.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeProject(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to delete project" });
    });
}); // working

router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeTask(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find task with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to delete task" });
    });
}); //working

router.put("/projects/:id", (req, res) => {
  const edit = req.body;
  const { id } = req.params;

  Projects.updateProject(id, edit)
    .then(edit => {
      res.status(200).json(edit);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "oof" });
    });
}); // working

router.put("/tasks/:id", (req, res) => {
  const edit = req.body;
  const { id } = req.params;

  Projects.updateTask(id, edit)
    .then(edit => {
      res.status(200).json(edit);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "oof" });
    });
});

module.exports = router;
