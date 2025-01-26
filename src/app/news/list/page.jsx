import React from 'react'
import './style.css'

// import udbhavana from '../../../../public/assets/images/news/udbhavana.jpeg'
// import threed from'../../../../public/assets/images/news/threed.jpeg'
const threed = '/assets/images/news/threed.jpg';
const udbhavana = '/assets/images/news/udbhavana.jpeg';
const ai = '/assets/images/news/ai1.jpg';


export default function page() {
  return (
    <div className='container'>
        <div className="title">NEWS</div>
       <div className="news1">
        <div className="news1pic">
          <img src={udbhavana} alt="" />
        </div>
        <div className="content1">
             <div className="txtcontent">
              <a href="#">IMPORTANT Udbhavana 2024.</a>
              <br /><br />
               Acknowledging the special requests from a significant number of Institutions, we are glad to announce that the students of… <br /><br />
               
             </div>
             <div className="btn">
                <a href="#"> Read more</a>
             </div>
            
        </div>
       </div>

{/* second div */}
       <div className="news1">
        <div className="news2pic">
          <img src={threed} alt="" />
        </div>
        <div className="content2">
             <div className="txtcontent">
              <a href="#">Three day Hands-on Training cum workshop on Design and Fabrication of Microbial Fuel Cell 
                (Hybrid mode) September 25-27, 2024*</a>
              <br /><br />
              Brochure HANDS-ON TRANING 13.08.pdf *Three day Hands-on Training cum workshop on Design and Fabrication of Microbial Fuel Cell (Hybrid mode)… <br /><br />
             </div>

             <div className="btn">
                <a href="#"> Read more</a>
             </div>
           
        </div>

      
       </div>
      
    </div>
  )
}
