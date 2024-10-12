import React from "react";
import "@/styles/management/person/style.css";
const Person = ({ name, position, content, pic }) => {
  return (
    <div className="Person">
      <h2 className="name">{name}</h2>
      <h4 className="position">{position}</h4>
      <p className="captionline">Sree Buddha Group of Institution </p>
      <div className="container">
        <p className="content">{content}</p>
        <img className="pic" src={pic} alt="Unable to load image" />
      </div>
    </div>
  );
};

export default Person;
