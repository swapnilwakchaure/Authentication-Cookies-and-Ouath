import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "You're email address already exists, please login" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    res
      .status(201)
      .json({ message: `${name}, your registration successful, please login` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({ message: "Invalid email address" });
    }

    const isMatch = await bcrypt.compare(password, user?.password);

    if (!isMatch) {
      return res.status(200).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: 60 * 5,
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 300000 });
    res.status(200).json({ message: `Welcome ${user?.name}!` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " });
  }
};

export { register, login };
