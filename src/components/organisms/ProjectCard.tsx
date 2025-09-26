// import { ExternalLink, Github } from 'lucide-react';
import React from 'react'
// import { Link } from 'react-router-dom';
import type { Project } from "@/types/collection";
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // const getStatusColor = (status: string) => {
    //     switch (status) {
    //         case 'completed':
    //             return 'bg-green-100 text-green-800';
    //         case 'in-progress':
    //             return 'bg-blue-100 text-blue-800';
    //         case 'planned':
    //             return 'bg-yellow-100 text-yellow-800';
    //         case 'archived':
    //             return 'bg-gray-100 text-gray-800';
    //         default:
    //             return 'bg-gray-100 text-gray-800';
    //     }
    // };

    return (
        <div className="bg-white rounded-lg hover:shadow-sm border transition-all duration-200 group ">
            {/* Project Image */}
            {project.images[0] && (
                <div className="  rounded-t-lg overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-200"

                    />
                </div>
            )}

            <div className="py-4">
                {/* Header */}
              

               
            </div>
        </div>


    )
}

export default ProjectCard