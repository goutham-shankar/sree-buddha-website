import React from "react";
import DownloadButton from "@/components/common/DownloadButton";

const meetings = [
  { id: 1, title: "Minutes-of-7-th-IQAC-meeting-held-on-13-03-2017" },
  { id: 2, title: "Minutes-of-8-th-IQAC-meeting-held-on-21-06-2017" },
  // Add more meeting objects as needed
];

export default function Page() {
  return (
    <div className="iqac_content">
      <p>
        In pursuance of action plan for performance evaluation, assessment,
        accreditation, and quality up-gradation of institutions of higher
        education, NAAC proposes that every accredited institution should
        establish an Internal Quality Assurance Cell (IQAC) as a
        post-accreditation quality sustenance measure. Since quality
        enhancement is a continuous process, the IQAC will become a part of the
        institution’s system & work towards realization of the goals of quality
        enhancement & sustenance. The prime task of the IQAC is to develop a
        system for conscious, consistent & catalytic improvement in the overall
        performance of institutions. For this, during the post-accreditation
        period, it will channelize all efforts & measures of the institution
        towards promoting its holistic academic excellence.
      </p>

      <h3 className="page_heading2">
        IQAC shall evolve mechanisms and procedures for:
      </h3>

      <ul className="list">
        <li>
          Ensuring timely, efficient, and progressive performance of academic,
          administrative, and financial tasks
        </li>
        <li>The relevance and quality of academic and research programs</li>
        <li>
          Equitable access to and affordability of academic programs for
          various sections of society
        </li>
        <li>
          Optimization and integration of modern methods of teaching and
          learning
        </li>
        <li>
          Ensuring the adequacy, maintenance, and functioning of the support
          structure and services
        </li>
        <li>
          Research sharing and networking with other institutions in India and
          abroad
        </li>
      </ul>

      <div className="meeting_minutes">
        <h3>Meeting Minutes</h3>
        <div className="all_minutes">
          {meetings && meetings.length > 0 ? (
            meetings.map((meeting, index) => (
              <DownloadButton key={index} title={meeting.title} />
            ))
          ) : (
            <p>No meeting minutes available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
