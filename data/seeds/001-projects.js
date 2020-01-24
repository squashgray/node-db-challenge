exports.seed = function(knex) {
  // Inserts seed entries
  return knex("project").insert([
    {
      name: "Pretend Project",
      description: "Doing a thing",
      completed: false
    },
    {
      name: "This is a project",
      description: "Doing all the things that need to be done",
      completed: false
    }
  ]);
};
