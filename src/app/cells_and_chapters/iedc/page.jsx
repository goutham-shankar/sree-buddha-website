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
                        <a href="./iedc/about"><button>IEDC</button></a>
                        <a href="./iedc/niisp"><button>NIISP</button></a>
                        <a href="./iedc/ariia"><button>ARIIA</button></a>
                        <a href="./iedc/iic"><button>IIC</button></a>
                        <button>IEDC CORPORATE</button>
                    </div>
                </div>                
                
            </div>
        </div>
      </div>
    );
  }