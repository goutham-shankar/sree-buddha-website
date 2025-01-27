"use client"

import React from 'react'
import "./style.css"

export default function Page() {
    return (
        <div className='page'>
            <h1 className='page-heading'>Parent-Teacher Association (PTA)</h1>
            <div className='line'></div>
            <h2 className='college-name'>Sree Buddha College of Engineering, Pattoor (PTASBCE)</h2>
            <p className='description'>The PTA of Sree Buddha College of Engineering aims to foster and promote a good relationship among members of the faculty, students, and guardians of students. The administration of the association vests in an executive committee elected annually. The Principal is the ex-officio President, while the Chairman, Secretary, and Treasurer of the Managing Committee of the college are honorary members of the PTA.</p>
            <p className='description'>The association consists of 28 members, with 14 members from guardians and 14 from the teaching staff (HODs and faculty members from all departments). A secretary is elected from among the faculty.</p>

            <h3 className='section-heading'>PTA Executive Members</h3>
            <table className='table'>
                <thead>
                    <tr className='table-row'>
                        <th className='table-header'>Role</th>
                        <th className='table-header'>Name</th>
                        <th className='table-header'>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'>
                        <td className='table-data'>PTA President</td>
                        <td className='table-data'>Dr. K. Krishnakumar (Principal)</td>
                        <td className='table-data'>7907697944</td>
                    </tr>
                    <tr className='table-row'>
                        <td className='table-data'>Parent Representative</td>
                        <td className='table-data'>Mr. P Salimkumar</td>
                        <td className='table-data'>9447504384</td>
                    </tr>
                    <tr className='table-row'>
                        <td className='table-data'>PTA Secretary</td>
                        <td className='table-data'>Ms. Reeba R (AP, Department of CSE)</td>
                        <td className='table-data'>9446191031</td>
                    </tr>
                </tbody>
            </table>

            <h3 className='section-heading'>Heads of Department</h3>
            <table className='table'>
                <thead>
                    <tr className='table-row'>
                        <th className='table-header'>Department</th>
                        <th className='table-header'>Name</th>
                        <th className='table-header'>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'><td className='table-data'>BT/BCE</td><td className='table-data'>Dr. Anoop Raj J R</td><td className='table-data'>8281868205</td></tr>
                    <tr className='table-row'><td className='table-data'>CS</td><td className='table-data'>Dr. S V Annlin Jeba</td><td className='table-data'>9487274466</td></tr>
                    <tr className='table-row'><td className='table-data'>ME</td><td className='table-data'>Dr. Saji Varghese</td><td className='table-data'>8606398371</td></tr>
                    <tr className='table-row'><td className='table-data'>CE</td><td className='table-data'>Dr. Gouri Antherjanam</td><td className='table-data'>9446112617</td></tr>
                    <tr className='table-row'><td className='table-data'>EEE</td><td className='table-data'>Prof. Vinod V P</td><td className='table-data'>9048260779</td></tr>
                    <tr className='table-row'><td className='table-data'>ECE</td><td className='table-data'>Ms. Pavitha P P</td><td className='table-data'>9995832228</td></tr>
                    <tr className='table-row'><td className='table-data'>BS</td><td className='table-data'>Prof. Vijayan K</td><td className='table-data'>9447857591</td></tr>
                </tbody>
            </table>

            <h3 className='section-heading'>Executive Members (Faculty)</h3>
            <table className='table'>
                <thead>
                    <tr className='table-row'>
                        <th className='table-header'>Department</th>
                        <th className='table-header'>Name</th>
                        <th className='table-header'>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'><td className='table-data'>BT/BCE</td><td className='table-data'>Ms. Anju Raj</td><td className='table-data'>9539360681</td></tr>
                    <tr className='table-row'><td className='table-data'>CS</td><td className='table-data'>Ms. Reeba R</td><td className='table-data'>9446191031</td></tr>
                    <tr className='table-row'><td className='table-data'>ME</td><td className='table-data'>Mr. Gokul O</td><td className='table-data'>9447988318</td></tr>
                    <tr className='table-row'><td className='table-data'>CE</td><td className='table-data'>Mr. Ashok Mathew</td><td className='table-data'>9645287537</td></tr>
                    <tr className='table-row'><td className='table-data'>EEE</td><td className='table-data'>Ms. Juna John Daniel</td><td className='table-data'>9895610435</td></tr>
                    <tr className='table-row'><td className='table-data'>ECE</td><td className='table-data'>Mr. Vishnu V.S</td><td className='table-data'>9947062806</td></tr>
                </tbody>
            </table>

            <h3 className='section-heading'>Parents</h3>
            <table className='table'>
                <thead>
                    <tr className='table-row'>
                        <th className='table-header'>Year</th>
                        <th className='table-header'>Department</th>
                        <th className='table-header'>Name of Parent</th>
                        <th className='table-header'>Name of Student</th>
                        <th className='table-header'>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'><td className='table-data'>IV</td><td className='table-data'>EEE</td><td className='table-data'>Mr. V K Sreekumar</td><td className='table-data'>Arjun S Kumar</td><td className='table-data'>9447272528</td></tr>
                    <tr className='table-row'><td className='table-data'>IV</td><td className='table-data'>CS</td><td className='table-data'>Mr. Nazar Kunju</td><td className='table-data'>Bilal</td><td className='table-data'>9446191246</td></tr>
                    <tr className='table-row'><td className='table-data'>IV</td><td className='table-data'>CE</td><td className='table-data'>Ms. Suja Thomas</td><td className='table-data'>Denna Grace Thomas</td><td className='table-data'>9961855781</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>EEE</td><td className='table-data'>Ms. Chinmaya Prasad</td><td className='table-data'>Arya C</td><td className='table-data'>9747540816</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>CS</td><td className='table-data'>Mr. Madhusoodhanan T S</td><td className='table-data'>Meghna Madhu</td><td className='table-data'>9496231359</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>CE</td><td className='table-data'>Mr. P Salim Kumar</td><td className='table-data'>Jagath Preeth S</td><td className='table-data'>9447504384</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>BT</td><td className='table-data'>Mr. T Jayamohan</td><td className='table-data'>Abhay J Mohan</td><td className='table-data'>9497487776</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>ECE</td><td className='table-data'>Mr. Johnson K</td><td className='table-data'>Justy John</td><td className='table-data'>9633752235</td></tr>
                    <tr className='table-row'><td className='table-data'>III</td><td className='table-data'>ME</td><td className='table-data'>Mr. M S Unnithan</td><td className='table-data'>Kiran Raj</td><td className='table-data'>9496316287</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>EEE</td><td className='table-data'>Ms. Jeena Jacob</td><td className='table-data'>Joby Sara Jacob</td><td className='table-data'>9447404029</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>CS</td><td className='table-data'>Ms. Sunitha S</td><td className='table-data'>Megha P S</td><td className='table-data'>9496694208</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>CE</td><td className='table-data'>Mr. Radha Krishnan</td><td className='table-data'>Harisankar R</td><td className='table-data'>9497259215</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>BT</td><td className='table-data'>Mr. Mohanlal Raghavan</td><td className='table-data'>Gayathri Mohanlal</td><td className='table-data'>8078268617</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>ECE</td><td className='table-data'>Mr. Ajith Kumar S</td><td className='table-data'>Athira S Ajith</td><td className='table-data'>8547430674</td></tr>
                    <tr className='table-row'><td className='table-data'>II</td><td className='table-data'>ME</td><td className='table-data'>Mr. Praveen Kumar</td><td className='table-data'>Akshayn R Praveen</td><td className='table-data'>9447409186</td></tr>
                </tbody>
            </table>

        </div>
    )
}
