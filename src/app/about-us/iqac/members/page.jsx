import React from "react";

import "./style.css"

const Page = () => {
    // Define the table data as a 2D array
    const tableData = [

        ["1", "Dr. K. Krishnakumar", "Principal", "Chairperson"],
        ["2", "Mr. A. Sunil Kumar", "Treasurer, SBCE", "Management Representative"],
        ["3", "Dr. M. S. Senthil Saravanan", "Professor", "Director"],
        ["4", "Mrs. Viji Chandran", "Asst. Professor", "Member – BT"],
        ["5", "Dr. Ajesh F", "Asso. Professor", "Member – CSE"],
        ["6", "Mrs. Regi P Mohan", "Asst. Professor", "Member – CE"],
        ["7", "Mrs. Saritha N R", "Asst. Professor", "Member – ECE"],
        ["8", "Mrs. Athena", "Asst. Professor", "Member – EEE"],
        ["9", "Dr. J. B. Sajin", "Asso. Professor", "Member – ME"],
        ["10", "Mrs. Anju. B. I", "Asst. Professor", "Member – BS"],
        ["11", "Mr. Pradeep Kumar", "Asst. Professor", "Member – HR"],
        ["12", "Mrs. Disha", "Asst. Professor", "Member – Library"],
        ["13", "Mr. Chandrababu", "Administrative Officer", "Member – Office"],
        ["14", "Mr. Nishanth Rajan", "CEO, Cadmium Technologies, Thiruvananthapuram", "Industry Representative"],
        ["15", "Mr. Siddarth Rajeev", "IoT Architect, TCS, Kochi", "Alumni Representative"],
        ["16", "Student Chairman", "SAC", "Representing Students Representative"],
        ["17", "PTA Vice President", "PTA", "Parents Representative"],
        ["18", "President", "Nooranad Panchayat", "Local Body Representative"],
    ];

    return (
        <div className="iqac_content">
            {/* <h1 className="page_heading2">Proceedings of the Principal</h1> */}
            <h1 className="page_heading2">Members</h1>
            {/* <p>
                <strong>Sub:</strong> IQAC members' - Nomination 2023
            </p>
            <p>
                The following faculty members are nominated as the member for Internal
                Quality Assurance Cell of SBCE to administer the Quality Assurance
                activities as per the direction of NAAC and KTU guidelines.
            </p> */}
            <table className="members_table">
              
                <tbody>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Position in IQAC</th>
                    </tr>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    style={{
                                        border: "1px solid black",
                                        padding: "10px",
                                        textAlign: "left",
                                    }}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="members_details">
                {
                    tableData.map((row) => {
                        return (

                            <div className="single_member">

                                <span className="member_name">{row[1]}</span>
                                <span>{row[2]}</span>
                                <span>{row[3]}</span>


                            </div>

                        )


                    })
                }

            </div>

        </div>
    );
};

export default Page;
