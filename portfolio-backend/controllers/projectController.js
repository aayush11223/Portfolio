import Project from '../models/Project.js';

// GET /api/projects
const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);

    } catch (error) {
        next(error);
    }
};

// GET /api/projects/:id
const getProjectById = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        res.status(200).json(project);

    } catch (error) {
        next(error);
    }
};

// POST /api/projects
const createProject = async (req, res, next) => {
    try {
        const {
            title,
            description,
            techStack,
            githubLink,
            liveLink,
            image,
            featured,
        } = req.body;

        if (!title || !description || !techStack) {
            res.status(400);
            throw new Error('Title, description, and techStack are required');
        }

        const project = await Project.create({
            title,
            description,
            techStack,
            githubLink,
            liveLink,
            image,
            featured,
        });

        res.status(201).json(project);

    } catch (error) {
        next(error);
    }
};

export { getProjects, getProjectById, createProject };