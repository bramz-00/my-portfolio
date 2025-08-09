
// components/ProjectDetailCard.tsx - Component for project cards on home page
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types/collection';

interface ProjectDetailCardProps {
  project: Project;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
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
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      {project.images[0] && (
        <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/400x225/f3f4f6/9ca3af?text=${encodeURIComponent(project.title)}`;
            }}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
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
        
        <div className="flex items-center justify-between">
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View Details →
          </Link>
          
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;