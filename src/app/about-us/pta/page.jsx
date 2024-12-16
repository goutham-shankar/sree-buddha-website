"use client"

import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className='page'>
            <h1 className='page_heading'>Parent-Teacher Association (PTA)</h1>
            <div className="line"></div>
            <h2>Sree Buddha College of Engineering, Pattoor (PTASBCE)</h2>
            <p>The PTA of Sree Buddha College of Engineering aims to foster and promote a good relationship among members of the faculty, students, and guardians of students. The administration of the association vests in an executive committee elected annually. The Principal is the ex-officio President, while the Chairman, Secretary, and Treasurer of the Managing Committee of the college are honorary members of the PTA.</p>
            <p>The association consists of 28 members, with 14 members from guardians and 14 from the teaching staff (HODs and faculty members from all departments). A secretary is elected from among the faculty.</p>

            <h3>PTA Executive Members</h3>
            <table>
                <tbody>
                <tr>
                    <th>Role</th>
                    <th>Name</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>PTA President</td>
                    <td>Dr. K. Krishnakumar (Principal)</td>
                    <td>7907697944</td>
                </tr>
                <tr>
                    <td>Mr. P Salimkumar (Parent)</td>
                    <td>9447504384</td>
                </tr>
                <tr>
                    <td>PTA Secretary</td>
                    <td>Ms. Reeba R (AP, Department of CSE)</td>
                    <td>9446191031</td>
                </tr>
                </tbody>
            </table>

            <h3>Heads of Department</h3>
            <table>
                <tbody>
                <tr>
                    <th>Department</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                </tr>
                <tr><td>BT/BCE</td><td>Dr. Anoop Raj J R</td><td>8281868205</td></tr>
                <tr><td>CS</td><td>Dr. S V Annlin Jeba</td><td>9487274466</td></tr>
                <tr><td>ME</td><td>Dr. Saji Varghese</td><td>8606398371</td></tr>
                <tr><td>CE</td><td>Dr. Gouri Antherjanam</td><td>9446112617</td></tr>
                <tr><td>EEE</td><td>Prof. Vinod V P</td><td>9048260779</td></tr>
                <tr><td>ECE</td><td>Ms. Pavitha P P</td><td>9995832228</td></tr>
                <tr><td>BS</td><td>Prof. Vijayan K</td><td>9447857591</td></tr>
                </tbody>
            </table>

            <h3>Executive Members (Faculty)</h3>
            <table>
                <tbody>
                <tr>
                    <th>Department</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                </tr>
                <tr><td>BT/BCE</td><td>Ms. Anju Raj</td><td>9539360681</td></tr>
                <tr><td>CS</td><td>Ms. Reeba R</td><td>9446191031</td></tr>
                <tr><td>ME</td><td>Mr. Gokul O</td><td>9447988318</td></tr>
                <tr><td>CE</td><td>Mr. Ashok Mathew</td><td>9645287537</td></tr>
                <tr><td>EEE</td><td>Ms. Juna John Daniel</td><td>9895610435</td></tr>
                <tr><td>ECE</td><td>Mr. Vishnu V.S</td><td>9947062806</td></tr>
                </tbody>
            </table>

            <h3>Parents</h3>
            <table>
                <tbody>
                <tr>
                    <th>Year</th>
                    <th>Department</th>
                    <th>Name of Parent</th>
                    <th>Name of Student</th>
                    <th>Phone Number</th>
                </tr>
                <tr><td>IV</td><td>EEE</td><td>Mr. V K Sreekumar</td><td>Arjun S Kumar</td><td>9447272528</td></tr>
                <tr><td>IV</td><td>CS</td><td>Mr. Nazar Kunju</td><td>Bilal</td><td>9446191246</td></tr>
                <tr><td>IV</td><td>CE</td><td>Ms. Suja Thomas</td><td>Denna Grace Thomas</td><td>9961855781</td></tr>
                <tr><td>III</td><td>EEE</td><td>Ms Chinmaya Prasad</td><td>Arya C</td><td>9747540816</td></tr>
                <tr><td>III</td><td>CS</td><td>Mr. Madhusoodhanan T S</td><td>Meghna Madhu</td><td>9496231359</td></tr>
                <tr><td>III</td><td>CE</td><td>Mr. P Salim Kumar</td><td>Jagath Preeth S</td><td>9447504384</td></tr>
                <tr><td>III</td><td>BT</td><td>Mr. T Jayamohan</td><td>Abhay J Mohan</td><td>9497487776</td></tr>
                <tr><td>III</td><td>ECE</td><td>Mr. Johnson K</td><td>Justy John</td><td>9633752235</td></tr>
                <tr><td>III</td><td>ME</td><td>Mr. M S Unnithan</td><td>Kiran Raj</td><td>9496316287</td></tr>
                <tr><td>II</td><td>EEE</td><td>Ms Jeena Jacob</td><td>Joby Sara Jacob</td><td>9447404029</td></tr>
                <tr><td>II</td><td>CS</td><td>Ms. Sunitha S</td><td>Megha P S</td><td>9496694208</td></tr>
                <tr><td>II</td><td>CE</td><td>Mr. Radha Krishnan</td><td>Harisankar R</td><td>9497259215</td></tr>
                <tr><td>II</td><td>BT</td><td>Mr. Mohanlal Raghavan</td><td>Gayathri Mohanlal</td><td>8078268617</td></tr>
                <tr><td>II</td><td>ECE</td><td>Mr. Ajith Kumar S</td><td>Athira S Ajith</td><td>8547430674</td></tr>
                <tr><td>II</td><td>ME</td><td>Mr. Praveen Kumar</td><td>Akshayn R Praveen</td><td>9447409186</td></tr>
                </tbody>
            </table>

        </div>
    )
}
