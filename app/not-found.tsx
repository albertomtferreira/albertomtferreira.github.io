import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
      <div style={{ maxWidth: '600px' }}>
        <h1 className="display-1 fw-bold custom-font" style={{ fontSize: '8rem' }}>
          404
        </h1>
        <h2 className="mb-4 custom-color">Page Not Found</h2>
        <p className="lead mb-5">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
          It might have been moved or deleted.
        </p>
        <Link href="/">
          <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold d-inline-flex align-items-center gap-2">
            <FaHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
