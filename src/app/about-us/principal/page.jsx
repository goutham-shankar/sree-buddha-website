<<<<<<< HEAD
import React from 'react';
import './style.css';
=======
// import React from 'react';
// import './style.css';
// import Person from "@/components/management/Person";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// function Principal() {
//   return (
//     <div className="principal">
//           <div className="m-title">
//             <h1 className='heading'>The Principal</h1>
//             <hr />
//           </div>
//           <Person
//           name="Dr. K Krishnakumar"
//           position="The Principal"
//           content="Dr. K Krishnakumar completed his Bachelor's Degree in Mechanical Engineering from TKM College of Engineering, the University of Kerala with the fourth rank in 1987, Master's Degree in Engineering from College of Engineering, Guindy, Anna University, and Ph.D. from IIT Madras. He also holds an MBA from Indira Gandhi National Open University (IGNOU).He started his career in College of Engineering, Trivandrum (CET) in the year 1990 and served there as Lecturer, Asst. professor, Professor, Head of the Department and Dean of Research till 2018. He retired from Govt. Service as Joint Director of Technical Education, Kerala in 2019. He has published about 75 research papers in International and national journals and conferences. He has also undertaken many sponsored research and consultancy projects of DST, ISRO, KSCSTE, etc.He is also a Research Guide to the University of Kerala and to APJ Abdul Kalam Technological University (KTU)."
//           pic={"/images/principal.png"}
//         />
//     </div>
//   ); 
// }

// export default Principal;
"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
>>>>>>> 278c1f3978773ff6902289cc03333f476e6545db
import Person from "@/components/management/Person";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

<<<<<<< HEAD
function Principal() {
  return (
    <div className="principal">
          <div className="m-title">
            <h1 className='heading'>The Principal</h1>
            <hr />
          </div>
          <Person
          name="Dr. K Krishnakumar"
          position="The Principal"
          content="Dr. K Krishnakumar completed his Bachelor's Degree in Mechanical Engineering from TKM College of Engineering, the University of Kerala with the fourth rank in 1987, Master's Degree in Engineering from College of Engineering, Guindy, Anna University, and Ph.D. from IIT Madras. He also holds an MBA from Indira Gandhi National Open University (IGNOU).He started his career in College of Engineering, Trivandrum (CET) in the year 1990 and served there as Lecturer, Asst. professor, Professor, Head of the Department and Dean of Research till 2018. He retired from Govt. Service as Joint Director of Technical Education, Kerala in 2019. He has published about 75 research papers in International and national journals and conferences. He has also undertaken many sponsored research and consultancy projects of DST, ISRO, KSCSTE, etc.He is also a Research Guide to the University of Kerala and to APJ Abdul Kalam Technological University (KTU)."
          pic={"/images/principal.png"}
        />
=======
function page() {
  const [principalData, setPrincipalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrincipalData = async () => {
      try {
        const response = await fetch(
          "http://13.51.85.192:1337/api/principal?populate=*"
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setPrincipalData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching principal data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, []);

  if (loading) {
    return (
      <div className="principal loading">Loading principal information...</div>
    );
  }

  if (error) {
    return <div className="principal error">Error loading data: {error}</div>;
  }

  return (
    <div className="principal">
      <div className="m-title">
        <h1 className="heading">The Principal</h1>
        <hr />
      </div>
      <Person
        name={principalData.Principal_Name}
        position="The Principal"
        content={principalData.Principal_Info}
        pic={
          principalData.Principal_image?.url
            ? `http://13.51.85.192:1337${principalData.Principal_image.url}`
            : "/images/principal.png"
        }
      />
>>>>>>> 278c1f3978773ff6902289cc03333f476e6545db
    </div>
  );
}

<<<<<<< HEAD
export default Principal;
=======
export default page;
>>>>>>> 278c1f3978773ff6902289cc03333f476e6545db
