import { ExternalLink, Github } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import type { Project } from "@/types/collection";
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            case 'planned':
                return 'bg-yellow-100 text-yellow-800';
            case 'archived':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg hover:shadow-sm border  transition-all duration-200 group ">
            {/* Project Image */}
            {project.images[0] && (
                <div className="  rounded-t-lg overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className=" lg:h-64 h-56 w-full object-cover group-hover:scale-105 transition-transform duration-200"

                    />
                </div>
            )}

            <div className="py-4">
                {/* Header */}
                <div className="flex px-4 lg:flex-row flex-col items-start justify-between gap-2 mb-3">
                    <div className="">
                        <h3 className="lg:text-lg text-sm  font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {project.title}

                        </h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm px-2 mb-4 line-clamp-2 ">
                    {project.description}
                </p>



                {/* Technologies */}
                <div className="flex px-4 flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className=" items-center justify-between px-4">
                    <Link
                        to={`/project/${project.id}`}

                        className="text-primary hover:text-primary font-medium text-sm transition-colors"
                    >
                        View Details →
                    </Link>

                    <div className="flex gap-2">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-gray-500 hover:text-primary transition-colors rounded-full "
                                onClick={(e) => e.stopPropagation()}
                                title="View Demo"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-gray-500 hover:text-primary transition-colors rounded-full "
                                onClick={(e) => e.stopPropagation()}
                                title="View Code"
                            >
                                <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProjectCard