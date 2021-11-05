
exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
        {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":1},
        {"task_id":2,"task_description":"baz jet say run","task_notes":'snapsnap',"task_completed":false,"project_id":1},
    ]);
  };
  