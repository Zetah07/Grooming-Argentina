const blog = require('../../models/blogs');

const getPosts = async (req, res) => {
  try {
    const { username, sort, page, limit } = req.query;

    const options = {
      page,
      limit,
      sort: { createdAt: -1 },
    };

    const query = {};

    if (username) {
      query.username = { $regex: new RegExp(username, 'i') };
    }

    let blogTitle;
    if (sort === 'oldest') {
      options = {
        page: page,
        limit: limit,
        sort: { _id: 1, createdAt: 1 },
      };
      blogTitle = await blog.paginate(query, options);
    } else if (sort === 'newest') {
      blogTitle = await blog.paginate(query, options);
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
    const post = await blog
      .findById(req.params.id)
      .populate('author', 'username');

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getPosts, getPostById };
