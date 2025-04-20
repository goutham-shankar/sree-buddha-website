"use client"
import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    dob: '',
    gender: '',
    Nationality: '',
    religioin: '',
    community: '',
    Mothertounge: '',
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
    institue: '',
    dataofpass: '',
    
    // SGPA/CGPA
    s1: '',
    s2: '',
    s3: '',
    s4: '',
    s5: '',
    s6: '',
    s7: '',
    s8: '',
    cgpa: '',
    
    // PG Course & GATE Info
    pg_course: '',
    gyear: '',
    g_score: '',
    DTE_reg_no: '',
    DTE_rank: '',
    merit: false,
    gate_valid: false,
    
    // Declaration
    place: '',
    date: '',
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
      'name', 'dob', 'gender', 'Nationality', 'religioin', 'community', 
      'Mothertounge', 'guardian', 'relationship', 'address', 'pincode', 
      'mobile', 'email', 'degree', 'discipline', 'university', 'institue',
      'dataofpass', 'cgpa', 'pg_course', 'place', 'date', 'signature', 
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
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      tempErrors.pincode = 'Please enter a valid 6-digit PIN code';
      isValid = false;
    }

    // Validate SGPA values
    const sgpaFields = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
    sgpaFields.forEach(field => {
      if (formData[field] && (isNaN(formData[field]) || formData[field] < 0 || formData[field] > 10)) {
        tempErrors[field] = 'Please enter a valid SGPA between 0 and 10';
        isValid = false;
      }
    });

    // Validate CGPA
    if (formData.cgpa && (isNaN(formData.cgpa) || formData.cgpa < 0 || formData.cgpa > 10)) {
      tempErrors.cgpa = 'Please enter a valid CGPA between 0 and 10';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateForm() || true) {

  //     const photo = document.getElementById("photo").files[0];
  //     const signature = document.getElementById("signature").files[0];

  //     const file_form_data = new FormData()
  //     file_form_data.append("photo", photo);
  //     file_form_data.append("signature", signature);

  //     fetch(`${process.env.NEXT_PUBLIC_FILE_UPLOAD_BACKEND}/upload_mtech`, {
  //       method: "POST", 
  //       body : file_form_data
  //     }).then((response)=>{
  //       return response.json()
  //     }).then( async (data)=>{

  //       console.log(data)

  //       formData["photo_link"] = data.photo_link ;
  //       formData["signature_link" ] = data.signature_link;

  //       try {
  //         // Create a JSON object instead of FormData
  //         const jsonData = {...formData};
          
  //         // Handle file data differently since we can't send files directly in JSON
  //         // You'll need to implement file uploads separately or use Base64 encoding

  //         console.log(JSON.stringify(jsonData))
         
    
  //         const response = await fetch('http://13.51.85.192:1337/api/mtech-admissions', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json' , 
  //             'Accept': 'application/json'
  //           },
  //           body: JSON.stringify(jsonData)
  //         })
    
  //         if (response.ok) {
  //           alert('Form submitted successfully!');
  //         } else {
  //           throw new Error('Failed to submit form');
  //         }
  //       } catch (error) {
  //         console.error('Error submitting form:', error);
  //         alert('Failed to submit form. Please try again.');
  //       }

  //     })

     
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() || true) {
      try {
        const photo = document.getElementById("photo").files[0];
        const signature = document.getElementById("signature").files[0];
  
        if (!photo || !signature) {
          alert('Please upload both photo and signature');
          return;
        }
  
        const file_form_data = new FormData();
        file_form_data.append("photo", photo);
        file_form_data.append("signature", signature);
  
        // Upload files first
        const fileResponse = await fetch(`${process.env.NEXT_PUBLIC_FILE_UPLOAD_BACKEND}/upload_mtech`, {
          method: "POST", 
          body: file_form_data
        });
  
        if (!fileResponse.ok) {
          throw new Error('File upload failed');
        }
  
        const fileData = await fileResponse.json();
        console.log("File upload response:", fileData);
  
        // Create data object that matches Strapi's column names exactly
        const strapiData = {
          name: formData.name,
          gender: formData.gender,
          Nationality: formData.Nationality,
          religioin: formData.religioin,
          community: formData.community,
          Mothertounge: formData.Mothertounge,
          guardian: formData.guardian,
          relationship: formData.relationship,
          address: formData.address,
          pincode: formData.pincode,
          dob: formData.dob,
          telephone: formData.telephone,
          mobile: formData.mobile,
          email: formData.email,
          degree: formData.degree,
          discipline: formData.discipline,
          university: formData.university,
          institue: formData.institue,
          dataofpass: formData.dataofpass,
          s1: formData.s1 ? parseFloat(formData.s1) : null,
          s2: formData.s2 ? parseFloat(formData.s2) : null,
          s3: formData.s3 ? parseFloat(formData.s3) : null,
          s4: formData.s4 ? parseFloat(formData.s4) : null,
          s5: formData.s5 ? parseFloat(formData.s5) : null,
          s6: formData.s6 ? parseFloat(formData.s6) : null,
          s7: formData.s7 ? parseFloat(formData.s7) : null,
          s8: formData.s8 ? parseFloat(formData.s8) : null,
          cgpa: formData.cgpa ? parseFloat(formData.cgpa) : null,
          pg_course: formData.pg_course,
          gyear: formData.gyear,
          g_score: formData.g_score ? parseFloat(formData.g_score) : null,
          DTE_reg_no: formData.DTE_reg_no,
          DTE_rank: formData.DTE_rank ? parseFloat(formData.DTE_rank) : null,
          merit: formData.merit,
          gate_valid: formData.gate_valid,
          place: formData.place,
          date: formData.date,
          photo_link: fileData.photo_link,
          signature_link: fileData.signature_link
        };
  
        console.log("Sending to Strapi:", JSON.stringify(strapiData));
      
        // Send to Strapi with properly formatted data
        const response = await fetch('http://13.51.85.192:1337/api/mtech-admissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
          },
          body: JSON.stringify({ data: strapiData }) // Strapi expects data in { data: yourObject } format
        });
  
        const responseData = await response.json();
        console.log("Strapi response:", responseData);
  
        if (!response.ok) {
          throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
        }
  
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(`Failed to submit form: ${error.message}`);
      }
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">M.Tech Application Form</h1>

      <form onSubmit={handleSubmit} className="form">
        {/* Personal Information */}
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Name of Applicant*</label>
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
              <label className="form-label">Date of Birth*</label>
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
              <label className="form-label">Gender*</label>
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
              <label className="form-label">Nationality*</label>
              <input
                type="text"
                name="Nationality"
                value={formData.Nationality}
                onChange={handleChange}
                className="form-input"
              />
              {errors.Nationality && <p className="error-message">{errors.Nationality}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Religion*</label>
              <input
                type="text"
                name="religioin"
                value={formData.religioin}
                onChange={handleChange}
                className="form-input"
              />
              {errors.religioin && <p className="error-message">{errors.religioin}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Community*</label>
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
              <label className="form-label">Mother Tongue*</label>
              <input
                type="text"
                name="Mothertounge"
                value={formData.Mothertounge}
                onChange={handleChange}
                className="form-input"
              />
              {errors.Mothertounge && <p className="error-message">{errors.Mothertounge}</p>}
            </div>
          </div>
        </div>
       
        {/* Guardian Information */}
        <div className="form-section">
          <h2 className="section-title">Guardian Information</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Name of Parent/Guardian*</label>
              <input
                type="text"
                name="guardian"
                value={formData.guardian}
                onChange={handleChange}
                className="form-input"
              />
              {errors.guardian && <p className="error-message">{errors.guardian}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Relationship with Guardian*</label>
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
              <label className="form-label">Address for Communication*</label>
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
              <label className="form-label">PIN Code*</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="form-input"
              />
              {errors.pincode && <p className="error-message">{errors.pincode}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Telephone</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">Mobile*</label>
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
              <label className="form-label">Email*</label>
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
       
        {/* UG Qualification */}
        <div className="form-section">
          <h2 className="section-title">UG Qualification & Discipline</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Degree*</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="form-input"
              />
              {errors.degree && <p className="error-message">{errors.degree}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Discipline*</label>
              <input
                type="text"
                name="discipline"
                value={formData.discipline}
                onChange={handleChange}
                className="form-input"
              />
              {errors.discipline && <p className="error-message">{errors.discipline}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">University*</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="form-input"
              />
              {errors.university && <p className="error-message">{errors.university}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Name of Institution*</label>
              <input
                type="text"
                name="institue"
                value={formData.institue}
                onChange={handleChange}
                className="form-input"
              />
              {errors.institue && <p className="error-message">{errors.institue}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Month & Year of Passing*</label>
              <input
                type="text"
                name="dataofpass"
                value={formData.dataofpass}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., June, 2025"
              />
              {errors.dataofpass && <p className="error-message">{errors.dataofpass}</p>}
            </div>
          </div>
        </div>
       
        {/* SGPA/CGPA */}
        <div className="form-section">
          <h2 className="section-title">SGPA / % of Marks Obtained</h2>
         
          <div className="form-grid">
            {['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'].map((sem) => (
              <div key={sem} className="form-group">
                <label className="form-label">{sem.toUpperCase()}</label>
                <input
                  type="number"
                  step="0.01"
                  name={sem}
                  value={formData[sem]}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors[sem] && <p className="error-message">{errors[sem]}</p>}
              </div>
            ))}
           
            <div className="form-group">
              <label className="form-label">CGPA / % of Marks Obtained*</label>
              <input
                type="number"
                step="0.01"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                className="form-input"
              />
              {errors.cgpa && <p className="error-message">{errors.cgpa}</p>}
            </div>
          </div>
        </div>
       
        {/* PG Course & GATE Info */}
        <div className="form-section">
          <h2 className="section-title">PG Course Preferences & GATE Info</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">PG Course Preferred*</label>
              <input
                type="text"
                name="pg_course"
                value={formData.pg_course}
                onChange={handleChange}
                className="form-input"
              />
              {errors.pg_course && <p className="error-message">{errors.pg_course}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Year of Appearance</label>
              <input
                type="text"
                name="gyear"
                value={formData.gyear}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">GATE Score</label>
              <input
                type="number"
                step="0.01"
                name="g_score"
                value={formData.g_score}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">DTE Register No</label>
              <input
                type="text"
                name="DTE_reg_no"
                value={formData.DTE_reg_no}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">DTE Rank</label>
              <input
                type="number"
                name="DTE_rank"
                value={formData.DTE_rank}
                onChange={handleChange}
                className="form-input"
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">Admission Sought Under*</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="merit"
                    checked={formData.merit}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span>Merit</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="merit"
                    checked={!formData.merit}
                    onChange={() => setFormData({...formData, merit: false})}
                    className="radio-input"
                  />
                  <span>Management</span>
                </label>
              </div>
              {errors.merit && <p className="error-message">{errors.merit}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Hold Valid GATE Score</label>
              <input
                type="checkbox"
                name="gate_valid"
                checked={formData.gate_valid}
                onChange={handleChange}
                className="checkbox-input"
              />
            </div>
          </div>
        </div>
       
        {/* Declaration */}
        <div className="form-section">
          <h2 className="section-title">Declaration</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Place*</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="form-input"
              />
              {errors.place && <p className="error-message">{errors.place}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
              />
              {errors.date && <p className="error-message">{errors.date}</p>}
            </div>
          </div>
        </div>
       
        {/* Document Uploads */}
        <div className="form-section">
          <h2 className="section-title">Document Uploads</h2>
         
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Signature*</label>
              <input
                type="file"
                name="sign"
                accept="image/*"
                // onChange={handleFileChange}
                id = "signature"
                className="file-input"
              />
              {errors.sign && <p className="error-message">{errors.sign}</p>}
            </div>
           
            <div className="form-group">
              <label className="form-label">Passport Size Photo*</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                // onChange={handleFileChange}
                id = "photo"
                className="file-input"
              />
              {errors.pic && <p className="error-message">{errors.pic}</p>}
            </div>
          </div>
        </div>
       
        {/* Submit Button */}
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;