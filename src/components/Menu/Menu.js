import React from "react";

export default function Menu(props){
  const selectSection = props.selectSection;
  const selectedSection = props.selectedSection;


  return(
    <div className="menu">
      <div className={`tab first-tab ${selectedSection==="About" && "selected-tab"}`} onClick={() => selectSection("About")}>About Me</div>
      <div className={`tab ${selectedSection==="Projects" && "selected-tab"}`}onClick={() => selectSection("Projects")}>Projects</div>
      <div className={`tab ${selectedSection==="Certifications" && "selected-tab"}`}onClick={() => selectSection("Certifications")}>Certifications</div>
      <div className={`tab ${selectedSection==="Resume" && "selected-tab"}`}onClick={() => selectSection("Resume")}>Resume</div>
    </div>
  )
}