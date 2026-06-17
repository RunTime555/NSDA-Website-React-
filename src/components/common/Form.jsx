import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

const fieldsOfStudy = [
  'Computer Science',
  'Software Engineering',
  'Information Technology',
  'Data Science',
  'Cybersecurity',
  'Other'
];

const universities = [
  'Addis Ababa University',
  'Addis Ababa Science and Technology University',
  'Bahir Dar University',
  'Jimma University',
  'Mekelle University',
  'Haramaya University',
  'Debre Berhan University',
  'Wolaita Sodo University',
  'Other'
];

export default function Form() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telegram: '',
    university: '',
    fieldOfStudy: '',
    reason: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setSubmitted(true);
    
    setTimeout(() => {
      const successDiv = document.getElementById('success-message');
      if (successDiv) {
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        telegram: '',
        university: '',
        fieldOfStudy: '',
        reason: ''
      });
    }, 5000);
  };
  
  return (
    <SectionWrapper id="register" backgroundColor="cloud">
      {/* 🛠️ እዚህ ጋ pt-28 የነበረው ወደ pt-16 ዝቅ ተደርጓል */}
      <div className="form-container pt-16 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#013463] hover:text-[#DDA23A] transition-all duration-200 mb-6 pl-2"
        >
          ← Back
        </button>

        <div className="form-header mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#013463] mb-2">Become a Member. Serve the Ummah.</h2>
          <p className="text-gray-600">Be part of something bigger. Join NSDA to connect with fellow Muslim developers, build impactful projects, and grow your skills in a faith-centered community.</p>
        </div>
        
        {submitted ? (
          <div id="success-message" className="success-message bg-green-50 border border-green-200 p-6 rounded-xl text-center my-8 shadow-sm">
            <h3 className="text-xl font-bold text-green-700 mb-2">🎉 Welcome to NSDA!</h3>
            <p className="text-green-600">We'll contact you soon on Telegram with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-box space-y-6">
            
            {/* Full Name */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="fullName" className="form-label text-xs font-bold text-[#013463]">FULL NAME *</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="form-input border rounded-lg px-4 py-3"
              />
            </div>
            
            {/* Email */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="email" className="form-label text-xs font-bold text-[#013463]">EMAIL ADDRESS *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input border rounded-lg px-4 py-3"
              />
            </div>

            {/* Telegram Username */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="telegram" className="form-label text-xs font-bold text-[#013463]">TELEGRAM USERNAME *</label>
              <input
                id="telegram"
                type="text"
                name="telegram"
                required
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@yourusername"
                className="form-input border rounded-lg px-4 py-3"
              />
            </div>
            
            {/* University */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="university" className="form-label text-xs font-bold text-[#013463]">UNIVERSITY / ORGANIZATION *</label>
              <select
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="form-select border rounded-lg px-4 py-3 bg-white"
              >
                <option value="">Select your university</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
            </div>
            
            {/* Field of Study */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="fieldOfStudy" className="form-label text-xs font-bold text-[#013463]">FIELD OF STUDY *</label>
              <select
                id="fieldOfStudy"
                name="fieldOfStudy"
                required
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="form-select border rounded-lg px-4 py-3 bg-white"
              >
                <option value="">Select your field of study</option>
                {fieldsOfStudy.map((field) => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>
            
            {/* Reason */}
            <div className="form-group flex flex-col gap-1">
              <label htmlFor="reason" className="form-label text-xs font-bold text-[#013463]">WHY DO YOU WANT TO JOIN NSDA? *</label>
              <textarea
                id="reason"
                name="reason"
                required
                rows="4"
                value={formData.reason}
                onChange={handleChange}
                className="form-textarea border rounded-lg px-4 py-3"
                placeholder="Share your vision for using tech to serve the Ummah..."
              />
            </div>
            
            <button type="submit" className="btn-submit w-full bg-[#013463] text-white font-bold py-4 rounded-full hover:bg-[#DDA23A] transition-colors duration-200 shadow-md">
              Join NSDA Now
            </button>
            
            <p className="form-note text-center text-sm text-gray-500">
              We'll contact you on Telegram after review.
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}