"use client";

import React, { useState } from "react";
import "./style.css";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("https://your-backend-endpoint.com/api/contact", {
    //     method: "POST", 
    //     headers: {
    //       "Content-Type": "application/json", 
    //     },
    //     body: JSON.stringify(form), 
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log("Form submitted successfully:", result);
    //     alert("Form submitted successfully!");
    //   } else {
    //     console.error("Failed to submit form:", response.status);
    //     alert("Failed to submit form. Please try again later.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    //   alert("An error occurred. Please check your connection and try again.");
    // }
    console.log(form)
  };

  return (
    <div className="page">
      <h3 className="page_heading">Contact Us</h3>
      <div className="line"></div>

      <h3 className="page_heading2">Sree Buddha College of Engineering</h3>
      <p>
        Pattoor P.O., Nooranad <br />
        Alappuzha District <br />
        Kerala <br />
        India <br />
        Pin:690529 <br />
      </p>
      <p>
        College: +91 479 2375440,42; <br />
        Email: principal@sbce.ac.in
      </p>

      <h3 className="page_heading2">Feedback</h3>
      <p>Please use the contact form in case you need to contact the personnel directly.</p>

      <form className="form">
        <div className="form_item">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form_item">
          <label htmlFor="email">
            Your Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form_item">
          <label htmlFor="subject">
            Subject <span>*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
          />
        </div>

        <div className="form_item">
          <label htmlFor="message">
            Your Message <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
          />
        </div>
      </form>

      <button className="send" onClick={handleClick}>
        Send
      </button>
    </div>
  );
}
