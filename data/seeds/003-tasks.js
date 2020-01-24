exports.seed = function(knex) {
  // Inserts seed entries
  return knex("task").insert([
    {
      task_description: "Eat Breakfast",
      notes: "probably gonna be eggs",
      completed: false,
      project_id: 1
    },
    {
      task_description: "Stare into the abyss",
      notes: "uh, none",
      completed: false,
      project_id: 1
    },
    {
      task_description: "Become the god of the new world",
      notes: "Must acquire death note",
      completed: false,
      project_id: 2
    },
    {
      task_description: "Think up another task",
      notes: "oh snap, i did it",
      completed: false,
      project_id: 2
    }
  ]);
};
