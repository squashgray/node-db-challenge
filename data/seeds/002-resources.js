exports.seed = function(knex) {
  // Inserts seed entries
  return knex("resources").insert([
    { name: "Hammer", description: "HAMMER TIME" },
    { name: "Axe", description: "And my AXE!" },
    { name: "The high ground", description: "It's over Anakin!" }
  ]);
};
