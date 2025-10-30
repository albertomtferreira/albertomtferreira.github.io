'use client';

import Link from 'next/link';
import LottiePlayer from '@/components/LottiePlayer';

export default function Homepage() {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
            <h1>Hello! I am Alberto</h1>
            <h1 className="fw-bold custom-font">Web Developer & Coder.</h1>
            <p className="pt-5">Full stack Development</p>
            <Link href="/projects">
              <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">
                View My Projects
              </button>
            </Link>
          </div>
          <div>
            <LottiePlayer
              src="/lotties/AnimationReact.json"
              className="player"
              style={{ maxHeight: "500px", maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
