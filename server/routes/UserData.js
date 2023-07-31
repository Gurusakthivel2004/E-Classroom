import User from "../models/User.js";
import bcrypt from "bcrypt";

export const GetUserData = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username: username });
    if(user) res.status(201).json(user);
    else res.status(500).json({ error: err.message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
