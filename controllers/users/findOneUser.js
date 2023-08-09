const Users = require('../../model/usersModel');
const { customErrorMessages } = require('../../utils/helpers');

const findOneUser = async (req, res) => {
  try {
    const { _id } = req.query;
    const user = await Users.findById(_id);
    res.status(200).json({
      success: true,
      message: 'User details fetched successfully',
      data: user,
    });
  } catch (error) {
    const message = customErrorMessages(error);
    const status = error.isJoi ? 422 : 400;
    res.status(status).json({ success: false, message: message });
  }
};

module.exports = findOneUser;