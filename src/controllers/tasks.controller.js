import Task from "../models/taskModel.js";
import mongoose from "mongoose";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).populate("user");

    return res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

export const getTasksById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Task ID" });
    }

    const taskFound = await Task.findById(req.params.id);

    if (!taskFound) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    return res.status(200).json(taskFound);
  } catch (error) {
    next(error);
  }
};

export const createTasks = async (req, res, next) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });

    const taskSaved = await newTask.save();

    return res.status(201).json(taskSaved);
  } catch (error) {
    next(error);
  }
};

export const updateTasks = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Task ID" });
    }

    const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!taskFound) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    return res.status(203).json(taskFound);
  } catch (error) {
    next(error);
  }
};

export const deleteTasks = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Task ID" });
    }

    const taskFound = await Task.findByIdAndDelete(req.params.id);

    if (!taskFound) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    return res.status(204).json(taskFound);
  } catch (error) {
    next(error);
  }
};
