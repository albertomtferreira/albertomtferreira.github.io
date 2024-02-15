// import React from "react";
import { NavLink } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import Animation from "../../assets/lotties/AnimationReact.json";
import About from "../about/about.component";
import ProjectsCompleted from "../projects/projects.component";
import ProjectsInProgress from "../projects/projects_in_progress.component";
import Contact from "../contact/contact.component";
import Footter from "../footer/footer.component";

export default function Homepage() {
  return (
    <>
      <section className="bg-light p-5 min-vh-100">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
              <h1 className="">Hello! I am Alberto </h1>
              <h1 className="fw-bold custom-font">Web Developer&Coder .</h1>
              <p className="pt-5">Full stack Development</p>
              <NavLink to="/projects">
                <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">
                  My Work
                </button>
              </NavLink>
            </div>
            <div>
              <Player
                src={Animation}
                className="player"
                loop
                autoplay
                style={{ maxHeight: "500px", maxWidth: "500px" }}
              />
            </div>
          </div>
          <About />
          <ProjectsInProgress />
          <ProjectsCompleted />
          <Contact />
          <Footter />
        </div>
      </section>
    </>
  );
}
