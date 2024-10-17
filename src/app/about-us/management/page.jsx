import React from "react";
import "@/styles/management/style.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Person from "@/components/management/Person";

const management = () => {
  return (
    <div className="management">
      <div className="majContainer">
        <h1 className="heading">The Management</h1>
        <Person
          name="Prof. K. Sasikumar"
          position="The Chairperson"
          content="Prof. K. Sasikumar is the Founder Chairman of Sree Buddha Group of Educational Institutions. He is the former President of Kerala Self Financing Engineering Colleges Management Association. Prof. K Sasikumar was a member of the Board of Governors of APJ Abdul Kalam Technological University, Kerala. He is the former Principal of Sree Narayana College, Kollam and Chief organizer of a number of institutions like Sree Narayana Public School, Kollam, Sree Narayana Ayurveda College, Kollam, Sree Narayana College of Technology, Kollam and Sree Narayana Institute of Technology, Kollam"
          pic={"/assets/images/chairperson.png"}
        />
        <img
          className="line"
          src={"/assets/Line_2.png"}
          alt="Unable to load image"
        />

        <Person
          name="Sri. V Dharma Rajan"
          position="Vice-Chairman"
          content="A retired businessman from the UAE, involved with various socio-cultural and charitable activities, Founder Treasurer of Sevanam UAE, which is the largest Sree Narayana Cultural & Charity Organisation with over ten thousand members, represented as Union Counsellor from Dubai Union to SNDP Yogam,  an active member of Guru Dharma Prachrana Sabha, a Class Trustee & Director Board Member of Sree Narayana Institute of Medical Science, Chalkka, Ernakulam and Patroon Trustee of Vidya International Charitable Trust  & Director Board Member of Vidya International College of Engineering, Trissur & Trivandrum. "
          pic={"/assets/images/DharmaRajan.png"}
        />
        <img
          className="line"
          src={"/assets/Line 2.png"}
          alt="Unable to load image"
        />

        <Person
          name="Prof. V Prasad"
          position="The Secretary"
          content="Prof. V Prasad, who has years of experience in teaching and administration, is associated with educational endeavours as the founder secretary of Sree Buddha Group of Educational Institutions. His perspective on education has made his signature in his profession. He retired as the Vice Principal of an aided college. Presently he is the Secretary of Sree Buddha Educational Society Kollam, the managing body of Sree Buddha College of Engineering, Pattoor and Sree Buddha Central School, Pattoor. He is also a member of the executive committee, Sree Narayana Institute of Ayurvedic Study & Research, Puthur."
          pic={"/assets/images/VPrasad.png"}
        />
        <img
          className="line"
          src={"/assets/Line 2.png"}
          alt="Unable to load image"
        />

        <Person
          name="Sri. B Udhayan"
          position="Joint Secretary"
          content="A successful businessman with social commitment. He is also a Director Board Member, Sree Narayana Trust, the Councillor, SNDP Union, Pandalam, and the Treasurer, Bodhi Educational Trust, Elavumthitta."
          pic={"/assets/images/Budhayan.png"}
        />
        <img
          className="line"
          src={"/assets/Line 2.png"}
          alt="Unable to load image"
        />

        <Person
          name="Sri. A Sunil Kumar"
          position="The Treasurer"
          content="A vibrant businessman and Aircraft Maintenance Engineer. Is an active social worker with integrity and insight in the field of business and a diligent patron member of Sree Buddha Educational society. Executive member of Sree Narayana Educational Society (Convenor - R Sankar College of Arts & Science, Chathanoor) and Executive Member of Sree Narayana Ayurvedic Studies & Research Center, Puthoor."
          pic={"/assets/images/ASunilKumar.png"}
        />
        <img
          className="line"
          src={"/assets/Line 2.png"}
          alt="Unable to load image"
        />

        <div className="advisorys">Advisory Committee</div>
        <div className="extracontents">
          <p className="listofppl">
            Dr. Ramesh Unnikrishnan <br />
            Regional Officer(SWRO/AICTE) & Director,AICTE
            <br /> Dr. A. Ajayaghosh
            <br />
            Distinguished Scientist, CSIR,NIIST, Thiruvananthapuram
            <br /> Dr. Gangan Prathap Former
            <br />
            Vice Chancellor, CUSAT and Scientist at
            CSIR,NIIST, Thiruvananthapuram
            <br />
            Mr. John Mathai
            <br />
            FormerChief Secretary, Govt.of Kerala
            <br />
            Mr. S. D. Shibulal
            <br />
            Former Chief Executive Officer & Managing Director, INFOSYS.
          </p>

          <p className="content2">
            The Managing body consists of persons from different walks of life.
            Many of them are professionals and are associated with a number of
            other educational institutions like:
          </p>
          <ul className="list">
            <li>
              Sree Narayana Public School, Kollam [The most reputed CBSE
              affiliated Senior Secondary School in Kollam District].
            </li>
            <li>
              {" "}
              Sree Buddha Central School, Karunagapally [A reputed Senior
              Secondary School affiliated to CBSE].
            </li>
            <li>
              Sree Narayana College of Technology, Kollam [A college offering
              MCA, B.Sc. Biotechnology and B.Com. Computer Applications –
              affiliated to the University of Kerala].{" "}
            </li>
            <li>
              Sree Buddha Central School, Pattoor. Sree Narayana Institute of
              Ayurvedic Studies And Research, Puthur.
            </li>
          </ul>
        </div>
        <h2 className="others">Other Members</h2>
        <div className="extracontents">
          <p className="members">
            Sri. G. Yatheesh
            <br />
            Sri. G. Venugopal
            <br />
            Smt. Kavita Narayanan <br />
            Smt. P. Indira Vipin <br />
            Dr. Ravindran G<br /> Sri. T. V. Rajan
            <br /> Dr. Raji Raveendran
            <br /> Dr. K. B. Manoj <br />
            Sri. R. Ravi <br />
            Dr. M. Asokan <br />
            Sri. A. C .Vijayachandran <br />
            Sri. G .Suseelan <br />
            Sri. G. Sundaresan <br />
            Sri. K K Sivadasan <br />
            Sri. K Ravindran
            <br />
            Sri. R Uthaman
            <br /> Sri. M.Jayamon
            <br /> Sri. K N Muraleedharan <br />
            Sri. K K Chandrasena Panicker <br />
            Sri. K K Sunil Kumar <br />
            Sri. Swamidas C <br />
            Sri. Karunakaran Raffi
          </p>
        </div>
      </div>
    </div>
  );
};

export default management;
