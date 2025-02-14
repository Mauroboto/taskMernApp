import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTasks,
  deleteTasks,
  getTasks,
  getTasksById,
  updateTasks,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTasksById);
router.post("/tasks", authRequired, createTasks);
router.put("/tasks/:id", authRequired, updateTasks);
router.delete("/tasks/:id", authRequired, deleteTasks);

export default router;
