import React from 'react'
import "./remote.css"
import { RemoteTable } from '@/components/cells-chapters/remote-center/RemoteTable';

export default function Remote() {
  
    return (
      <div className='remote'>
        <div className="remo-intro">
            <h2>IIT Remote Center</h2>
            <div className="remote-pics">
              <div className="logo">
                <img src="/assets/images/cells-chapters/mhrd logo.png" alt="mhrd logo" />
              </div>
              <div className="logo">
                <img src="/assets/images/cells-chapters/nmeict-logo.png" alt="nmeict logo" />
              </div>
            </div>
            <p>IIT Kharagpur and IIT Bombay collaborates with Engineering colleges in the country to enhance the teaching skills of our faculty colleagues in core Engineering and Science subjects.  The lecture transmisson and live interaction take place in distant mode using the AVIEW technology through internet, at selected remote centres across the country. This initiative is a part of the &apos;National Mission on Education through ICT, which is supported by MHRD, Govt of India.</p>
            <p>Sree Buddha College of Engineering, Pattoor (Remote Center ID 1302) is also dedicated to this project. Many Workshops and Faculty Development Programmes have been conducted based on this scheme in collaboration with IIT&apos;s. The List of Programme&apos;s conducted  is attached herewith</p>
        </div>
        <RemoteTable/>
      </div>

    );
  }