import { FaBootstrap } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100">
        <h5 align="center">
          Currently living in London (UK) and working on a total different
          environment than IT!
        </h5>
        <p className="text-jusify lead m-4">
          Ever since we got our first PC at home to share with my sisters, I've
          had a passion for IT. I was about 9 or 10 years old at the time, and
          the arrival of an IT company that delivered and left us with some card
          boxes sparked my interest in the field. We had no idea what to do with
          them at the time, but that's where my journey began, with a Windows
          3.11 operating system. Over the years, I've had many adventures and
          misadventures in IT, which I may detail sometime in the future. Fast
          forward to 2020, I decided to get back into coding and development,
          and enrolled in an e-learning platform called{" "}
          <a href="https://www.udemy.com/">Udemy</a>. I attended some trainings
          from <a href="https://github.com/aneagoie">Andrei Neagoie</a> and his
          team at
          <a href="https://github.com/zero-to-mastery">Zero to Mastery</a>, and
          I found that coding and being able to produce something from scratch
          is a passion and a therapy after intense days at work.
        </p>

        <a
          href={"resume"}
          download
          className="btn btn-primary mt-5 custom-btn fw-bold"
        >
          Download My Resume
        </a>
        <h3 className="pt-5 pb-2 custom-color">I am currently Learning:</h3>
        <p className="me-2 ">
          <a className="me-2 " href="https://getbootstrap.com/" target="_blank">
            <FaBootstrap
              className="m-2"
              style={{ width: "40", height: "40", color: "#7a14f5" }}
            />
          </a>

          <a
            className="me-2 "
            href="https://en.wikipedia.org/wiki/HTML5"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
              alt="HTML5"
              width="40"
              height="40"
            />
          </a>
          <a className="me-2 " href="https://www.java.com/" target="_blank">
            <img
              src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
              alt="Java"
              width="40"
              height="40"
            />
          </a>
          <a className="me-2 " href="https://nodejs.org/" target="_blank">
            <img
              src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
              alt="Node.js"
              width="40"
              height="40"
            />
          </a>
          <a
            className="me-2 "
            href="https://www.javascript.com/"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              alt="JavaScript"
              width="40"
              height="40"
            />
          </a>
          <a
            className="me-2 "
            href="https://www.postgresql.org/"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
              width="40"
              height="40"
            />
          </a>
          <a className="me-2 " href="https://reactjs.org/" target="_blank">
            <img
              src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
              alt="React"
              width="40"
              height="40"
            />
          </a>
          <a
            className="me-2 "
            href="https://www.w3schools.com/css/"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
              alt="CSS3"
              width="40"
              height="40"
            />
          </a>
          <a
            className="me-2 "
            href="https://www.typescriptlang.org/"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
              alt="TypeScript"
              width="40"
              height="40"
            />
          </a>
          <a className="me-2 " href="https://sass-lang.com/" target="_blank">
            <img
              src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
              alt="Sass"
              width="40"
              height="40"
            />
          </a>
          <a className="me-2 " href="https://www.linux.org/" target="_blank">
            <img
              src="https://profilinator.rishav.dev/skills-assets/linux-original.svg"
              alt="Linux"
              width="40"
              height="40"
            />
          </a>
          <a
            className="me-2 "
            href="https://firebase.google.com/"
            target="_blank"
          >
            <img
              src="https://profilinator.rishav.dev/skills-assets/firebase.png"
              alt="Firebase"
              width="40"
              height="40"
            />
          </a>
        </p>
        <h3 className="pt-5 pb-2 custom-color">These are my tools:</h3>
        <p className="me-2 ">
          <img
            className="me-2 "
            alt="Static Badge"
            src="https://img.shields.io/badge/OS-Windows-blue?style=plastic&logo=Windows&logoColor=white"
          />
          <img
            className="me-2 "
            alt="Static Badge"
            src="https://img.shields.io/badge/Tools-Git-blue?style=plastic&logo=Github&logoColor=white"
          />
          <img
            className="me-2 "
            alt="Static Badge"
            src="https://img.shields.io/badge/Editor-Visual%20Studio-blue?style=plastic&logo=visual%20studio&logoColor=white"
          />
        </p>
      </div>
    </>
  );
}
