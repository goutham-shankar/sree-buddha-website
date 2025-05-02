"use client";
import React, { useState, useEffect } from "react";
import "./style.css";

const initialFormData = {
  // Personal Information
  name: '',
  dob: '',
  gender: '',
  nationality: '',
  religion: '',
  community: '',
  motherTongue: '',
  guardian: '',
  relationship: '',
  address: '',
  pincode: '',
  telephone: '',
  mobile: '',
  email: '',

  // UG Qualification
  degree: '',
  discipline: '',
  university: '',
  institute: '',
  dateOfPass: '',
  cgpa: '',
  s1: '',
  s2: '',
  s3: '',
  s4: '',
  s5: '',
  s6: '',
  s7: '',
  s8: '',

 // PG/Entrance/Admission
 pgCourse: "",
 gateValid: "",
 gateYear: "",
 gateScore: "",
 dteRegNo: "",
 dteRank: "",
 admissionType: "",

 // Declaration
 declarationAccepted: false,
 place: '',
 date: new Date().toISOString().split("T")[0], // Set today's date in yyyy-mm-dd format

 // Documents
 sign: null,
 signPreview: null,
 pic: null,
 picPreview: null,
};

const formSections = [
  "Personal Information",
  "Guardian Information",
  "Contact Information",
  "UG Qualification",
  "PG/Entrance & Admission",
  "Document Uploads",
];

const sectionFields = {
  0: [
    "name",
    "dob",
    "gender",
    "nationality",
    "religion",
    "community",
    "motherTongue",
  ],
  1: ["guardian", "relationship"],
  2: ["address", "pincode", "mobile", "email"],
  3: [
    "degree",
    "discipline",
    "university",
    "institute",
    "dateOfPass",
    "cgpa", 
  ],
  4: [
    "pgCourse",
    "gateValid",
    "gateYear",
    "gateScore",
    "dteRegNo",
    "dteRank",
    "admissionType"
  ],
  5: ["pic", "declarationAccepted", "sign", "place", "date"],
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // If date is not set, set it to today (for reset cases)
    if (!formData.date) {
      setFormData((prev) => ({
        ...prev,
        date: new Date().toISOString().split("T")[0],
      }));
    }
    return () => {
      if (formData.signPreview) URL.revokeObjectURL(formData.signPreview);
      if (formData.picPreview) URL.revokeObjectURL(formData.picPreview);
    };
    // eslint-disable-next-line
  }, [formData.signPreview, formData.picPreview]);

  useEffect(() => {
    // Always set date in yyyy-MM-dd format for backend
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formatted = `${yyyy}-${mm}-${dd}`;
    if (formData.date !== formatted) {
      setFormData((prev) => ({
        ...prev,
        date: formatted,
      }));
    }
    return () => {
      if (formData.signPreview) URL.revokeObjectURL(formData.signPreview);
      if (formData.picPreview) URL.revokeObjectURL(formData.picPreview);
    };
    // eslint-disable-next-line
  }, [formData.signPreview, formData.picPreview]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "declarationAccepted") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name === "admissionType") {
      // Always store as lowercase for backend validation
      setFormData((prev) => ({
        ...prev,
        [name]: value.toLowerCase(),
      }));
    } else if (name === "gateValid") {
      // Store as boolean for backend validation
      setFormData((prev) => ({
        ...prev,
        [name]: value === "Yes",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const fileType = files[0].type;
      if (!fileType.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Please upload an image file (JPEG, PNG, etc.)",
        }));
        return;
      }
      if (files[0].size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [name]: "File size must be less than 2MB",
        }));
        return;
      }
      const fileUrl = URL.createObjectURL(files[0]);
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
        [`${name}Preview`]: fileUrl,
      }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const validateSection = (sectionIndex) => {
    let tempErrors = {};
    let isValid = true;
    sectionFields[sectionIndex].forEach((field) => {
      if (
        (Array.isArray(formData[field]) && formData[field].length === 0) ||
        (!Array.isArray(formData[field]) && !formData[field])
      ) {
        if (field === "declarationAccepted" && !formData[field]) {
          tempErrors[field] = "You must accept the declaration";
          isValid = false;
        } else if (field !== "declarationAccepted") {
          tempErrors[field] = "This field is required";
          isValid = false;
        }
      }
    });
    if (sectionIndex === 2) {
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address";
        isValid = false;
      }
      if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
        tempErrors.mobile = "Please enter a valid 10-digit mobile number";
        isValid = false;
      }
      if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
        tempErrors.pincode = "Please enter a valid 6-digit PIN code";
        isValid = false;
      }
    }
    if (sectionIndex === 3) {
      // CGPA/Percentage must be a number
      if (
        formData.cgpa &&
        isNaN(Number(formData.cgpa.replace(/,/g, '.')))
      ) {
        tempErrors.cgpa = "CGPA/Percentage must be a number";
        isValid = false;
      }
    }
    setErrors((prev) => ({ ...prev, ...tempErrors }));
    return isValid;
  };

  const handleNavigateSection = (nextIndex) => {
    if (nextIndex > activeSection) {
      if (!validateSection(activeSection)) {
        const firstErrorField = document.querySelector(".form-error");
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }
    }
    setActiveSection(nextIndex);
    const sectionElement = document.getElementById(`section-${nextIndex}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let allValid = true;
    let allErrors = {};

    Object.keys(sectionFields).forEach((sectionIndex) => {
      let tempErrors = {};
      let isValid = true;
      sectionFields[sectionIndex].forEach((field) => {
        if (
          (Array.isArray(formData[field]) && formData[field].length === 0) ||
          (!Array.isArray(formData[field]) && !formData[field])
        ) {
          if (field === "declarationAccepted" && !formData[field]) {
            tempErrors[field] = "You must accept the declaration";
            isValid = false;
          } else if (field !== "declarationAccepted") {
            tempErrors[field] = "This field is required";
            isValid = false;
          }
        }
      });
      if (parseInt(sectionIndex) === 2) {
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = "Please enter a valid email address";
          isValid = false;
        }
        if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
          tempErrors.mobile = "Please enter a valid 10-digit mobile number";
          isValid = false;
        }
        if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
          tempErrors.pincode = "Please enter a valid 6-digit PIN code";
          isValid = false;
        }
      }
      if (parseInt(sectionIndex) === 3) {
        // CGPA/Percentage must be a number
        if (
          formData.cgpa &&
          isNaN(Number(formData.cgpa.replace(/,/g, '.')))
        ) {
          tempErrors.cgpa = "CGPA/Percentage must be a number";
          isValid = false;
        }
      }
      if (!isValid) {
        allValid = false;
        allErrors = { ...allErrors, ...tempErrors };
      }
    });

    setErrors(allErrors);

    if (!allValid) {
      const firstErrorField = document.querySelector(".form-error");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      const firstErrorSection = Object.keys(sectionFields).find((sectionIndex) =>
        sectionFields[sectionIndex].some((field) => allErrors[field])
      );
      if (firstErrorSection !== undefined) {
        setActiveSection(Number(firstErrorSection));
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const fileUpload = new FormData();
      if (formData.pic) fileUpload.append("files", formData.pic);
      if (formData.sign) fileUpload.append("files", formData.sign);

      let picId = null;
      let signId = null;
      if (formData.pic || formData.sign) {
        const uploadResponse = await fetch(process.env.NEXT_PUBLIC_STRAPI + "/api/upload", {
          method: "POST",
          body: fileUpload,
        });
        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok) {
          setErrors({ submit: "File upload failed. Please try again." });
          setIsSubmitting(false);
          return;
        }
        if (formData.pic) picId = uploadData.find(f => f.name === formData.pic.name)?.id;
        if (formData.sign) signId = uploadData.find(f => f.name === formData.sign.name)?.id;
      }

      const payload = {
        ...formData,
        pic: picId,
        sign: signId,
      };

      delete payload.picPreview;
      delete payload.signPreview;

      await fetch(process.env.NEXT_PUBLIC_STRAPI + '/api/mtech-admissions', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
      });
      setSubmitSuccess(true);
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionHasErrors = (sectionIndex) =>
    sectionFields[sectionIndex]?.some((field) => errors[field]);

  if (submitSuccess) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon-container">
            <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="success-title">Application Submitted!</h2>
          <p className="success-message">
            Your application has been successfully submitted. You will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData(initialFormData);
              setActiveSection(0);
              setErrors({});
            }}
            className="btn btn-primary"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="header">
        <div className="container">
          <h1>M.Tech Application Form</h1>
        </div>
      </div>
      <div className="form-container py-8">
        <div className="hidden sm:block mb-8">
          <div className="form-progress">
            {formSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`form-progress-step ${activeSection === index ? "active" : ""} ${
                  sectionHasErrors(index) ? "has-error" : ""
                }`}
              >
                <div className="hidden md:block">{section}</div>
                <div className="block md:hidden">{index + 1}</div>
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          {/* Section 0: Personal Information */}
          <div id="section-0" className={`form-section ${activeSection === 0 ? "block" : "hidden"}`}>
            <div className="form-section-header">
              <h2>Personal Information</h2>
            </div>
            <div className="form-section-content">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name of Applicant*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dob">Date of Birth*</label>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`form-input ${errors.dob ? "error" : ""}`}
                  />
                  {errors.dob && <p className="form-error">{errors.dob}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label">Gender*</label>
                  <div className="form-radio-group">
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                  {errors.gender && <p className="form-error">{errors.gender}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="nationality">Nationality*</label>
                  <input
                    id="nationality"
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={`form-input ${errors.nationality ? "error" : ""}`}
                    placeholder="Enter nationality"
                  />
                  {errors.nationality && <p className="form-error">{errors.nationality}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="religion">Religion*</label>
                  <input
                    id="religion"
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className={`form-input ${errors.religion ? "error" : ""}`}
                    placeholder="Enter religion"
                  />
                  {errors.religion && <p className="form-error">{errors.religion}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="community">Community*</label>
                  <input
                    id="community"
                    type="text"
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className={`form-input ${errors.community ? "error" : ""}`}
                    placeholder="Enter community"
                  />
                  {errors.community && <p className="form-error">{errors.community}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="motherTongue">Mother Tongue*</label>
                  <input
                    id="motherTongue"
                    type="text"
                    name="motherTongue"
                    value={formData.motherTongue}
                    onChange={handleChange}
                    className={`form-input ${errors.motherTongue ? "error" : ""}`}
                    placeholder="Enter mother tongue"
                  />
                  {errors.motherTongue && <p className="form-error">{errors.motherTongue}</p>}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => handleNavigateSection(1)}
                  className="btn btn-primary btn-icon-right"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Section 1: Guardian Information */}
          <div id="section-1" className={`form-section ${activeSection === 1 ? "block" : "hidden"}`}>
            <div className="form-section-header">
              <h2>Guardian Information</h2>
            </div>
            <div className="form-section-content">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="guardian">Name of Parent/Guardian*</label>
                  <input
                    id="guardian"
                    type="text"
                    name="guardian"
                    value={formData.guardian}
                    onChange={handleChange}
                    className={`form-input ${errors.guardian ? "error" : ""}`}
                    placeholder="Enter parent/guardian name"
                  />
                  {errors.guardian && <p className="form-error">{errors.guardian}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="relationship">Relationship with Guardian*</label>
                  <input
                    id="relationship"
                    type="text"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    className={`form-input ${errors.relationship ? "error" : ""}`}
                    placeholder="e.g. Father, Mother, Uncle"
                  />
                  {errors.relationship && <p className="form-error">{errors.relationship}</p>}
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigateSection(0)}
                  className="btn btn-outline btn-icon-left"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection(2)}
                  className="btn btn-primary btn-icon-right"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Section 2: Contact Information */}
          <div id="section-2" className={`form-section ${activeSection === 2 ? "block" : "hidden"}`}>
            <div className="form-section-header">
              <h2>Contact Information</h2>
            </div>
            <div className="form-section-content">
              <div className="form-group mb-6">
                <label className="form-label" htmlFor="address">Address for Communication*</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className={`form-input ${errors.address ? "error" : ""}`}
                  placeholder="Enter your complete address"
                ></textarea>
                {errors.address && <p className="form-error">{errors.address}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="pincode">PIN Code*</label>
                  <input
                    id="pincode"
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    maxLength="6"
                    className={`form-input ${errors.pincode ? "error" : ""}`}
                    placeholder="Enter 6-digit PIN code"
                  />
                  {errors.pincode && <p className="form-error">{errors.pincode}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mobile">Mobile*</label>
                  <input
                    id="mobile"
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength="10"
                    className={`form-input ${errors.mobile ? "error" : ""}`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <p className="form-error">{errors.mobile}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigateSection(1)}
                  className="btn btn-outline btn-icon-left"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection(3)}
                  className="btn btn-primary btn-icon-right"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
         
{/* Section 3: UG Qualification */}
<div id="section-3" className={`form-section ${activeSection === 3 ? "block" : "hidden"}`}>
  <div className="form-section-header">
    <h2>UG Qualification</h2>
  </div>
  <div className="form-section-content">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="form-group">
        <label className="form-label" htmlFor="degree">Degree*</label>
        <input
          id="degree"
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          className={`form-input ${errors.degree ? "error" : ""}`}
          placeholder="e.g. B.Tech, B.E."
        />
        {errors.degree && <p className="form-error">{errors.degree}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="discipline">Discipline*</label>
        <input
          id="discipline"
          type="text"
          name="discipline"
          value={formData.discipline}
          onChange={handleChange}
          className={`form-input ${errors.discipline ? "error" : ""}`}
          placeholder="e.g. Computer Science"
        />
        {errors.discipline && <p className="form-error">{errors.discipline}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="university">University*</label>
        <input
          id="university"
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          className={`form-input ${errors.university ? "error" : ""}`}
          placeholder="Enter university name"
        />
        {errors.university && <p className="form-error">{errors.university}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="institute">Institute*</label>
        <input
          id="institute"
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          className={`form-input ${errors.institute ? "error" : ""}`}
          placeholder="Enter institute name"
        />
        {errors.institute && <p className="form-error">{errors.institute}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="dateOfPass">Year and Month of Passing*</label>
        <input
          id="dateOfPass"
          type="month"
          name="dateOfPass"
          value={formData.dateOfPass}
          onChange={handleChange}
          className={`form-input ${errors.dateOfPass ? "error" : ""}`}
        />
        {errors.dateOfPass && <p className="form-error">{errors.dateOfPass}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cgpa">CGPA/Percentage*</label>
        <input
          id="cgpa"
          type="text"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          className={`form-input ${errors.cgpa ? "error" : ""}`}
          placeholder="Enter CGPA or percentage"
        />
        {errors.cgpa && <p className="form-error">{errors.cgpa}</p>}
      </div>
    </div>
    <div className="grid md:grid-cols-4 gap-6 mt-6">
      {[1,2,3,4,5,6,7,8].map((num) => (
        <div className="form-group" key={`s${num}`}>
          <label className="form-label" htmlFor={`s${num}`}>{`S${num} Grade*`}</label>
          <input
            id={`s${num}`}
            type="text"
            name={`s${num}`}
            value={formData[`s${num}`]}
            onChange={handleChange}
            className={`form-input ${errors[`s${num}`] ? "error" : ""}`}
            placeholder={`S${num} Grade`}
          />
          {errors[`s${num}`] && <p className="form-error">{errors[`s${num}`]}</p>}
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-between">
      <button
        type="button"
        onClick={() => handleNavigateSection(2)}
        className="btn btn-outline btn-icon-left"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Previous
      </button>
      <button
        type="button"
        onClick={() => handleNavigateSection(4)}
        className="btn btn-primary btn-icon-right"
      >
        Next
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
          {/* Section 4: PG/Entrance & Admission */}
          <div id="section-4" className={`form-section ${activeSection === 4 ? "block" : "hidden"}`}>
            <div className="form-section-header">
              <h2>PG Course, Entrance & Admission</h2>
            </div>
            <div className="form-section-content">
              <div className="form-group mb-6">
                <label className="form-label font-semibold">PG Course Preferred*</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Machine Design",
                    "Structural Engineering & Construction Management",
                    "ECE – Embedded Systems",
                    "Biotechnology and Biochemical Engineering",
                    "Computer Science & Engineering",
                    "ME – Computer Integrated Manufacturing",
                    "CE – Structural Engineering",
                    "EEE– Electrical Machines"
                  ].map((course) => (
                    <label key={course} className="flex items-center mr-4">
                      <input
                        type="radio"
                        name="pgCourse"
                        value={course}
                        checked={formData.pgCourse === course}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">{course}</span>
                    </label>
                  ))}
                </div>
                {errors.pgCourse && <p className="form-error">{errors.pgCourse}</p>}
              </div>
              <div className="form-group mb-6">
                <label className="form-label font-semibold">Hold Valid GATE Score*</label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gateValid"
                      value="Yes"
                      checked={formData.gateValid === true}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gateValid"
                      value="No"
                      checked={formData.gateValid === false}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.gateValid && <p className="form-error">{errors.gateValid}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="gateYear">Year of Appearance*</label>
                  <input
                    id="gateYear"
                    type="text"
                    name="gateYear"
                    value={formData.gateYear}
                    onChange={handleChange}
                    className={`form-input ${errors.gateYear ? "error" : ""}`}
                    placeholder="Year of Appearance"
                  />
                  {errors.gateYear && <p className="form-error">{errors.gateYear}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="gateScore">Gate Score*</label>
                  <input
                    id="gateScore"
                    type="text"
                    name="gateScore"
                    value={formData.gateScore}
                    onChange={handleChange}
                    className={`form-input ${errors.gateScore ? "error" : ""}`}
                    placeholder="Gate Score"
                  />
                  {errors.gateScore && <p className="form-error">{errors.gateScore}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dteRegNo">DTE Register No*</label>
                  <input
                    id="dteRegNo"
                    type="text"
                    name="dteRegNo"
                    value={formData.dteRegNo}
                    onChange={handleChange}
                    className={`form-input ${errors.dteRegNo ? "error" : ""}`}
                    placeholder="DTE Register No"
                  />
                  {errors.dteRegNo && <p className="form-error">{errors.dteRegNo}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dteRank">DTE Rank*</label>
                  <input
                    id="dteRank"
                    type="text"
                    name="dteRank"
                    value={formData.dteRank}
                    onChange={handleChange}
                    className={`form-input ${errors.dteRank ? "error" : ""}`}
                    placeholder="DTE Rank"
                  />
                  {errors.dteRank && <p className="form-error">{errors.dteRank}</p>}
                </div>
              </div>
              <div className="form-group mt-6">
                <label className="form-label font-semibold">Admission sought under*</label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="admissionType"
                      value="merit"
                      checked={formData.admissionType === "merit"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Merit</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="admissionType"
                      value="management"
                      checked={formData.admissionType === "management"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Management</span>
                  </label>
                </div>
                {errors.admissionType && <p className="form-error">{errors.admissionType}</p>}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigateSection(3)}
                  className="btn btn-outline btn-icon-left"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection(5)}
                  className="btn btn-primary btn-icon-right"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Section 5: Document Uploads */}
          <div id="section-5" className={`form-section ${activeSection === 5 ? "block" : "hidden"}`}>
            <div className="form-section-header">
              <h2>Document Uploads</h2>
            </div>
            <div className="form-section-content">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="pic">Passport Size Photo*</label>
                  <div className={`file-upload ${errors.pic ? "error" : ""}`}>
                    <input
                      id="pic"
                      type="file"
                      name="pic"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="file-upload-input"
                    />
                    <label htmlFor="pic" className="file-upload-label">
                      <div className="flex flex-col items-center justify-center py-3">
                        <svg className="file-upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p className="text-sm text-gray-500 mb-1">Click to upload passport photo</p>
                        <p className="text-xs text-gray-400">(Max size: 2MB)</p>
                      </div>
                    </label>
                    {formData.pic && (
                      <div className="file-preview">
                        <p className="text-sm text-gray-700 mb-2">File selected: {formData.pic.name}</p>
                        {formData.picPreview && (
                          <div className="photo-preview">
                            <img src={formData.picPreview} alt="Passport photo preview" className="img-cover" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {errors.pic && <p className="form-error">{errors.pic}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="sign">Signature*</label>
                  <div className={`file-upload ${errors.sign ? "error" : ""}`}>
                    <input
                      id="sign"
                      type="file"
                      name="sign"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="file-upload-input"
                    />
                    <label htmlFor="sign" className="file-upload-label">
                      <div className="flex flex-col items-center justify-center py-3">
                        <svg className="file-upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                        <p className="text-sm text-gray-500 mb-1">Click to upload your signature</p>
                        <p className="text-xs text-gray-400">(Max size: 2MB)</p>
                      </div>
                    </label>
                    {formData.sign && (
                      <div className="file-preview">
                        <p className="text-sm text-gray-700 mb-2">File selected: {formData.sign.name}</p>
                        {formData.signPreview && (
                          <div className="signature-preview">
                            <img src={formData.signPreview} alt="Signature preview" className="img-contain" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {errors.sign && <p className="form-error">{errors.sign}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="place">Place*</label>
                  <input
                    id="place"
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className={`form-input ${errors.place ? "error" : ""}`}
                    placeholder="Enter place"
                  />
                  {errors.place && <p className="form-error">{errors.place}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="date">Date*</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    disabled
                    className={`form-input ${errors.date ? "error" : ""}`}
                  />
                  {errors.date && <p className="form-error">{errors.date}</p>}
                </div>
              </div>
              <div className="form-group mt-6">
                <label className="form-label font-semibold">Declaration*</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="declarationAccepted"
                    checked={formData.declarationAccepted}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">I hereby declare that the information provided is true and correct to the best of my knowledge.</span>
                </div>
                {errors.declarationAccepted && <p className="form-error">{errors.declarationAccepted}</p>}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigateSection(4)}
                  className="btn btn-outline btn-icon-left"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-lg ${isSubmitting ? "btn-disabled" : "btn-primary"}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
              {errors.submit && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-500">{errors.submit}</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
