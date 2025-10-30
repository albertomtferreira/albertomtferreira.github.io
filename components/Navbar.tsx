"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary rounded"
      aria-label="Main navigation"
    >
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

        <div
          className="collapse navbar-collapse d-lg-flex"
          id="navbarsExample11"
        >
          <Image
            src="../images/alberto.svg"
            alt="logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          <span className="navbar-brand col-lg-3 me-0">
            Alberto&apos;s Portfolio
          </span>

          <ul className="navbar-nav col-lg-5 justify-content-lg-center">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/projects"
                className={`nav-link ${
                  pathname?.startsWith("/projects") ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact me
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
