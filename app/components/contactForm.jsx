"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function ContactFormModal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xpwlakbd"); // Replace with real form ID
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset form submission state when modal is closed
      setWasSubmitted(false);
    }
  }, [isOpen]);

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    setWasSubmitted(true);
  };

  if (!isOpen) return null;

  if (state.succeeded && wasSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-xl max-w-md w-full text-white text-center">
          <p className="mb-4">Thank you! We'll get back to you shortly.</p>
          <button onClick={onClose} className="text-indigo-400 hover:underline">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-xl max-w-md w-full text-white relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl">
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4">Send us a message</h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-md text-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full mt-1 px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-md text-white"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-2 rounded-md font-semibold"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
