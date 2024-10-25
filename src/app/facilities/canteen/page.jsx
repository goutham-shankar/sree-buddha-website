import React from 'react'
import './style.css'
import photo from '@/assets/images/facilities/canteen.jpg'


export default function page() {
  return (
    <div className='container'>
            <div className="title">CANTEEN</div>
            <hr /><br />
            <br />
            <div className="photo">
              <img src={photo.src} alt="" /><br />
            </div>
            <br/>
            <div className="paragraph">CANTEEN
            College has spacious canteen facility in the college premises and is run by college management. 
            A variety of food and snack items are provided to the students and staff of the college at highly 
            reasonable rates with highest quality. Our college canteen is blessed with family atmosphere, with 
            a variety of delicacies, touched by a homemade flavor, cooked to perfection and served with a great courtesy.
             Refreshments are available at the college canteen at affordable rates. Adequate seating facilities are 
             provided to accommodate students and staff even during peak time.
             <br /><br />
             Canteen has a neat and clean kitchen with cooking facility and kitchen staff take extra care to provide our students with a modern & good hygiene .  <br />
             </div><br />
            
            
    </div>
  )
}
