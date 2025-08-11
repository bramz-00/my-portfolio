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
        <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 group ">
            {/* Project Image */}
            {project.images[0] && (
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"

                    />
                </div>
            )}

            <div className="p-4">
                {/* Header */}
                <div className="flex lg:flex-row flex-col items-start justify-between gap-2 mb-3">
                    <div className="">
                        <h3 className="lg:text-lg text-sm  font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {project.title}

                        </h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
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
                <div className="flex items-center justify-between">
                    <Link
                        to={`/project/${project.id}`}
                  
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                        View Details →
                    </Link>

                    <div className="flex gap-2">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
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
                                className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
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