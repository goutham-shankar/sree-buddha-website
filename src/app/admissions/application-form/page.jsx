"use client"
import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    nationality: '',
    religion: '',
    community: '',
    motherTongue: '',
    parentName: '',
    relationship: '',
    address: '',
    pinCode: '',
    telephone: '',
    mobile: '',
    email: '',
    tenthBoard: '',
    tenthInstitution: '',
    tenthPassingDate: '',
    tenthMarks: '',
    tenthMaxMarks: '',
    tenthPercentage: '',
    twelfthBoard: '',
    twelfthInstitution: '',
    twelfthPassingDate: '',
    twelfthMarks: '',
    twelfthMaxMarks: '',
    twelfthPercentage: '',
    diplomaBoard: '',
    diplomaInstitution: '',
    diplomaPassingDate: '',
    diplomaMarks: '',
    diplomaMaxMarks: '',
    diplomaPercentage: '',
    mpcMarks: '',
    mpcMaxMarks: '',
    entranceExam: '',
    entranceRegNo: '',
    entranceRank: '',
    branchPreference: '',
    admissionType: '',
    photo: null,
    parentSignature: null,
    applicantSignature: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate mandatory fields
    const mandatoryFields = [
      'name', 'dob', 'gender', 'nationality', 'religion', 'community', 'motherTongue',
      'parentName', 'relationship', 'address', 'pinCode', 'mobile', 'email',
      'mpcMarks', 'mpcMaxMarks', 'branchPreference', 'admissionType', 'photo',
      'parentSignature', 'applicantSignature'
    ];

    mandatoryFields.forEach(field => {
      if (!formData[field]) {
        tempErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Mobile validation
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }

    // Pin code validation
    if (formData.pinCode && !/^\d{6}$/.test(formData.pinCode)) {
      tempErrors.pinCode = 'Please enter a valid 6-digit PIN code';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a server
      alert('Form submitted successfully!');
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Application Form</h1>

      <form onSubmit={handleSubmit} className="form">
        {/* Personal Information */}
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Name of Applicant*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
              />
              {errors.dob && <p className="error-message">{errors.dob}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Gender*
              </label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span>Male</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span>Female</span>
                </label>
              </div>
              {errors.gender && <p className="error-message">{errors.gender}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Nationality*
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="form-input"
              />
              {errors.nationality && <p className="error-message">{errors.nationality}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Religion*
              </label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="form-input"
              />
              {errors.religion && <p className="error-message">{errors.religion}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Community*
              </label>
              <input
                type="text"
                name="community"
                value={formData.community}
                onChange={handleChange}
                className="form-input"
              />
              {errors.community && <p className="error-message">{errors.community}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Mother Tongue*
              </label>
              <input
                type="text"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
                className="form-input"
              />
              {errors.motherTongue && <p className="error-message">{errors.motherTongue}</p>}
            </div>
          </div>
        </div>
       
        {/* Guardian Information */}
        <div className="form-section">
          <h2 className="section-title">Guardian Information</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Name of Parent/Guardian*
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="form-input"
              />
              {errors.parentName && <p className="error-message">{errors.parentName}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Relationship with Guardian*
              </label>
              <input
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="form-input"
              />
              {errors.relationship && <p className="error-message">{errors.relationship}</p>}
            </div>
          </div>
        </div>
       
        {/* Contact Information */}
        <div className="form-section">
          <h2 className="section-title">Contact Information</h2>
         
          <div className="form-grid">
            <div className="form-group full-width">
              <label className="form-label">
                Address for Communication*
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="form-textarea"
              ></textarea>
              {errors.address && <p className="error-message">{errors.address}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                PIN Code*
              </label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="form-input"
              />
              {errors.pinCode && <p className="error-message">{errors.pinCode}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Telephone
              </label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Mobile*
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-input"
              />
              {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
        </div>
       
        {/* Educational Information */}
        <div className="form-section">
          <h2 className="section-title">Details of Mark/Grade Obtained in the Qualifying Exam</h2>
         
          <div className="education-section">
            {/* 10th Grade */}
            <div className="education-subsection">
              <h3 className="subsection-title">10th Standard</h3>
              <div className="education-grid">
                <div className="form-group">
                  <label className="form-label">
                    Board of Examination
                  </label>
                  <input
                    type="text"
                    name="tenthBoard"
                    value={formData.tenthBoard}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Name of Institution
                  </label>
                  <input
                    type="text"
                    name="tenthInstitution"
                    value={formData.tenthInstitution}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Year and Month of Passing
                  </label>
                  <input
                    type="month"
                    name="tenthPassingDate"
                    value={formData.tenthPassingDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Marks Obtained
                  </label>
                  <input
                    type="number"
                    name="tenthMarks"
                    value={formData.tenthMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Maximum Marks
                  </label>
                  <input
                    type="number"
                    name="tenthMaxMarks"
                    value={formData.tenthMaxMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Percentage of Marks
                  </label>
                  <input
                    type="number"
                    name="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
           
            {/* 12th Grade */}
            <div className="education-subsection">
              <h3 className="subsection-title">12th Standard</h3>
              <div className="education-grid">
                <div className="form-group">
                  <label className="form-label">
                    Board of Examination
                  </label>
                  <input
                    type="text"
                    name="twelfthBoard"
                    value={formData.twelfthBoard}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Name of Institution
                  </label>
                  <input
                    type="text"
                    name="twelfthInstitution"
                    value={formData.twelfthInstitution}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Year and Month of Passing
                  </label>
                  <input
                    type="month"
                    name="twelfthPassingDate"
                    value={formData.twelfthPassingDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Marks Obtained
                  </label>
                  <input
                    type="number"
                    name="twelfthMarks"
                    value={formData.twelfthMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Maximum Marks
                  </label>
                  <input
                    type="number"
                    name="twelfthMaxMarks"
                    value={formData.twelfthMaxMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Percentage of Marks
                  </label>
                  <input
                    type="number"
                    name="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
           
            {/* Diploma */}
            <div className="education-subsection">
              <h3 className="subsection-title">Diploma</h3>
              <div className="education-grid">
                <div className="form-group">
                  <label className="form-label">
                    Board of Examination
                  </label>
                  <input
                    type="text"
                    name="diplomaBoard"
                    value={formData.diplomaBoard}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Name of Institution
                  </label>
                  <input
                    type="text"
                    name="diplomaInstitution"
                    value={formData.diplomaInstitution}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Year and Month of Passing
                  </label>
                  <input
                    type="month"
                    name="diplomaPassingDate"
                    value={formData.diplomaPassingDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Marks Obtained
                  </label>
                  <input
                    type="number"
                    name="diplomaMarks"
                    value={formData.diplomaMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Maximum Marks
                  </label>
                  <input
                    type="number"
                    name="diplomaMaxMarks"
                    value={formData.diplomaMaxMarks}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
               
                <div className="form-group">
                  <label className="form-label">
                    Percentage of Marks
                  </label>
                  <input
                    type="number"
                    name="diplomaPercentage"
                    value={formData.diplomaPercentage}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* MPC Marks */}
        <div className="form-section">
          <h2 className="section-title">Marks Secured for Mathematics, Physics & Chemistry (put together)</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Total Mark Secured*
              </label>
              <input
                type="number"
                name="mpcMarks"
                value={formData.mpcMarks}
                onChange={handleChange}
                className="form-input"
              />
              {errors.mpcMarks && <p className="error-message">{errors.mpcMarks}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Out of*
              </label>
              <input
                type="number"
                name="mpcMaxMarks"
                value={formData.mpcMaxMarks}
                onChange={handleChange}
                className="form-input"
              />
              {errors.mpcMaxMarks && <p className="error-message">{errors.mpcMaxMarks}</p>}
            </div>
          </div>
        </div>
       
        {/* Entrance Examination */}
        <div className="form-section">
          <h2 className="section-title">Entrance Examination (Not applicable for NRI/OCI applicants)</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Name of Examination
              </label>
              <input
                type="text"
                name="entranceExam"
                value={formData.entranceExam}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Register No
              </label>
              <input
                type="text"
                name="entranceRegNo"
                value={formData.entranceRegNo}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Rank
              </label>
              <input
                type="text"
                name="entranceRank"
                value={formData.entranceRank}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
       
        {/* Branch Preference */}
        <div className="form-section">
          <h2 className="section-title">Branch Preferred*</h2>
         
          <div className="branch-options">
            {['Computer Science', 'Information Technology', 'Electronics', 'Electrical', 'Mechanical', 'Civil', 'Chemical', 'Biomedical', 'Aerospace'].map((branch) => (
              <label key={branch} className="branch-option">
                <input
                  type="radio"
                  name="branchPreference"
                  value={branch}
                  checked={formData.branchPreference === branch}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span>{branch}</span>
              </label>
            ))}
          </div>
          {errors.branchPreference && <p className="error-message">{errors.branchPreference}</p>}
        </div>
       
        {/* Admission Type */}
        <div className="form-section">
          <h2 className="section-title">Admission Sought Under*</h2>
         
          <div className="admission-options">
            <label className="admission-option">
              <input
                type="radio"
                name="admissionType"
                value="Management"
                checked={formData.admissionType === 'Management'}
                onChange={handleChange}
                className="radio-input"
              />
              <span>Management</span>
            </label>
           
            <label className="admission-option">
              <input
                type="radio"
                name="admissionType"
                value="NRI/OCI"
                checked={formData.admissionType === 'NRI/OCI'}
                onChange={handleChange}
                className="radio-input"
              />
              <span>NRI/OCI</span>
            </label>
          </div>
          {errors.admissionType && <p className="error-message">{errors.admissionType}</p>}
        </div>
       
        {/* Document Uploads */}
        <div className="form-section">
          <h2 className="section-title">Document Uploads</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Passport Size Photo*
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              {errors.photo && <p className="error-message">{errors.photo}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Signature of the Parent / Guardian*
              </label>
              <input
                type="file"
                name="parentSignature"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              {errors.parentSignature && <p className="error-message">{errors.parentSignature}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">
                Signature of Applicant*
              </label>
              <input
                type="file"
                name="applicantSignature"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              {errors.applicantSignature && <p className="error-message">{errors.applicantSignature}</p>}
            </div>
          </div>
        </div>
       
        {/* Submit Button */}
        <div className="submit-container">
          <button
            type="submit"
            className="submit-button"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;