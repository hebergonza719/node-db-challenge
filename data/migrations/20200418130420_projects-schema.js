
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
          .unique()
          .notNullable();
        tbl.string('description', 255);
      })
      .createTable('projects_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  )
};
