const blog = require('../../models/blogs');

const deletePost = async (req, res) => {
  try {
    const post = await blog.findById(req.params.id);

    if (!req.user) {
      return res.status(401).json({ error: 'debe iniciar sesión para eliminar una publicación' });
    }

    if (req.user.toString() !== post.username.toString()) {
      return res.status(401).json({ error: 'no está autorizado para eliminar esta publicación' });
    }

    await post.remove();

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = deletePost;