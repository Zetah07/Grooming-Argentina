const blog = require('../../models/blogs');

const getPosts = async (req, res) => {
  try {
    const { title, author, sort, page = 1, limit = 5 } = req.query;

    const options = {
      page,
      limit
    };

    const query = {};
    if (title) {
      query.title = { $regex: new RegExp(title, "i") };
    }
    if (author) {
      query.author = { $regex: new RegExp(author, "i") };
    }

    let blogTitle;
    if (sort === 'oldest') {
      blogTitle = await blog.paginate(query,{options, sort:{createdAt: 1}});
    } else if (sort === 'newest') {
      blogTitle = await blog.paginate(query,{options, sort:{createdAt: -1}});
    } else {
      blogTitle = await blog.paginate(query, options);
    }

    res.status(200).json(blogTitle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await blog.findById(req.params.id).populate('author', 'username');

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


module.exports = { getPosts, getPostById };