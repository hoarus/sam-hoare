import React from "react";

export default function Menu(props){
  const selectSection = props.selectSection;


  return(
    <div class="menu">
      <div class="tab first-tab" onClick={() => selectSection("About")}>About Me</div>
      <div class="tab" onClick={() => selectSection("Projects")}>Projects</div>
      <div class="tab" onClick={() => selectSection("About")}>Certifications</div>
      <div class="tab" onClick={() => selectSection("About")}>Resume</div>
    </div>
  )
}