'use client';

import { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
      <div style={{ maxWidth: '600px' }}>
        <FaExclamationTriangle
          size={80}
          className="text-warning mb-4"
        />
        <h2 className="mb-4 custom-color">Something went wrong!</h2>
        <p className="lead mb-4">
          We&apos;re sorry, but something unexpected happened.
          Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="btn btn-primary custom-btn ps-5 pe-5 fw-bold"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
