import React from "react";
import "@/styles/homepage/cells_chapters.css"


export default function Cells_Chapters() {
  return (
    <div className="cells_and_chapters">
      <h3>Cells & Chapters</h3>
      <ul>
        <li><img src={"/assets/images/home images/IEEE Blue variant.png"} alt="NPTEL Logo" /></li>
        <li><img src={"/assets/images/home images/nptel logo.png"} alt="Computer Society Logo" /></li>
        <li><img src={"/assets/images/home images/cs logo.png"} alt="SAE Logo" /></li>
        <li><img src={ "/assets/images/home images/sae logo.png"} alt="IEEE Logo" /></li>
      </ul>
    </div>
  );
}
