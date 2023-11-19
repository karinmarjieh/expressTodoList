const posts = [
  {
    id: 1,
    title: "Harry Potter 1 ",
    author: "jk rolling",
    content: "go to the beach ",
  },
  {
    id: 2,
    title: "Harry Potter 2 ",
    author: "jk rolling",
    content: "go to the mall",
  },
  {
    id: 3,
    title: "Harry Potter 3 ",
    author: "jk rolling",
    content: "go to the city center",
  },
  {
    id: 4,
    title: "Harry Potter 4",
    author: "jk rolling",
    content: "go to school ",
  },
];

const controller = {
  getPosts: (req, res) => {
    res.send(posts);
  },

  getPostById: (req, res) => {
    const specificId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === specificId);
    post ? res.status(200).send(post) : res.status(404).send("post not found");
  },

  postPost: (req, res) => {
    const id = posts.length + 1;
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    const item = {
      id: id,
      title: title,
      author: author,
      content: content,
    };
    posts.push(item);
    res.status(201).send(item);
  },

  putPost: (req, res) => {
    const specificId = parseInt(req.params.id);
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;

    const post = posts.find((post) => post.id === specificId);

    if (!post) {
      return res.status(404).send("to do not found ");
    }

    post.title = title;
    post.author = author;
    post.content = content;

    res.json(post);
  },

  deletePost: (req, res) => {
    const specificId = parseInt(req.params.id);
    const postIndexToDelete = posts.findIndex((post) => post.id === specificId);

    if (postIndexToDelete === -1) res.status(404).send("post not found");

    posts.splice(postIndexToDelete, 1);
    res.status(204).send();
  },
};
module.exports = controller;
