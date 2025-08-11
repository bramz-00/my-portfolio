import type { Project } from "@/types/collection";
import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProjectCard from "@/components/organisms/ProjectCard";
import { Combobox } from "@/components/molecules/combobox";
import CustomCarousel from "@/components/organisms/CustomCarousel";


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
const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get unique categories and statuses
  const categories = ['all', ...new Set(projectsData.map(p => p.category))];
  const statuses = ['all', 'completed', 'in-progress', 'planned', 'archived'];

  // Filter projects
  const filteredProjects = projectsData.filter(project => {
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesStatus && matchesCategory && matchesSearch;
  });

  // Sort projects: featured first, then by status
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });


  return (
    <section className=" flex flex-col w-full lg:px-24 px-8 lg:max-w-5xl" id="projects">
      <div className=" ">

        {/* Header Section */}
        <h2 className="text-4xl font-bold mb-2 text-left border-b pb-2">Selected Work</h2>

        {/* Projects Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Projects
          <span className="ml-2 text-sm font-normal text-gray-500">
            ({filteredProjects.length} projects)
          </span>
        </h2>
        <section id="projects" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

            {/* Search and Filters */}
            <div className="flex flex-col gap-4 sm:flex-row items-center mt-4 justify-between w-full">
              {/* Search */}
              <div className="relative w-full lg:w-72 ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Status Filter */}

              <div className="flex lg:flex-row gap-3 flex-col w-full justify-end">

                <Combobox
                  data={statuses}
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                />

                {/* Category Filter */}
                <Combobox
                  data={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {sortedProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <CustomCarousel
              data={sortedProjects}
              renderItem={(project, index) => <ProjectCard key={index} project={project} />}
            />

          )}
        </section>

      </div>



    </section>
  )
}

export default Projects
