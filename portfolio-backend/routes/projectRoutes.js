import express from "express";
import {
    getProjects,
    getProjectById,
    createProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.post("/projects", createProject);

export default router;

