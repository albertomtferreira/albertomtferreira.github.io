'use client';

import { useRef, FormEvent } from 'react';
import LottiePlayer from '@/components/LottiePlayer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_9c5a64n',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_zrfukag',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'aEwIOQV4EQvfL485S'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          form.current?.reset();
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <h2 className="custom-font pb-5 text-center">Get In Touch</h2>
      <div className="d-sm-flex align-items-center justify-content-center">
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: 'none' }} className="p-4">
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  placeholder="Subject"
                  className="form-control form-class"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="form-control form-class"
                  rows={5}
                />
              </li>
              <li>
                <input
                  type="submit"
                  className="btn btn-primary custom-btn fw-bold m-3 px-5"
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
        <div>
          <LottiePlayer
            src="/lotties/AnimationContact.json"
            className="player d-md-none d-lg-block"
            style={{ maxHeight: '500px', maxWidth: '500px' }}
          />
        </div>
      </div>
    </div>
  );
}
