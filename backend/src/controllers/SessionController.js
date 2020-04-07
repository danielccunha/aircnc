const User = require("../models/User");

exports.store = async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      email,
    });
  }

  return res.json(user);
};
