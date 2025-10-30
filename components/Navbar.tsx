'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Main navigation">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <Image
            src="/images/alberto.svg"
            alt="logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          <span className="navbar-brand col-lg-3 me-0">Alberto&apos;s Portfolio</span>

          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="/projects/small"
                    className={`nav-link ${pathname === '/projects/small' ? 'active' : ''}`}
                  >
                    Small Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/large"
                    className={`nav-link ${pathname === '/projects/large' ? 'active' : ''}`}
                  >
                    Large Projects
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hobbies
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="nav-link"
                    href="https://taoreiki.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tao Reiki
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="https://breadmate.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bread Mate
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
