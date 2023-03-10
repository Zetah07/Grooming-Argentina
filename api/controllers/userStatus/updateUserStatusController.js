const userStatus = require("../../models/userStatus");
const mongoose = require('mongoose');
const approvedUser = require("../../middleware/approvedUser");

const updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { status, userDocument } = req.body;
  try {
    let userStatusToUpdate 
    if (userDocument) {
      userStatusToUpdate = await userStatus.findOne({document:userDocument});
    }else if(id){
      userStatusToUpdate = await userStatus.findById(id);
    }
    if (!userStatusToUpdate) {
      return res.status(404).json({ message: "User status not found" });
    }

    const user = mongoose.model('user');

    const currentStatus = userStatusToUpdate.status;

    userStatusToUpdate.status = status;
    await userStatusToUpdate.save();

    if (status === "aprobado") {
      const newUser = await approvedUser(userStatusToUpdate._id);
      return res.json({ message: "User successfully created", created: newUser });
    }

    if (currentStatus === "aprobado" && (status === "pendiente" || status === "denegado")) {
      console.log("entro");
      try {
        const deleteResult = await user.findOneAndDelete({ username: userStatusToUpdate.document });
        return res.status(200).json({ message: "User successfully deleted", deleted: deleteResult });
      } catch (err) {
        return res.status(500).json({ message: "Error deleting user" });
      }
    }

    return res.json(userStatusToUpdate);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = updateUserStatus;