exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .index();
      tbl.string("description", 1000);
      tbl.boolean("completed", false).notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .index();
      tbl.string("description", 1000);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl
        .string("task_description", 1000)
        .notNullable()
        .index();
      tbl.string("notes", 500);
      tbl.boolean("completed", false).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_ id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_ id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resources")
    .dropTableIfExists("project");
};
