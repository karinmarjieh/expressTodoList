const todos = [
  { id: 1, desc: "go to the beach " },
  { id: 2, desc: "go to the mall" },
  { id: 3, desc: "go to the city center" },
  { id: 4, desc: "go to school " },
];

const controller = {
  getTodos: (req, res) => {
    res.send(todos);
  },

  getTodoById: (req, res) => {
    const specificId = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === specificId);
    todo ? res.status(200).send(todo) : res.status(404).send("todo not found");
  },

  postTodo: (req, res) => {
    const id = todos.length + 1;
    const desc = req.body.desc;
    const item = {
      id: id,
      desc: desc,
    };
    todos.push(item);
    res.status(201).send(item);
  },

  putTodo: (req, res) => {
    const specificId = parseInt(req.params.id);
    const description = req.body.desc;
    const todo = todos.find((todo) => todo.id === specificId);

    if (!todo) {
      return res.status(404).send("to do not found ");
    }

    todo.desc = description;
    res.json(todo);
  },

  deleteTodo: (req, res) => {
    const specificId = parseInt(req.params.id);
    const todoIndexToDelete = todos.findIndex((todo) => todo.id === specificId);

    if (todoIndexToDelete === -1) res.status(404).send("todo not found");

    todos.splice(todoIndexToDelete, 1);
    res.status(204).send();
  },
};
module.exports = controller;
