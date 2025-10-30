'use client';

import {
  FaBootstrap,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaSass,
  FaLinux,
  FaGitAlt,
  FaWindows,
  FaCode
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiFirebase
} from "react-icons/si";

interface SkillIconProps {
  icon: React.ReactNode;
  name: string;
  color?: string;
}

function SkillIcon({ icon, name, color }: SkillIconProps) {
  return (
    <div className="d-flex flex-column align-items-center m-3" style={{ minWidth: '80px' }}>
      <div
        className="d-flex align-items-center justify-content-center mb-2"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          backgroundColor: 'var(--card-bg)',
          border: '2px solid var(--border-color)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ color: color || 'var(--text-primary)', fontSize: '32px' }}>
          {icon}
        </div>
      </div>
      <span className="text-center small text-muted">{name}</span>
    </div>
  );
}

export default function About() {
  const frontendSkills = [
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <FaSass />, name: 'Sass', color: '#CC6699' },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
  ];

  const tools = [
    { icon: <FaWindows />, name: 'Windows', color: '#0078D6' },
    { icon: <FaLinux />, name: 'Linux', color: '#FCC624' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaCode />, name: 'VS Code', color: '#007ACC' },
  ];

  return (
    <div className="container-fluid bg-light pt-5 pb-5 min-vh-100">
      <div className="container">
        {/* Introduction */}
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto text-center">
            <h2 className="custom-font mb-4">About Me</h2>
            <p className="lead mb-3">
              Currently living in London (UK) and working on a total different
              environment than IT!
            </p>
            <p className="text-muted">
              I became interested in IT when we got our first PC at home when I was
              9 or 10. Over the years, I&apos;ve had many experiences in the field. In
              2020, I enrolled in <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="link">Udemy</a> and
              received training from{" "}
              <a href="https://github.com/zero-to-mastery" target="_blank" rel="noopener noreferrer" className="link">Zero to Mastery</a>. I
              discovered that coding is a passion and therapeutic relief after work.
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary mt-4 custom-btn fw-bold px-5 py-2"
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-5 custom-color">Technical Skills</h3>

            {/* Frontend Skills */}
            <div className="mb-5">
              <h4 className="mb-4 fw-semibold" style={{ color: 'var(--clr-primary-3)' }}>
                Frontend Development
              </h4>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                {frontendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-5">
              <h4 className="mb-4 fw-semibold" style={{ color: 'var(--clr-primary-3)' }}>
                Backend & Database
              </h4>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                {backendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-5">
              <h4 className="mb-4 fw-semibold" style={{ color: 'var(--clr-primary-3)' }}>
                Tools & Environment
              </h4>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                {tools.map((tool) => (
                  <SkillIcon key={tool.name} {...tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
