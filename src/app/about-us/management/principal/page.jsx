import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="m-box">
          <section className="principal-section">
            <br />
            <br />
            <h1>The Principal</h1>
          </section>

          <div className="content">
            <div className="principal_image">
              {/* Use relative path for public folder */}
              <img src="/images/principal.png" alt="Dr. K Krishnakumar" />
            </div>
            <div className="text">
                <br />
              <h2>Dr. K Krishnakumar</h2>
              
              <p>
                Dr. K Krishnakumar completed his Bachelor's Degree in Mechanical Engineering from TKM College of Engineering, the University of Kerala with the fourth rank in 1987, Master's Degree in Engineering from College of Engineering, Guindy, Anna University, and Ph.D. from IIT Madras. He also holds an MBA from Indira Gandhi National Open University (IGNOU).He started his career in College of Engineering, Trivandrum (CET) in the year 1990 and served there as Lecturer, Asst. professor, Professor, Head of the Department and Dean of Research till 2018. He retired from Govt. Service as Joint Director of Technical Education, Kerala in 2019.
              </p>
              <p>
                He has published about 75 research papers in International and national journals and conferences. He has also undertaken many sponsored research and consultancy projects of DST, ISRO, KSCSTE, etc.
                He is also a Research Guide to the University of Kerala and to APJ Abdul Kalam Technological University (KTU).
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
