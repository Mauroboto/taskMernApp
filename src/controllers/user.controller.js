import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { accessToken } from "../libs/jwt.js";

export const register = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      throw new Error("User already exists");
    }

    const passwordhashed = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: passwordhashed,
      username,
    });

    const userSaved = await newUser.save();
    const token = await accessToken({ id: userSaved._id });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email }).select("+password");
    if (!userFound) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(422).json({ message: "Invalid credentials" });
    }

    const token = await accessToken({ id: userFound._id });

    res.clearCookie("token");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: true,
    });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const profile = async (req, res, next) => {
  const userFound = await User.findById(req.user.id);

  try {
    if (!userFound) {
      return res.status(404).json({ message: error.message });
    }

    return res.status(201).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};
