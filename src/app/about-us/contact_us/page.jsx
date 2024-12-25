import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className='page'>

            <h3 className="page_heading">Contact Us</h3>
            <div className="line"></div>

            <h3 className='page_heading2'>Sree Buddha College of Engineering</h3>
            Pattoor P.O., Nooranad <br />
            Alappuzha District <br />
            Kerala <br />
            India <br />
            Pin:690529 <br />

            College: +91479 2375440,42; <br />
            e-mail: principal@sbce.ac.in <br />

            <h3 className='page_heading2'>FeedBack</h3>
            <p>Please use the contact form incase you need to contact the personel directly,
            </p>
            <div className="form">

                <div className="form_item">
                    <label htmlFor="">Your Name <span>*</span></label>
                    <input type="text" />
                </div>

                <div className="form_item">
                    <label htmlFor="">Your Email <span>*</span></label>
                    <input type="text" />
                </div>

                <div className="form_item">
                    <label htmlFor="">Subject <span>*</span></label>
                    <input type="text" />
                </div>

                <div className="form_item">
                    <label htmlFor="">Your Message <span>*</span></label>
                    <textarea type="text" />
                </div>




            </div>

            <button className="send">SEND</button>

        </div>
    )
}
