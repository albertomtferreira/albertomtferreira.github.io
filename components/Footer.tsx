import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-light border-top mt-auto">
      <footer className="container py-5">
        <div className="row">
          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 custom-color">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="link text-body-secondary text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="link text-body-secondary text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="link text-body-secondary text-decoration-none">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="link text-body-secondary text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hobbies & Interests */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 custom-color">Hobbies & Interests</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://taoreiki.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-body-secondary text-decoration-none"
                >
                  Tao Reiki
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://breadmate.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-body-secondary text-decoration-none"
                >
                  Bread Mate
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Copyright */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3 custom-color">Connect</h5>
            <div className="d-flex gap-3 mb-3">
              <a
                className="text-body-secondary"
                href="https://twitter.com/albertoferreira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{ transition: 'color 0.3s ease' }}
              >
                <FaTwitter size={24} />
              </a>
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/in/albertomtferreira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ transition: 'color 0.3s ease' }}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className="text-body-secondary"
                href="https://github.com/albertomtferreira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ transition: 'color 0.3s ease' }}
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-body-secondary small mb-0">
              &copy; {currentYear} Alberto Ferreira
            </p>
            <p className="text-body-secondary small">
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
