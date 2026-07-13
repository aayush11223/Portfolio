import { useState, useEffect } from "react";
import api from "@/api/axios";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await api.get("/projects");
                console.log(response.data);
                setProjects(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch projects.");
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
            <p className="text-4xl font-bold tracking-tight">
                Projects
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <Card
                        key={project._id}
                        className="w-96 p-6"
                    >
                        <img className="mt-5 h-52 w-full rounded-b-xl object-cover border border-gray-200 shadow-sm"

                            src={`${import.meta.env.VITE_API_URL}${project.image}`}
                            alt={project.title}
                        />

                        <h2 className="text-2xl font-semibold">
                            {project.title}
                        </h2>

                        <p className="mt-3 text-gray-900">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <Badge key={tech}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-4">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live Demo
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;