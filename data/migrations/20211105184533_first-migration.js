
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table=>{
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.boolean('project_completed ').default('false')
    })
    .createTable('resources', table=>{
        table.increments('resource_id')
    })
    .createTable('tasks', table=>{
        table.increments('task_id')
    })
    .createTable('project_resources', table=>{
        table.increments('project_resources_id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
