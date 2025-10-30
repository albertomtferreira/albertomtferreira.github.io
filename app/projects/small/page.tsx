import ProjectCard from "@/components/ProjectCard";
import projectData from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Projects - Alberto Ferreira',
  description: 'Browse small projects and experiments by Alberto Ferreira',
};

export default function SmallProjects() {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <h2 className="custom-font pb-5 text-center">Small Projects:</h2>
        {projectData.SmallProjects.map((project) => (
          <div className="col-12 d-flex justify-content-center" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
