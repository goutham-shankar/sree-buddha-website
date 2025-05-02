"use client";
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaUser, FaIdBadge, FaMapMarkerAlt } from 'react-icons/fa';
import "./contact.css";

export default function Contact() {
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </div>



      <div className="contact-content">
        {activeTab === 'details' && (
          <div className="contact-details-container">
            <div className="contact-card">
              <div className="contact-image">
                <div className="placeholder-avatar">
                  <FaUser className="avatar-icon" />
                </div>
              </div>
              <div className="contact-info">
                <h3>R. Pradeep Kumar</h3>

                <div className="info-item">
                  <div className="icon-wrapper">
                    <FaIdBadge />
                  </div>
                  <span>Placement Officer</span>
                </div>

                <div className="info-item">
                  <div className="icon-wrapper">
                    <FaPhone />
                  </div>
                  <span>09446472562, 09656164464</span>
                </div>

                <div className="info-item">
                  <div className="icon-wrapper">
                    <FaEnvelope />
                  </div>
                  <div className="stacked-info">
                    <span>placementcell@sbce.ac.in</span>
                    <span>sbceplacementcell@gmail.com</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-wrapper">
                    <FaGlobe />
                  </div>
                  <a href="https://www.sbce.ac.in" target="_blank" rel="noopener noreferrer">
                    www.sbce.ac.in
                  </a>
                </div>

                <div className="info-item">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt />
                  </div>
                  <span>SBCE Campus</span>
                </div>
              </div>
            </div></div>
        )}</div>  </div>



  );
}