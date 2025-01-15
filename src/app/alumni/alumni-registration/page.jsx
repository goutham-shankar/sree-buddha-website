// "use client";
// import React, { useState } from 'react';
// import "./page.css";

// const page = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     department: '',
//     gender: '',
//     graduationYear: '',
//     email: '',
//     contactNumber: '',
//     additional_qualification: '',
//     current_working_organization: '',
//     current_designation: '',
//     file: null, // Added for file upload
//     comments: '',
//   });

//   const handleChange = (event) => {
//     const { name, value, type, files } = event.target;
//     if (type === 'file') {
//       const file = files[0];
//       // Check file type and size
//       if (file) {
//         const isValidFileType = /\.(doc|docx|pdf)$/i.test(file.name);
//         const isValidFileSize = file.size <= 2 * 1024 * 1024; // 2MB in bytes

//         if (isValidFileType && isValidFileSize) {
//           setFormData({
//             ...formData,
//             [name]: file,
//           });
//         } else {
//           alert("Please upload a valid file (.doc, .docx, .pdf) under 2MB.");
//         }
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Alumni Registration</h1>

//       <div>
//         <label>Name of the Applicant </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Department </label>
//         <select
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           required
//         >
//           <option value="">---</option>
//           <option value="Human Resource Development">Human Resource Development</option>
//           <option value="Biotechnology and Biochemical Engineering">Biotechnology and Biochemical Engineering</option>
//           <option value="Civil Engineering">Civil Engineering</option>
//           <option value="Computer Science">Computer Science</option>
//           <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//           <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
//           <option value="Human Resource Management">Human Resource Management</option>
//         </select>
//       </div>

//       <div>
//         <label>Gender </label>
//         <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
//         <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
//       </div>

//       <div>
//         <label>Year of Graduation</label>
//         <input
//           type="number"
//           name="graduationYear"
//           min="2005"
//           max="2016"
//           value={formData.graduationYear}
//           onChange={handleChange}
//           required
//         />
//         <p>Must be between 2005 - 2016</p>
//       </div>

//       <div>
//         <label>Present Address *</label>
//         <textarea
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Contact Number</label>
//         <input
//           type="number"
//           name="contactNumber"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Additional Qualification (if any)</label>
//         <input
//           type="text"
//           name="additional_qualification"
//           value={formData.additional_qualification}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Currently Working Organization</label>
//         <input
//           type="text"
//           name="current_working_organization"
//           value={formData.current_working_organization}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Current Designation</label>
//         <input
//           type="text"
//           name="current_designation"
//           value={formData.current_designation}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Upload Resume (DOC, DOCX, PDF - Max 2MB)</label>
//         <input
//           type="file"
//           name="file"
//           accept=".doc,.docx,.pdf"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Comments</label>
//         <input
//           type="text"
//           name="comments"
//           value={formData.comments}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default page;
"use client";
import React, { useState } from 'react';
import "./page.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    gender: '',
    graduationYear: '',
    email: '',
    contactNumber: '',
    additional_qualification: '',
    current_working_organization: '',
    current_designation: '',
    file: null, // Added for file upload
    comments: '',
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      const file = files[0];
      // Check file type and size
      if (file) {
        const isValidFileType = /\.(doc|docx|pdf)$/i.test(file.name);
        const isValidFileSize = file.size <= 2 * 1024 * 1024; // 2MB in bytes

        if (isValidFileType && isValidFileSize) {
          setFormData({
            ...formData,
            [name]: file,
          });
        } else {
          alert("Please upload a valid file (.doc, .docx, .pdf) under 2MB.");
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-title">Alumni Registration</h1>

      <div className="form-group">
        <label className="form-label">Name of the Applicant</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">---</option>
          <option value="Human Resource Development">Human Resource Development</option>
          <option value="Biotechnology and Biochemical Engineering">Biotechnology and Biochemical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
          <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
          <option value="Human Resource Management">Human Resource Management</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Gender</label>
        <input type="radio" name="gender" value="Male" onChange={handleChange} className="form-radio" /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} className="form-radio" /> Female
      </div>

      <div className="form-group">
        <label className="form-label">Year of Graduation</label>
        <input
          type="number"
          name="graduationYear"
          min="2005"
          max="2016"
          value={formData.graduationYear}
          onChange={handleChange}
          className="form-input"
          required
        />
        <p className="error-message">Must be between 2005 - 2016</p>
      </div>

      <div className="form-group">
        <label className="form-label">Present Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Contact Number</label>
        <input
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Additional Qualification (if any)</label>
        <input
          type="text"
          name="additional_qualification"
          value={formData.additional_qualification}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Currently Working Organization</label>
        <input
          type="text"
          name="current_working_organization"
          value={formData.current_working_organization}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Current Designation</label>
        <input
          type="text"
          name="current_designation"
          value={formData.current_designation}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Upload Resume (DOC, DOCX, PDF - Max 2MB)</label>
        <input
          type="file"
          name="file"
          accept=".doc,.docx,.pdf"
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Comments</label>
        <input
          type="text"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <button type="submit" className="form-button">Submit</button>
    </form>
    </div>
  );
};

export default Page;
