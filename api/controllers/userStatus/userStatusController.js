const userStatus = require("../../models/userStatus")

const handleUserStatus = async (req, res) => {
  const { page, limit } = req.query;
  const options = {
    page: page,
    limit: limit
  }

  try {
    let userName;
    const { name, lastName } = req.query;

    if (name || lastName) {
      const regex = new RegExp(`(${name}|${lastName})`, "i");
      userName = await userStatus.paginate({ $or: [{ name: { $regex: regex } }, { lastName: { $regex: regex } }] }, options);
    } else {
      userName = await userStatus.paginate({}, options);
    }

    res.status(200).json(userName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserStatusByid = async (req, res) => {
  try {
    const { id } = req.params;

    const userStatusData = await userStatus.findOne({ _id: id });

    if (!userStatusData) {
      return res.status(404).json({ message: 'User status not found' });
    }

    res.status(200).json(userStatusData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { handleUserStatus, getUserStatusByid }