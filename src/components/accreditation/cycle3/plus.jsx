import React from 'react'

const plus = () => {
    const handlePdfOpen = (url) => {
        window.open(url, "_blank");
      };
  return (
    <div className='topContainer'>
        <h4>IIQA</h4>
        <a >IIQA 2024</a>
        <h4>SELF STUDY REPORT 2024</h4>
        <a href="">SSR 2024</a>
        <h4>SELF DECLARATION</h4>
        <a >SELF DECLARATION BY HEAD OF INSTITUTION</a>
        <h4>STATE OF COMPLIANCE</h4>
        <a href="">STATE OF COMPLIANCE</a>

    </div>
  )
}

export default plus