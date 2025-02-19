import React from "react";
import "./page.css";

const students = [
  { id: 1, name: "HARITHA PRAKASH", company: "UST GLOBAL" },
  { id: 2, name: "RESHMA R PILLAI", company: "UST GLOBAL" },
  { id: 3, name: "SUHANA S", company: "IBS SOFTWARE" },
  { id: 4, name: "ATHIRA PREM", company: "ALLIANZ TECHNOLOGY" },
  {
    id: 5,
    name: "LAKSHMI RAJ",
    company: "EXPONENTIAL DIGITAL SOLUTIONS PVT. LTD.",
  },
  { id: 6, name: "ATIRASUDERSANAN", company: "TECH MAHINDRA" },
  { id: 7, name: "POOJA PUSHPAN", company: "TECH MAHINDRA" },
  { id: 8, name: "ARCHANA V KUMAR", company: "TECH MAHINDRA" },
  { id: 9, name: "POORNIMA MOHANDAS", company: "TECH MAHINDRA" },
  { id: 10, name: "ATHUL KRISHNAN", company: "CMS IT SERVICES" },
  { id: 11, name: "SHAHIN MOHAMMED", company: "CMS IT SERVICES" },
  { id: 12, name: "AMAL MANOHAR", company: "CMS IT SERVICES" },
  { id: 13, name: "CHARUTHA S B", company: "FACE ACADEMY" },
  { id: 14, name: "ALINA SHAJI", company: "KK GROUPS" },
  { id: 15, name: "SREELEKSHMI ANIL", company: "PALNAR TRANSMEDIA" },
  { id: 16, name: "ARUN KUMAR G", company: "ALOKIN SOFTWARE PVT. LTD" },
  { id: 17, name: "ABHIJA K.J", company: "SITE ENGINEER, RIGHT ANGLE, KOLLAM" },
  {
    id: 18,
    name: "ANJALI A PILLAI",
    company: "SITE ENGINEER, GREEN STRUCTURES, CHENGANNOOR",
  },
  { id: 19, name: "ARSHA SREEDHAR", company: "CORP ONE" },
  {
    id: 20,
    name: "ARUN SURENDRAN",
    company: "SITE ENGINEER, NEST BUILDERS, ADOOR",
  },
  { id: 21, name: "ARYA S", company: "SITE ENGINEER, RIGHT ANGLE, KOLLAM" },
  {
    id: 22,
    name: "ATHIRA RADH",
    company: "SITE ENGINEER, RIGHT ANGLE, KOLLAM",
  },
  {
    id: 23,
    name: "DEV H NAIR",
    company: "SITE ENGINEER, LANDWEY BUILDERS, KUNDRA",
  },
  {
    id: 24,
    name: "DEVIKA L",
    company: "SITE ENGINEER, GREEN STRUCTURES, CHENGANNOOR",
  },
  { id: 25, name: "DIVYA KUTTAN", company: "CORP ONE" },
  {
    id: 26,
    name: "GAYATHRI S",
    company: "SITE ENGINEER, NEST BUILDERS, ADOOR",
  },
  {
    id: 27,
    name: "HITHA A J",
    company: "SITE ENGINEER, LANDWEY BUILDERS, KUNDRA",
  },
  {
    id: 28,
    name: "INDULEKHA S",
    company: "SITE ENGINEER, GREEN STRUCTURES, CHENGANNOOR",
  },
  { id: 29, name: "JERIN SARA SAMUEL", company: "CORP ONE" },
  { id: 30, name: "JILU KURIAKOSE", company: "CORP ONE" },
  {
    id: 31,
    name: "NEETHU MARIUM THOMAS",
    company: "SITE ENGINEER, GRAVITY BUILDERS, TVM",
  },
  {
    id: 32,
    name: "RINCY CHERIYAN",
    company: "SITE ENGINEER, K. LEKSHMAN & CO., KOLLAM",
  },
  { id: 33, name: "SHILPA RAJAN", company: "CORP ONE" },
  {
    id: 34,
    name: "SILPA REVEENDRAN",
    company: "SITE ENGINEER, K. LEKSHMAN & CO., KOLLAM",
  },
  {
    id: 35,
    name: "SREELEKSHMI PRASANNAN",
    company: "SITE ENGINEER, GRAVITY BUILDERS, TVM",
  },
  { id: 36, name: "SREENATH R", company: "SITE ENGINEER, RIGHT ANGLE, KOLLAM" },
  { id: 37, name: "SRUTHI MURALEEDHARA KURUP", company: "CORP ONE" },
  {
    id: 38,
    name: "SULFIKKAR ALI S",
    company: "SITE ENGINEER, K. LEKSHMAN & CO., KOLLAM",
  },
  {
    id: 39,
    name: "VISHNULAL P K",
    company: "SITE ENGINEER, K. LEKSHMAN & CO., KOLLAM",
  },
  { id: 40, name: "MANU KRISHNAN", company: "AGILE BUSINESS CONSULTANCY" },
  {
    id: 41,
    name: "NITHIN RAJU",
    companies: [
      "CORP ONE",
      "LAMBTON COLLEGE, TORONTO, CANADA (HIGHER STUDIES)",
    ],
  },
  { id: 42, name: "VISHNU PRAKASH VAIKUNDATHU", company: "CORP ONE" },
  { id: 56, name: "SANDEEP SURESH", company: "LEE BUILDERS, PERUMBAVOOR" },
  { id: 57, name: "ANOOP A", company: "NDT SYSTEMS PVT LTD" },
  { id: 58, name: "SANOOP P", company: "NIPPON TOYOTA, KALAMASSERY" },
  { id: 59, name: "M S AKSHAY SIVA", company: "IOCL, GUJARATH" },
  { id: 60, name: "ARAVIND T", company: "MAKS AUTOMATION PVT LTD" },
  {
    id: 61,
    name: "DHANANJAY RAJESH",
    company: "TRADE APPRENTICE, PREMIER TYRES ENTERPRISES LTD, KERALA",
  },
  { id: 62, name: "GOKUL S", company: "GRADUATE APPRENTICE, VSSC" },
  {
    id: 63,
    name: "JIDHU PRASAD RAVI PRASAD",
    company: "PLUS TECH ENGINEERING PVT LTD",
  },
  {
    id: 64,
    name: "KARTHIK. R",
    company: "TRADE APPRENTICE, PREMIER TYRES ENTERPRISES LTD, KERALA",
  },
  {
    id: 65,
    name: "MANU M PILLAI",
    company: "TRADE APPRENTICE, PREMIER TYRES ENTERPRISES LTD, KERALA",
  },
  { id: 66, name: "PRAVEEN G", company: "MAKS AUTOMATION PVT LTD" },
  {
    id: 67,
    name: "AMITH G NAIR",
    company: "ENGINEER TRAINEE, MANTOVANI DI DHARTI PVT LTD, TELENGANA",
  },
  { id: 68, name: "M K KOSHY", company: "AUTOCONTROL SYSTEMS, GUJARAT" },
  { id: 69, name: "APPU RAJ", company: "PLUS TECH ENGINEERING PVT. LTD." },
  {
    id: 70,
    name: "ABDUL BASITH ISMAIL",
    company: "BAPCO INFRASTRUCTURE AND PVT. LTD.",
  },
  { id: 71, name: "ANANDU P", company: "NDT SYSTEMS PVT LTD" },
  {
    id: 72,
    name: "AMMU RAVINDRAN",
    company: "TECH MAHINDRA, CORPONE, UST GLOBAL",
  },
  {
    id: 73,
    name: "ANJALI PILLAI",
    companies: ["TECH MAHINDRA", "CMS IT SERVICES"],
  },
  {
    id: 74,
    name: "ANJALI VENUGOPAL",
    companies: ["TECH MAHINDRA", "CORPONE", "CMS IT SERVICES", "UST GLOBAL"],
  },
  { id: 75, name: "APARNA S", companies: ["CORPONE", "VVDN TECHNOLOGIES"] },

  { id: 76, name: "ARJUN DAS", company: "CORPONE" },
  {
    id: 77,
    name: "ARYA A",
    companies: ["TECH MAHINDRA", "CORPONE", "CMS IT SERVICES"],
  },
  { id: 78, name: "ASHA PHILIP GEORGE", companies: ["CORPONE", "UST GLOBAL"] },
  { id: 79, name: "ASWATHY SURENDRAN PILLAI", company: "TECH MAHINDRA" },
  {
    id: 80,
    name: "G NANDITHA VENUGOPAL",
    companies: [
      "TECH MAHINDRA",
      "AGILE BUSINESS CONSULTANCY",
      "CORPONE",
      "UST GLOBAL",
    ],
  },
  { id: 81, name: "GOPIKA G", company: "CORPONE" },
  {
    id: 82,
    name: "JAISON JOHN",
    companies: [
      "TECH MAHINDRA",
      "AGILE BUSINESS CONSULTANCY",
      "CORPONE",
      "CMS IT SERVICES",
    ],
  },

  { id: 83, name: "JIBI ANN KURUVILA", company: "CORPONE" },
  { id: 84, name: "JISHNU P NAIR", companies: ["CORPONE", "ERNST & YOUNG"] },
  {
    id: 85,
    name: "MEENU G NAIR",
    companies: [
      "TECH MAHINDRA",
      "CRANES SOFTWARE INTERNATIONAL LIMITED",
      "UST GLOBAL",
      "IBS",
    ],
  },
  { id: 86, name: "MEENU M JOHN", company: "UST GLOBAL" },
  { id: 87, name: "PRIYANKA P T", company: "CORPONE" },
  {
    id: 88,
    name: "RENJIKAMAL REGHUNATHAN",
    companies: ["CORPONE", "CMS IT SERVICES", "INFOSYS", "TATA ELXSI"],
  },

  { id: 89, name: "RENJU R NAIR", company: "CORPONE" },
  {
    id: 90,
    name: "SIVA PRASAD M",
    companies: ["TECH MAHINDRA", "CORPONE", "CMS IT SERVICES"],
  },

  {
    id: 91,
    name: "SRUTHY M",
    companies: ["TECH MAHINDRA", "CMS IT SERVICES", "UST GLOBAL"],
  },

  { id: 92, name: "THANUSREE M", companies: ["CORPONE", "UST GLOBAL"] },
  { id: 93, name: "VIGNESH R", company: "CORPONE" },
  { id: 94, name: "MALAVIKA ANIL", company: "CORPONE" },
  { id: 95, name: "AISWARYA B", company: "CORPONE" },
  { id: 96, name: "DIVYA CHANDRAN", company: "CORPONE" },
  { id: 97, name: "MERIN SARA JOHN", company: "TECH MAHINDRA IT SERVICES" },
  { id: 98, name: "NANDHANA A", company: "TECH MAHINDRA IT SERVICES" },
  { id: 99, name: "GREESHMA S", company: "TECH MAHINDRA IT SERVICES" },
  { id: 100, name: "SHARON MARIAM JACOB", company: "CORPONE" },
  { id: 101, name: "ARUN M P", company: "CORPONE" },
  {
    id: 102,
    name: "NEENU SURENDRAN",
    company: "UNIBIOSYS BIOTECH RESEARCH LABS (UBRL)",
  },
];

const students2 = [
  { id: 1, name: "Mr. ANANTHU H KUMAR", company: "AMAZON" },
  { id: 2, name: "Mr. TINU THAMPY", company: "WIPRO" },
  { id: 3, name: "Mr. ARAVIND S", company: "WIPRO" },
  { id: 4, name: "Ms. ALINA M GEORGE", company: "ICON CLINICAL RESEARCH" },
  { id: 5, name: "Ms. RIYA GEORGE", company: "ICON CLINICAL RESEARCH" },
  { id: 6, name: "Ms. JISHA MOHAN", company: "ICON CLINICAL RESEARCH" },
  { id: 7, name: "Mr. NIRMAL U", company: "UST Global" },
  { id: 8, name: "Ms. ASWATHI S", company: "UST Global" },
  { id: 9, name: "Mr. BILAL BIN NAZAR", company: "UST Global" },
  { id: 10, name: "Ms. SHILPA S PILLAI", company: "UST Global" },
  { id: 11, name: "Ms. LEKSHMY P S", company: "UST Global" },
  { id: 12, name: "Ms. ALINA M GEORGE", company: "HEXAWARE" },
  { id: 13, name: "Mr. FARIS WAHID", company: "SPERIDIAN" },
  { id: 14, name: "Ms. ALINA M GEORGE", company: "SPERIDIAN" },
  { id: 15, name: "Mr. ARAVIND R", company: "SPERIDIAN" },
  { id: 16, name: "Mr. SURAJ SARMA", company: "EXPERION" },
  { id: 17, name: "Ms. SHILPA S PILLAI", company: "POORNAM INFOVISION" },
  { id: 18, name: "Ms. SNEHA RAJAN", company: "POORNAM INFOVISION" },
  { id: 19, name: "Mr. SURAJ SARMA", company: "POORNAM INFOVISION" },
  { id: 20, name: "Mr. BILAL BIN NAZAR", company: "POORNAM INFOVISION" },

  { id: 21, name: "Mr. ANATHAKRISHNAN A", company: "POORNAM INFOVISION" },
  { id: 22, name: "Ms. ALINA M GEORGE", company: "POORNAM INFOVISION" },
  { id: 23, name: "Ms. J AARCHA RAJ", company: "ACCENTA" },
  { id: 24, name: "Ms. GAURI MOHAN", company: "ACCENTA" },
  { id: 25, name: "Ms. RIYA GEORGE", company: "ACCENTA" },
  { id: 26, name: "Mr. SURAJ SARMA", company: "ACCENTA" },
  { id: 27, name: "Mr. NARAYANAN N", company: "ACCENTA" },
  { id: 28, name: "Ms. EMAAN FATHIMA", company: "ACCENTA" },
  { id: 29, name: "Mr. VISHNU MAHESH", company: "ACCENTA" },
  { id: 30, name: "Ms. MEENAKSHI VISWOM", company: "ACCENTA" },
  { id: 31, name: "Ms. POOJA HARI", company: "ACCENTA" },
  { id: 32, name: "Ms. VRINDHA R", company: "ACCENTA" },
  { id: 33, name: "Mr. SACHINMAYAN S", company: "ACCENTA" },
  { id: 34, name: "Ms. ANISHA P", company: "ACCENTA" },
  { id: 35, name: "Ms. ABEL ALEX NINAN", company: "ACCENTA" },
  { id: 36, name: "Mr. ABHISHEK S", company: "ACCENTA" },
  { id: 37, name: "Ms. PRASHANTI S", company: "ACCENTA" },
  { id: 38, name: "Ms. SHERRIN THOMAS", company: "ACCENTA" },
  { id: 39, name: "Mr. AKHIL RAVI", company: "ACCENTA" },
  { id: 40, name: "Mr. AMAL RAJ", company: "ACCENTA" },
  { id: 41, name: "Ms. GOPIKA R", company: "ACCENTA" },
  { id: 42, name: "Ms. SREDHA R", company: "ACCENTA" },
  { id: 43, name: "Ms. SURYA BABU", company: "ACCENTA" },
  { id: 44, name: "Ms. SOORA U", company: "ACCENTA" },
  { id: 45, name: "Mr. NIRMAL U", company: "ACCENTA" },
  { id: 46, name: "Ms. SNEHA RAJAN", company: "ACCENTA" },
  { id: 47, name: "Ms. ANILA L", company: "ACCENTA" },
  { id: 48, name: "Ms. KAVYA S NAIR", company: "ACCENTA" },
  { id: 49, name: "Mr. ARAVIND S", company: "ACCENTA" },
  { id: 50, name: "Ms. RIYA GEORGE", company: "INFINIZ IT SOLUTIONS" },
  { id: 51, name: "Mr. SURAJ SARMA", company: "INFINIZ IT SOLUTIONS" },
  { id: 52, name: "Mr. NARAYANAN N", company: "INFINIZ IT SOLUTIONS" },
  { id: 53, name: "Ms. SHILPA S PILLAI", company: "INFINIZ IT SOLUTIONS" },
  { id: 54, name: "Ms. ASWATHI S", company: "INFINIZ IT SOLUTIONS" },
  { id: 55, name: "Ms. GOPIKA R", company: "INFINIZ IT SOLUTIONS" },
  { id: 56, name: "Mr. JITTO SUNNY", company: "INFINIZ IT SOLUTIONS" },
  { id: 57, name: "Mr. FIROZ L", company: "INFINIZ IT SOLUTIONS" },
  { id: 58, name: "Mr. KIRAN S", company: "INFINIZ IT SOLUTIONS" },
  { id: 59, name: "Ms. ARYALEKSHI J", company: "INFINIZ IT SOLUTIONS" },
  { id: 60, name: "Mr. JISHNU S MOHAN", company: "INFINIZ IT SOLUTIONS" },
  { id: 61, name: "Ms. VARSHA S PILLAI", company: "INFINIZ IT SOLUTIONS" },
  { id: 62, name: "Ms. KAVYA S NAIR", company: "INFINIZ IT SOLUTIONS" },
  { id: 63, name: "Mr. ANANDU SRINIVAS", company: "INFINIZ IT SOLUTIONS" },
  { id: 64, name: "Ms. DIVYA VANAMALI D", company: "INFINIZ IT SOLUTIONS" },
  { id: 65, name: "Ms. ANILA A", company: "INFINIZ IT SOLUTIONS" },
  { id: 66, name: "Ms. TISHA CATHERINE TOM", company: "INFINIZ IT SOLUTIONS" },
  { id: 67, name: "Ms. AMMU VIJAY", company: "INFINIZ IT SOLUTIONS" },
  { id: 68, name: "Mr. JEEVAN P VENU", company: "INFINIZ IT SOLUTIONS" },
  { id: 69, name: "Ms. VIJISHA V", company: "INFINIZ IT SOLUTIONS" },
  { id: 70, name: "Ms. ANISHA P", company: "INFINIZ IT SOLUTIONS" },
  { id: 71, name: "Mr. SOURAV S", company: "INFINIZ IT SOLUTIONS" },
  { id: 72, name: "Ms. ALINA M GEORGE", company: "INFINIZ IT SOLUTIONS" },
  { id: 73, name: "Ms. VRINDHA R", company: "INFINIZ IT SOLUTIONS" },
  { id: 74, name: "Mr. STENY RAJ STEPHEN", company: "AGILE BUSINESS SOLUTION" },
  { id: 75, name: "Mr. MANU KRISHNAN", company: "AGILE BUSINESS SOLUTION" },
  { id: 76, name: "Ms. PARVATHI NAIR", company: "AGILE BUSINESS SOLUTION" },
  { id: 77, name: "Ms. LEKSHMY P S", company: "SUPPORT SAGES" },
];
const images = Array.from(
  { length: 98 },
  (_, i) => `assets/images/placement-students/image_${i + 3}.jpg`
);

const page = () => {
  return (
    <div className="page">
      <div className="page_heading">Academic Year : 2017-18 (18 Passouts)</div>
      <div className="line"></div>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="image-card">
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Companies</th>
            </tr>
          </thead>
          <tbody>
            {students.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>
                  {Array.isArray(person.companies) ? (
                    person.companies.map((company, index) => (
                      <div key={index}>{`${index + 1}. ${company}`}</div> // Remove extra numbering
                    ))
                  ) : (
                    <div>{person.company}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="page_heading">Academic Year : 2018-19 (19 Passouts)</div>
      <div className="line"></div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Companies</th>
            </tr>
          </thead>
          <tbody>
            {students.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>
                  {Array.isArray(person.companies) ? (
                    person.companies.map((company, index) => (
                      <div key={index}>{`${index + 1}. ${company}`}</div> // Remove extra numbering
                    ))
                  ) : (
                    <div>{person.company}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
