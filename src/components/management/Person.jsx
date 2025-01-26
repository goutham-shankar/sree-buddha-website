import React from "react";
import "@/styles/management/person/style.css";
const Person = ({ name, position, content, pic }) => {
  return (
    <div className="Person">
      
      <div className="container">
        <div className="person-head">
          <h2 className="name">{name}</h2>
          <h4 className="position">{position}</h4>
          <p className="captionline">Sree Buddha Group of Institution </p>
          <p className="content">{content}</p>
        </div>
        <img className="pic" src={pic} alt="Unable to load image" />
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Person;
