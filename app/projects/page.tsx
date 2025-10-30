'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { allProjects } from '@/lib/data';
import { ProjectCategory } from '@/lib/types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: (ProjectCategory | 'All')[] = ['All', 'Full Stack', 'Frontend', 'Learning'];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="custom-font pb-3 text-center">My Projects</h2>
          <p className="text-center text-muted mb-4">
            Explore my portfolio of web development projects
          </p>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="row mb-4">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn ${
                  selectedCategory === category
                    ? 'btn-primary custom-btn'
                    : 'btn-outline-primary'
                } fw-semibold px-4`}
                style={{
                  borderColor: 'var(--clr-primary-3)',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="row">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="col-12 d-flex justify-content-center" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Project Count */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="text-muted">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
}
