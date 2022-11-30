import React from "react";

export default function Menu(props){
  const selectSection = props.selectSection;
  const selectedSection = props.selectedSection;


  return(
    <div class="menu">
      <div class={`tab first-tab ${selectedSection==="About" && "selected-tab"}`} onClick={() => selectSection("About")}>About Me</div>
      <div class={`tab ${selectedSection==="Projects" && "selected-tab"}`}onClick={() => selectSection("Projects")}>Projects</div>
      <div class={`tab ${selectedSection==="Certifications" && "selected-tab"}`}onClick={() => selectSection("Certifications")}>Certifications</div>
      <div class={`tab ${selectedSection==="Resume" && "selected-tab"}`}onClick={() => selectSection("Resume")}>Resume</div>
    </div>
  )
}