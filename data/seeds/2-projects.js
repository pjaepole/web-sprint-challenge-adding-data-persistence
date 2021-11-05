
exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
        {"project_id":1,"project_name":"fizz","project_description":'notnull',"project_completed":false},
        {"project_id":2,"project_name":"bar","project_description":'not null something',"project_completed":true},
        {"project_id":3,"project_name":"buzzzz","project_description":'you say run',"project_completed":false}
    ]);
  };
  