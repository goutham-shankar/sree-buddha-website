import React from 'react'
import "./advisory.css";
import AIMLTable from '@/components/academics/aiml';
import BioTable from '@/components/academics/bio';
import CeTable from '@/components/academics/ce';
import CsTable from '@/components/academics/cs';
import EcTable from '@/components/academics/ec';
import EeTable from '@/components/academics/ee';

export default function Advisory() {
  
    return (
      <div className='adv'>
        <h2>ADVISORY SYSTEM</h2>
        <p>After taking admission, each student will be assigned to a faculty member called staff advisor . Every batch will have a staff advisor  who keeps a file for personal and academic details of each student. The student and his parent can have frequent interaction with the staff advisor. After the results of each examination the details will be recorded in the student file. The staff advisor will record  outstanding performance,disciplinary action (if any), misbehavior etc., in the student file. </p>
        <div className="adv-tables">
          <AIMLTable/>
          <BioTable/>
          <CeTable></CeTable>
          <CsTable></CsTable>
          <EcTable></EcTable>
          <EeTable></EeTable>
        </div> 
      </div>
    );
  }