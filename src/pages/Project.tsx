import React, { useState, useMemo } from 'react';
import { Search, Filter, Github, Calendar, Code, Globe, ChevronDown, Grid, List, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/types/collection';
import Layout from '@/components/templates/Layout';

// Mock data (ensure this matches your i18n structure)
// Example: en.json → "project": { "entries": [...] }

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [cardFormat] = useState< 'minimal' | 'neumorphism' |'asymmetric'>('minimal');
  const { t } = useTranslation();

  // Fetch projects from translation (must be array)
  const projects = (t("project.entries", { returnObjects: true }) as Project[]) || [];

  // Extract unique filter options
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const statuses = ['all', ...new Set(projects.map(p => p.status))];
  const technologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);

      return matchesSearch && matchesCategory && matchesStatus && matchesTech;
    });
  }, [projects, searchTerm, selectedCategory, selectedStatus, selectedTech]);

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
      planned: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      archived: 'bg-gray-100 text-gray-600 border-gray-200',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  // Card Components (Glassmorphism, Minimal, etc.) — unchanged, just wrapped below


  const MinimalCard = ({ project }: { project: Project }) => (
    <div className="group relative bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <Star size={18} className="text-yellow-500 fill-current" />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={14} />
              <span>{new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
          <span className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wide ${getStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {project.images?.[0] ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-40 flex items-center justify-center">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-primary transition-all duration-300 hover:scale-[1.02]">
            View Details
          </button>
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Globe size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const NeumorphismCard = ({ project }: { project: Project }) => (
    <div className="group bg-gray-50 rounded-3xl p-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500">
      <div className="bg-white rounded-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.9)] transition-all duration-500 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              {project.featured && (
                <Star size={16} className="text-yellow-500 fill-current" />
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Calendar size={14} />
            <span>{new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="relative mb-6 rounded-2xl overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]">
            {project.images?.[0] ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Code className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all duration-300">
              Explore
            </button>
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <Globe size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

 

  const AsymmetricCard = ({ project }: { project: Project }) => (
    <div className="group relative bg-white rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-12 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {project.featured && (
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star size={14} className="text-white fill-current" />
              </div>
            )}
            <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </span>
          </div>
          <div className="text-right text-sm text-gray-500">
            {new Date(project.startDate).getFullYear()}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 mb-6 p-3 bg-gray-50 rounded-2xl">
          <Code size={16} className="text-gray-400 flex-shrink-0" />
          <div className="flex flex-wrap gap-1 overflow-hidden">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <React.Fragment key={tech}>
                {idx > 0 && <span className="text-gray-300 mx-1">•</span>}
                <span className="text-xs font-medium text-gray-700">{tech}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative mb-6 rounded-2xl overflow-hidden shadow-inner">
          {project.images?.[0] ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          <button className="flex-1 px-6 py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:scale-[1.02]">
            View Project
          </button>
          
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-200 text-gray-600 rounded-2xl flex items-center justify-center hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <Globe size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-200 text-gray-600 rounded-2xl flex items-center justify-center hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectListItem = ({ project }: { project: Project }) => (
    <div className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {project.images?.[0] ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Code className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <Star size={16} className="text-yellow-500 fill-current" />
              )}
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-gray-500 text-xs">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Globe size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectCard = (project: Project) => {
    switch (cardFormat) {
  
      case 'minimal':
        return <MinimalCard key={project.id} project={project} />;
      case 'neumorphism':
        return <NeumorphismCard key={project.id} project={project} />;

        case 'asymmetric':
        return <AsymmetricCard key={project.id} project={project} />;
      default:
        return <AsymmetricCard key={project.id} project={project} />;
    }
  };

  return (
    <Layout>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, ranging from web applications to mobile apps and everything in between.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Filter size={16} />
            Filters
            <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={16} />
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.filter(c => c !== 'all').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                {statuses.filter(s => s !== 'all').map(status => (
                  <option key={status} value={status}>{status.replace('-', ' ')}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Technologies</option>
                {technologies.filter(t => t !== 'all').map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No projects found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search terms or filter criteria to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSelectedTech('all');
              }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className={
              viewMode === 'grid'
                ? cardFormat === 'asymmetric'
                  ? "grid grid-cols-1 lg:grid-cols-2 gap-8"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }>
              {filteredProjects.map((project) =>
                viewMode === 'grid' ? renderProjectCard(project) : <ProjectListItem key={project.id} project={project} />
              )}
            </div>

            {filteredProjects.length >= 9 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Load More Projects
                </button>
              </div>
            )}
          </>
        )}

        {/* Featured Projects */}
        {searchTerm === '' && selectedCategory === 'all' && selectedStatus === 'all' && selectedTech === 'all' && (
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Highlighted projects that showcase my expertise and passion for creating exceptional digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).slice(0, 4).map((project) => (
                <AsymmetricCard key={`featured-${project.id}`} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full transform translate-x-1/3 translate-y-1/3" />
            </div>
            <div className="relative text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about bringing ideas to life through code. Whether you need a web application, 
                mobile app, or custom solution, let's discuss how we can work together to create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  View My Resume
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies I Work With</h2>
            <p className="text-gray-600">The tools and technologies I use to bring projects to life</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.filter(t => t !== 'all').map((tech) => {
              const projectCount = projects.filter(p => p.technologies.includes(tech)).length;
              return (
                <div
                  key={tech}
                  className="group px-6 py-3 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedTech(tech)}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tech}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {projectCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProjectsPage;