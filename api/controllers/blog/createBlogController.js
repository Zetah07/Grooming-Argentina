const blog = require('../../models/blogs');
const user = require('../../models/user');

const handleCreatePost = async (req, res) => {

  const { title, subtitle, content } = req.body

  if (!title || !subtitle || !content) return res.status(400).json({ "message": "Por favor completar todos los campos" });

  try {
    if (!req.user) {
      return res.status(401).json({ error: "debe iniciar sesión para crear una publicación" });
    }

    const author = await user.findOne({ username: req.user });

    const post = new blog({
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
      author: `${author.name} ${author._id.toString().substr(0, 5)}`,
      username: author.username
    });

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = handleCreatePost;