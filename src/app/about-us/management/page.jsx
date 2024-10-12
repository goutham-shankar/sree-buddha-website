import React from "react";
import "@/styles/management/style.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Person from "@/components/management/Person";
import chairperson from "@/assets/images/chairperson.png";
const management = () => {
  return (
    <div>
      <Navbar />
      <h1 className="heading">The Management</h1>
      <Person
        className="person"
        name="Prof. K. Sasikumar"
        position="The Chairperson"
        content="Prof. K. Sasikumar is the Founder Chairman of Sree Buddha Group of Educational Institutions. He is the former President of Kerala Self Financing Engineering Colleges Management Association. Prof. K Sasikumar was a member of the Board of Governors of APJ Abdul Kalam Technological University, Kerala. He is the former Principal of Sree Narayana College, Kollam and Chief organizer of a number of institutions like Sree Narayana Public School, Kollam, Sree Narayana Ayurveda College, Kollam, Sree Narayana College of Technology, Kollam and Sree Narayana Institute of Technology, Kollam"
        pic={chairperson.src}
      />

      <Footer />
    </div>
  );
};

export default management;
