import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import type { Project } from '@/types/collection';
import Layout from '@/components/templates/Layout';
import { Button } from '@/components/atoms/button';
import CustomCarousel from '@/components/organisms/CustomCarousel';
// data/projects.json - Example projects data
const projectsData: Project[] = [
  {
    id:1,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform is designed to be scalable and maintainable with a focus on user experience.",
    status: "completed",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    images: ["/images/ecommerce-1.jpg", "/images/ecommerce-2.jpg"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/user/ecommerce",
    startDate: "2024-01-15",
    endDate: "2024-04-20",
    category: "Web Development",
    featured: true
  },
  {
    id:2,
    slug: "task-manager",
    title: "Task Management App",
    description: "A collaborative task management application",
    longDescription: "A modern task management application that helps teams collaborate effectively. Built with React and real-time updates using WebSockets. Features include project organization, task assignment, due dates, and progress tracking.",
    status: "in-progress",
    technologies: ["React", "TypeScript", "Socket.io", "Express"],
    images: ["/images/taskmanager-1.jpg"],
    githubUrl: "https://github.com/user/taskmanager",
    startDate: "2024-05-01",
    category: "Productivity",
    featured: false
  }
];
const ProjectDetail: React.FC = () => {
const { projectId } = useParams<{ projectId: string }>();

// Convertir en number avant de chercher
const project = projectsData.find(
  (p: Project) => p.id === Number(projectId)
);
  // If project not found, redirect to home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'archived':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
    const navigate = useNavigate();

const handleBack = () => {
  navigate("/", { state: { scrollTo: "projects" } });
};

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className='flex items-center w-full gap-2 justify-end'>
          <Button
            onClick={handleBack}
            className=" inline-flex cursor-pointer gap-2 items-center bg-white text-primary border px-4 rounded-full py-1 border-primary  hover:text-secondary hover:bg-secondary/10 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </Button>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-2xl  border p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {project.startDate} {project.endDate && `- ${project.endDate}`}
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  {project.category}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </span>
              <div className="flex gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className=' w-full'>


        {project.images.length > 0 && (
          <div className="bg-white rounded-2xl border lg:p-16 p-4 py-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Screenshots
            </h2>
          
            <CustomCarousel
              data={project.images}
              renderItem={(image, index) => 
              <div className=''>
               <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"

                  />
                </div>
              
              
              </div>}
            />
          </div>
        )}
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-2xl  border p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            About This Project
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
