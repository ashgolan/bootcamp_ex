import { Task } from "../models/task.js";

export const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateTask = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) return res.status(404).send("invalid update!");
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(400).send("No task found");
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send(e);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).send("not found");
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};
