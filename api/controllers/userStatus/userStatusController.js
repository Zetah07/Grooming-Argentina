const userStatus = require("../../models/userStatus")

const handleUserStatus = async (req, res) => {
  try {
    let userName;
    const { name } = req.query;

    if (name) {
      const regex = new RegExp(name, "i");
      userName = await userStatus.find({ name: { $regex: regex } });
    } else {
      userName = await userStatus.find({});
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