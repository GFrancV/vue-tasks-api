import { Router } from "express";
import { taskController } from "../controllers/taskController";

const router = Router();

router.get("/tasks", taskController.getTasks);
router.get("/tasks/:id", taskController.getTask);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.editTask);
router.delete("/tasks/:id", taskController.deleteTask);

export default router;
