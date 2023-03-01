const blog = require('../../models/blogs');

const updatePost = async (req, res) => {
  try {
    const post = await blog.findById(req.params.id);

    if (!req.user) {
      return res.status(401).json({ error: "debe iniciar sesión para modificar una publicación" });
    }
    if (req.user.toString() !== post.username.toString()) {
      return res.status(401).json({ error: 'no está autorizado para modificar esta publicación' });
    }

    post.title = req.body.title;
    post.subtitle = req.body.subtitle;
    post.content = req.body.content;
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = updatePost;
