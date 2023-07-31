import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      res.status(500).json({ msg: "Username already exists" });
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      let picturePath = ''; 
      if (req.file) {
        picturePath = req.file.path;
      }
      const newUser = new User({ username, password: passwordHash, picturePath });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
      else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) res.status(400).json({ msg: "Invalid credentials. " });
        else {
          const token = jwt.sign({ id: user._id}, "MessiIsTheGoat")
          res.status(200).json({ token, user });
        }
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};