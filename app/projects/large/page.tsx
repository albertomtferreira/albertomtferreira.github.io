import ProjectCard from "@/components/ProjectCard";
import projectData from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Large Projects - Alberto Ferreira',
  description: 'Explore major projects and full-stack applications by Alberto Ferreira',
};

export default function LargeProjects() {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h2 className="custom-font pb-5 text-center">Large Projects:</h2>
        {projectData.LargeProjects.map((project) => (
          <div className="col-12 d-flex justify-content-center" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
