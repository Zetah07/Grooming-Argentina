const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userStatus = require("../models/userStatus");

const approvedUser = async (id) => {
  try {
    const approvedStatus = await userStatus.findById(id);
    if (!approvedStatus || approvedStatus.status !== 'approved') {
      throw new Error('Invalid or unapproved registration ID');
    }

    const documentString = JSON.stringify(approvedStatus.document);
    const hashedPassword = await bcrypt.hash(documentString, 10);

    const user = mongoose.model('user');

    const duplicate = await user.findOne({ username: approvedStatus.document }).exec();
    if (duplicate) {
      throw new Error('User with this document already exists');
    }

    const newUser = new user({
      username: approvedStatus.document,
      name: approvedStatus.name,
      password: hashedPassword,
      rol: "volunteer"
    });
    await newUser.save();

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error('Could not create user');
  }
};

module.exports = approvedUser;
