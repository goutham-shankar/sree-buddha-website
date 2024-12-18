// components/AdvisorsTable.js
import React from 'react';

import { tableData } from './eeData.jsx';
import styles from './aimlcss.module.css'; // Import the CSS module

const EeTable = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Electrical and Electronics Engineering Department</h4>
      {tableData.map((semesterData, index) => (
        <table key={index} className={styles.table}>
          <thead>
            <tr>
              <th>Semester</th>
              <th>Batch</th>
              <th>#</th>
              <th>Name</th>
              <th>Ph.No</th>
            </tr>
          </thead>
          <tbody>
            {semesterData.batches.map((batch) => (
              <>
                {batch.advisors.length > 0 ? (
                  batch.advisors.map((advisor) => (
                    <tr key={`${batch.name}-${advisor.id}`}>
                      <td>{semesterData.semester}</td>
                      <td>{batch.name}</td>
                      <td>{advisor.id}</td>
                      <td>{advisor.name}</td>
                      <td>{advisor.phone}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={`${batch.name}-empty`}>
                    <td>{semesterData.semester}</td>
                    <td>{batch.name}</td>
                    <td colSpan="4" className={styles.noAdvisors}>
                      No advisors available
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default EeTable;
