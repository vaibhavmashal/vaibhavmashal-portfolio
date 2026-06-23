"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.description,
        }),
      });
      if (response.ok) {
        setShowSuccessDialog(true);
        setFormData({ name: '', email: '', description: '' });
      } else {
        alert('Error sending email');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Error sending email');
    }
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <section id='contact' className="text-center py-20">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Contact Me
        </span>
      </h1>
      <p className="max-w-2xl mx-auto mb-6 mt-5 font-bold">
        {/* We love to hear from you! Please fill out the form below and we ll get in touch with you as soon as possible. */}
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl border border-gray-600 rounded-md py-5 px-6 mx-auto space-y-4 mt-10 transform transition duration-500 ease-in-out hover:scale-105">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-icon transform transition duration-500 ease-in-out hover:scale-105"
        >
          Submit
        </button>
      </form>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-emerald-600 rounded-lg shadow-lg p-8 max-w-md mx-auto animate-in fade-in duration-300">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold text-center mb-2 text-emerald-400">Success!</h2>
            <p className="text-center text-gray-300 mb-6">
              Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleCloseDialog}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-200 font-medium"
              >
                Close
              </button>
              <button
                onClick={handleCloseDialog}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition duration-200 font-medium"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}