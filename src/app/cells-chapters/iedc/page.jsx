import React from 'react'
import "./iedc.css"

export default function Iedc() {
  
    return (
      <div className='iedc-page'>
        <div className="iedc-intro">
            <h2>Innovation and Entrepreunership (IEDC)</h2>
            <div className="iedc-nav">
                <div className="iedc-logo">
                    <img src="/assets/images/cells-chapters/iedc.png" alt="iedc logo" />
                </div>
                <div className="iedc-link">
                    <div className='iedc-list'>
                        <button>IEDC</button>
                        <button>NIISP</button>
                        <button>ARIIA</button>
                        <button>IIC</button>
                        <button>IEDC CORPORATE</button>
                    </div>
                </div>                
                
            </div>
        </div>
      </div>
    );
  }