
exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
        {"resource_id":1,"resource_name":"foo","resource_description":null},
        {"resource_id":2,"resource_name":"bar","resource_description":"something"}
    ]);
  };
  