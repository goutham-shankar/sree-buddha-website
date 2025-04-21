import React from 'react'

export default function ComputerScienceDepartmentFacilities() {
    return (
        <div>


            <h1 class="heading1">Department of Electrical & Electronics Engineering</h1>

            {
            /* 

            <h2 class="heading2">Facilities</h2>
            <p>
                The Department of Electrical & Electronics Engineering is dedicated to the current needs of industry with the flexibility to tune its programmes according to the different requirements. Application of the state-of-the-art technology in various fields is one of the main focuses in the activities of the department. The department is well-equipped for training the students with a streamlined curriculum that provides an ambient atmosphere for learning and acquiring new skills. The department focuses on providing sound theoretical background as well as good practical exposure to the students for their future endeavors. Hence the following laboratories are actively utilised:
            </p>
            <ul>
                <li>Electrical Machines Lab</li>
                <li>Power System & High Voltage Engg Lab</li>
                <li>Measurements and Instrumentation Lab</li>
                <li>Electronics Circuits Lab</li>
                <li>Power Electronics Lab</li>
                <li>Systems and Control Lab</li>
                <li>Microprocessor and Software Lab</li>
                <li>Electrical and Electronics Workshop</li>
                <li>PG Systems Lab</li>
                <li>PG Research Lab</li>
                <li>Seminar Hall</li>
            </ul>

            <h2 class="heading2">Research and Consultancy</h2>
            <p>
                In order to fit into the modern era of technology advancement, the Dept. of EEE lays considerable importance to in-house research. Due to the presence of a PG programme in the dept. in the area of Electrical Machines, much of the researches take place in this domain. These researches are carried out by the PG students, under the guidance of various faculties of the department. Some of the research topics in this domain are as follows:
            </p>
            <ul>
                <li>Design of new kinds of electrical machines, e.g. design of rotary linear switched reluctance motor for applications involving hybrid motion.</li>
                <li>Position, speed & torque control of various electrical machines through different methods, e.g. Sensor-less control of BLDC motors.</li>
                <li>Development of environment-friendly electric drives, e.g. Implementation of low-cost converter for an autonomous photovoltaic water pumping system.</li>
                <li>Development of energy-saving schemes, e.g. Energy regeneration during the braking of electric vehicles.</li>
                <li>Fault detection in various machines, e.g. Novel bearing fault detection and analysis of induction machines.</li>
                <li>Development of sensors for condition monitoring of electrical machines, e.g. Development of cost-effective sensor for estimation of dissolved moisture in transformer oil.</li>
            </ul>
            <p>
                To support these researches, in addition to the regular electrical machines lab, there is a full-fledged research lab in the department with custom-designed Induction Motor, BLDC motor and SRM motor drives and their controllers for analysis and advanced machine design & control software such as Maxwell, Simplorer, and MATLAB. Apart from the research carried out in the PG stream, many developments are also done by the UG students under the guidance of various faculties in the department.
            </p>

            <h2 class="heading2">Department Library</h2>
            <p>
                Apart from a highly equipped Central Library, the Electrical and Electronics Engineering Department separately owns a standard library. This Department Library has several foreign and well-known publishers’ books and study materials related to Electrical Engineering along with the textbooks and reference books prescribed by the University of Kerala as part of the Electrical Engineering curriculum. The Department is proud as the Faculty Members and students rely on the library faithfully for their reference, development, and research activities.
            </p>
            <p>
                Apart from the above-mentioned texts and references, the Department also takes the initiative in subscribing to various Technical Journals and Magazines. The Faculty Members and students having IEEE Membership help in updating the Department.
            </p>

            <h2 class="heading2">Laboratories</h2>

            <h2 class="heading2">Basic Electrical Engineering Workshop</h2>
            <p>
                Basic Electrical engineering workshop is intended to make the students aware of the basics of electrical engineering which includes different types of wiring, measurement of energy, etc.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility1.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Chama R Chandran
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Sudheesh M S
            </p>

            <h2 class="heading2">Electrical Machines Lab</h2>
            <p>
                This lab facilitates different AC and DC machines. This lab gives students an idea of starting, speed controlling, loading, and different other experiments in electrical machines.

            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility2.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Mr. Sheleel F
            </p>
            <p>
                <strong>Technical Staff:</strong> Ms. Chitra P
            </p>

            <h2 class="heading2">Power System & High Voltage Engg Lab</h2>
            <p>
                This lab facilitates different hardware and software experiments in power systems, including major experiments like impulse waveform generation, different types of relays, earth resistance measurement, cable, and transformer oil testing.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility3.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Gayathri V
            </p>
            <p>
                <strong>Technical Staff:</strong> Ms. Chitra P
            </p>

            <h2 class="heading2">Measurements and Instrumentation Lab</h2>
            <p>
                This lab facilitates different types of transducers used for measurement in the field of electrical engineering.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility4.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Juna John Daniel
            </p>
            <p>
                <strong>Technical Staff:</strong> Ms. Chithra P B
            </p>

            <h2 class="heading2">Electronics Circuits Lab</h2>
            <p>
                This lab facilitates different electronic circuits using semiconductor switches like op-amp, diodes, MOSFET, JFET, ICs, etc.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility5.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Mr. Ananthu V
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Sudheesh M S
            </p>

            <h2 class="heading2">Power Electronics Lab</h2>
            <p>
                This lab facilitates different types of firing circuits of SCR, DIAC, TRIAC, MOSFET, and drives for DC motors. It also includes software simulation of variable speed control of different motors.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility6.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Vijina K
            </p>
            <p>
                <strong>Technical Staff:</strong> Ms. Chithra P B
            </p>

            <h2 class="heading2">Systems and Control Lab</h2>
            <p>
                This lab facilitates different types of servomotors, time response circuits, controllers, and control circuits.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility7.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Mr. Vishnu J
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Ratheesh
            </p>

            <h2 class="heading2">Digital Circuits and Embedded Systems Lab</h2>
            <p>
                This lab facilitates microprocessors 8085 and 8086, microcontroller 8051, and experiments in IC trainer kits.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility7.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Mr. Sreekanth P K
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Ratheesh R
            </p>

            <h2 class="heading2">PG Systems Lab</h2>
            <p>
                This lab facilitates different simulation software like MATLAB, Maxwell, and PSIM.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility8.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Abhilasha Parthan
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Ratheesh R
            </p>

            <h2 class="heading2">PG Research Lab</h2>
            <p>
                This lab facilitates different special electrical machines with their driver circuit and software supporting them.
            </p>
            <img src={"/assets/images/departments/facilities/eee/eee_facility9.jpg"} alt="image" />
            <p>
                <strong>Lab in Charge:</strong> Ms. Abhilasha Parthan
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Ratheesh R
            </p>

            <h2 class="heading2">Seminar Hall</h2>
            <p>
                A well-equipped seminar hall with more than 100 seating capacity.
            </p>
            <p>
                <strong>In Charge:</strong> Ms. Sindhu V
            </p>
            <p>
                <strong>Technical Staff:</strong> Mr. Sudheesh M S
            </p> */}


        </div>
    )
}
