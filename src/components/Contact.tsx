"use client";
import 'tailwindcss/tailwind.css'
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });

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
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Error sending email');
    }
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
    </section>
  )
}