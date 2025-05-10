"use client";

import React, { useState, useEffect } from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "./page.css";

// Add styles for the expanded functionality
const styles = {
  fileHeadingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: '6px',
    padding: '10px 15px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    borderLeft: '4px solidrgb(179, 101, 0)',
    transition: 'all 0.2s ease'
  },
  fileHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: '#333',
    fontSize: '1rem'
  },
  headingText: {
    flex: '1'
  },
  expandIcon: {
    fontSize: '1.2rem',
    marginLeft: '10px',
    color: '#0056b3',
    fontWeight: 'bold'
  },
  shareButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0 0 0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filesContainer: {
    marginLeft: '20px',
    paddingLeft: '10px',
    borderLeft: '2px solid #e0e0e0',
    marginTop: '5px',
    marginBottom: '15px'
  }
};

const Page = () => {
  const [nbaData, setNbaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedDept, setExpandedDept] = useState(null);
  const [expandedHeadings, setExpandedHeadings] = useState({});

  useEffect(() => {
    const fetchNbaData = async () => {
      try {
        const response = await fetch(
          "https://sbce.ac.in/api/api/nba?populate=NBA.file.FILES&pagination[limit]=500"
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data?.data?.NBA) {
          setNbaData(data.data.NBA);
        } else {
          setNbaData([]);
        }
      } catch (err) {
        console.error("Error fetching NBA data:", err);
        setError("Failed to load NBA data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNbaData();
  }, []);

  const processedDepartments = nbaData
    .filter((dept) => dept.VISIBILITY === 1)
    .map((dept) => {
      // Group files by heading
      const groupedFiles = {};
      const sortedFiles = [...(dept.file || [])].sort(
        (a, b) => (a.priority || 999) - (b.priority || 999)
      );

      sortedFiles.forEach((file) => {
        if (!groupedFiles[file.Heading]) {
          groupedFiles[file.Heading] = {
            heading: file.Heading,
            files: [],
            priority: file.priority || 999, // Use the first file's priority for the group
          };
        }
        groupedFiles[file.Heading].files.push(file);
      });

      // Convert back to array and sort by priority
      const groupedFilesArray = Object.values(groupedFiles).sort(
        (a, b) => a.priority - b.priority
      );

      return {
        ...dept,
        groupedFiles: groupedFilesArray,
      };
    });

  const toggleDepartment = (id) => {
    setExpandedDept((prev) => (prev === id ? null : id));
  };

  const toggleHeading = (deptId, headingId) => {
    setExpandedHeadings((prev) => ({
      ...prev,
      [`${deptId}-${headingId}`]: !prev[`${deptId}-${headingId}`]
    }));
  };

  // Check for hash in URL to auto-expand specific section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const [deptId, headingId] = hash.substring(1).split('-heading-');
        if (deptId && headingId) {
          setExpandedDept(parseInt(deptId));
          setExpandedHeadings(prev => ({
            ...prev,
            [`${deptId}-${headingId}`]: true
          }));
          
          // Scroll to the heading after a small delay to ensure rendering
          setTimeout(() => {
            const element = document.getElementById(`heading-${deptId}-${headingId}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
  }, [nbaData]);

  return (
    <div className="containers">
      <title>NBA Accreditation SBCE</title>
      <h1 className="page_heading">NBA</h1>

      <div className="img-tag">
        <img
          className="img1"
          src="/assets/images/accreditation/NBA_RITS_2.png"
          alt="NBA Accreditation Logo"
        />
      </div>

      <div className>
      <div className="para-style">
  {`"The National Board of Accreditation (NBA), India was initially established by AICTE (All India Council of Technical Education) under section 10(u) of AICTE act, in the year 1994, for periodic evaluations of technical institutions & programs basis according to specified norms and standards as recommended by AICTE council. NBA in its present form came into existence as an autonomous body with effect from 7th January 2010, with the objective of Assurance of Quality and Relevance of Education, especially of the programs in professional disciplines". The purpose of the accreditation by NBA is to promote and recognize excellence in technical education in colleges and universities—at both the undergraduate and post graduate levels. Institutions, students, employers, and the public at large all benefit from the external verification of quality provided through the NBA accreditation process. They also benefit from the process of continuous quality improvement that is encouraged by the NBA's developmental approach to promote excellence in technical education.`}
</div>

      </div>

      <div className="sub-heading">NBA Accredited Departments</div>

      {loading ? (
        <p>Loading NBA accreditation data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : processedDepartments.length === 0 ? (
        <p>No NBA accreditation information available at the moment.</p>
      ) : (
        <div className="nba-departments">
          {processedDepartments.map((dept) => (
            <div
              key={dept.id}
              className={`nba-department ${
                expandedDept === dept.id ? "expanded" : ""
              }`}
            >
              <h3
                className="dept-heading"
                onClick={() => toggleDepartment(dept.id)}
                style={{ cursor: "pointer" }}
              >
                {dept.DEPT_NAME}
              </h3>

              {expandedDept === dept.id && (
                <div className="nba-files">
                  {dept.groupedFiles.length > 0 ? (
                    dept.groupedFiles.map((group, groupIndex) => {
                      const headingId = `${dept.id}-${groupIndex}`;
                      const isHeadingExpanded = expandedHeadings[headingId];
                      const shareUrl = `${typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''}#${dept.id}-heading-${groupIndex}`;
                      
                      return (
                        <div key={groupIndex} className="nba-file-group">
                          <div 
                            id={`heading-${dept.id}-${groupIndex}`}
                            style={styles.fileHeadingContainer}
                          >
                            <div 
                              style={styles.fileHeading}
                              onClick={() => toggleHeading(dept.id, groupIndex)}
                            >
                              <span style={styles.headingText}>{group.heading}</span>
                              <span style={styles.expandIcon}>{isHeadingExpanded ? '−' : '+'}</span>
                            </div>
                            <button 
                              style={styles.shareButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(shareUrl);
                                alert('Link copied to clipboard!');
                              }}
                              title="Copy link to this section"
                            >
                              🔗
                            </button>
                          </div>
                          
                          {isHeadingExpanded && (
                            <div style={styles.filesContainer}>
                              {group.files.map((file) => (
                                <div key={file.id} className="nba-file-item">
                                  {file.FILES?.length > 0 ? (
                                    <ul className="file-links">
                                      {file.FILES.map((doc) => (
                                        <li key={doc.id}>
                                          <a
                                            href={`https://sbce.ac.in/api${doc.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {doc.name || "Download File"}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="nba-file-item">
                      No documents available for this department.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <NAAC
        name="POAP USER MANUAL"
        link="/assets/documents/accreditation/NBA/SBCE-POAP-User-Manual-Version-2.1.pdf"
      />
    </div>
  );
};

export default Page;