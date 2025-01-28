import React from 'react';
import DownloadButton from '@/components/common/DownloadButton';

export default function page() {
    const notifications = [
        {
          path: "/assets/documents/autonomous/examination_cell/notification-auto.pdf",
          title: "First Series Examination – Oct 2024 Notification"
        },
        {
          path: "/assets/documents/autonomous/examination_cell/notification-auto3.pdf",
          title: "Retest – Nov 2024 Notification"
        },
        {
          path: "/assets/documents/autonomous/examination_cell/Registration-Notification.pdf",
          title: "End Semester Registration Notification – Jan 2025"
        },
        {
          path: "/assets/documents/autonomous/examination_cell/S1-PG-END-SEMESTER-EXAMINATION-NOTIFICATION.pdf",
          title: "S1 PG End Semester Examination Notification – Jan 2025"
        }
      ];
      
      const forms = [
        {
          path: "/assets/documents/autonomous/examination_cell/APPLICATION-FORM-OF-ATTENDANCE.pdf",
          title: "Application Form of Attendance"
        },
        {
          path: "/assets/documents/autonomous/examination_cell/APPLICATION-FORM-TO-AVAIL-THE-SERVICE-OF-SCRIBE.pdf",
          title: "Application Form to Avail the Service of Scribe"
        },
        {
          path: "/assets/documents/autonomous/examination_cell/RETEST-FORM-2024.pdf",
          title: "Retest Form – 2024"
        }
      ];

    return (
        <div className='page'>
            <h3 className='page_heading'>Examination Cell</h3>
            <h3 className="page_heading2">Notifications</h3>
            <div>
                {notifications.map((document, index) => (
                    <DownloadButton
                        key={index}
                        title={document.title}
                        link={document.path}
                    />
                ))}
            </div>
            <h3 className="page_heading2">Forms</h3>
            <div>
                {forms.map((document, index) => (
                    <DownloadButton
                        key={index}
                        title={document.title}
                        link={document.path}
                    />
                ))}
            </div>
        </div>
    );
}
