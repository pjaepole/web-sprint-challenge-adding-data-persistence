// build your `Task` model here
const db = require("../../data/dbConfig");

async function getTasks() {
  const result = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_notes",
      "t.task_description",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  const boolResult = result.map((task) => {
    if (task.task_completed === 1) {
      return { ...task, task_completed: true };
    } else {
      return { ...task, task_completed: false };
    }
  });
  return boolResult;
}

async function getTaskById(task_id) {
  const result = await db("tasks").where("task_id", task_id).first();
  if (result.task_completed === 1) {
    return { ...result, task_completed: true };
  } else {
    return { ...result, task_completed: false };
  }
}

async function insertTask(task) {
  const [task_id] = await db("tasks").insert(task);
  const foundTask = await getTaskById(task_id);
  return foundTask;
}
module.exports = {
  getTasks,
  insertTask,
};
