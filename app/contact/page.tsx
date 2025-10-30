"use client";

import { useRef, FormEvent, useState } from "react";
import LottiePlayer from "@/components/LottiePlayer";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!subject || subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);

    if (!validateForm(formData)) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_9c5a64n",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_zrfukag",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aEwIOQV4EQvfL485S"
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you soon."
          );
          form.current?.reset();
          setErrors({});
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error(
            "Failed to send message. Please try again or contact me directly."
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <h2 className="custom-font pb-5 text-center">Get In Touch</h2>
      <div className="d-sm-flex align-items-start justify-content-center gap-5">
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            noValidate
          >
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-semibold">
                Name <span className="text-danger">*</span>
              </label>
              <input
                id="name"
                className={`form-control form-class shadow-sm ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Your name"
                type="text"
                name="name"
                disabled={isLoading}
              />
              {errors.name && (
                <div className="invalid-feedback d-block">{errors.name}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold">
                Email <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                className={`form-control form-class shadow-sm ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="your.email@example.com"
                type="email"
                name="email"
                disabled={isLoading}
              />
              {errors.email && (
                <div className="invalid-feedback d-block">{errors.email}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="form-label fw-semibold">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                id="subject"
                placeholder="What's this about?"
                className={`form-control form-class shadow-sm ${
                  errors.subject ? "is-invalid" : ""
                }`}
                type="text"
                name="subject"
                disabled={isLoading}
              />
              {errors.subject && (
                <div className="invalid-feedback d-block">{errors.subject}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-semibold">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Your message here..."
                name="message"
                className={`form-control form-class shadow-sm ${
                  errors.message ? "is-invalid" : ""
                }`}
                rows={5}
                disabled={isLoading}
              />
              {errors.message && (
                <div className="invalid-feedback d-block">{errors.message}</div>
              )}
              <small className="text-muted">Minimum 10 characters</small>
            </div>

            <button
              type="submit"
              className="btn btn-primary custom-btn fw-bold px-5 py-2 d-flex align-items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        <div className="d-none d-lg-block">
          <DotLottieReact
            src="/lotties/AnimationContact.json"
            style={{ height: "400px" }}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
