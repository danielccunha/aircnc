const Booking = require("../models/Booking");

exports.store = async (req, res) => {
  const { user_id } = req.headers;
  const { spot_id } = req.params;
  const { date } = req.body;

  const booking = await Booking.create({
    date,
    user: user_id,
    spot: spot_id,
  });

  await booking.populate("spot").populate("user").execPopulate();

  return res.json(booking);
};
