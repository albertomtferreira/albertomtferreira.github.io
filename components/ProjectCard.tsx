import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Project } from "@/lib/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { img, name, stack, live, source, description } = project;

  return (
    <div className="card mb-5" style={{ maxWidth: "900px" }}>
      <div className="g-0 d-flex flex-column flex-lg-row align-items-center">
        <div>
          <Image
            src={img}
            width={300}
            height={200}
            className="img-fluid rounded-start project-img"
            alt={name}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="mt-5 align-text-bottom">
              <p className="card-text d-flex gap-2 flex-wrap">{stack}</p>
              <p className="card-text d-flex gap-4">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Live Site <BiLinkExternal style={{ color: "hsl(205, 72%, 37%)" }} />
                </a>
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Source Code <AiOutlineGithub style={{ color: "hsl(205, 72%, 37%)" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
