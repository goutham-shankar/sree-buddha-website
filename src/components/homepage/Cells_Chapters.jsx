import React from "react";
import "@/styles/homepage/cells_chapters.css"
import ieee_logo from "@/assets/images/home images/IEEE Blue variant.png";
import nptel_logo from "@/assets/images/home images/nptel logo.png";
import cs_logo from "@/assets/images/home images/cs logo.png";
import sae_logo from "@/assets/images/home images/sae logo.png";


export default function Cells_Chapters() {
  return (
    <div className="cells_and_chapters">
      <h3>Cells & Chapters</h3>
      <ul>
        <li><img src={nptel_logo.src} alt="NPTEL Logo" /></li>
        <li><img src={cs_logo.src} alt="Computer Society Logo" /></li>
        <li><img src={sae_logo.src} alt="SAE Logo" /></li>
        <li><img src={ieee_logo.src} alt="IEEE Logo" /></li>
      </ul>
    </div>
  );
}
