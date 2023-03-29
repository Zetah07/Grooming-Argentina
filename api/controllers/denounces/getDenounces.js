const denounces = require('../../models/denounces');

const getDenounces = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  const options = {
    page: page,
    limit: limit,
    sort: { createdAt: -1 },
  };

  try {
    const denouncesList = await denounces.paginate({}, options);
    res.status(200).json(denouncesList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getDenounces };
