import React from "react";

export default function ProjectSelector(props){
  const selectedProject = props.selectedProject;
  console.log(selectedProject);
  const selectProject = props.selectProject;
  return(
    <div className="project-selector">
      <div className={`select-number ${selectedProject===1 && "selected-project"}`} onClick={() => selectProject(1)}>1</div>
      <div className={`select-number ${selectedProject===2 && "selected-project"}`} onClick={() => selectProject(2)}>2</div>
      <div className={`select-number ${selectedProject===3 && "selected-project"}`} onClick={() => selectProject(3)}>3</div>
    </div>
  )
}