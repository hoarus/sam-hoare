import React from "react";
import githubIcon from '../images/github.svg';
import linkIcon from '../images/link.svg';

export default function Project(props){
  const image = props.image;
  const title = props.title;
  const techStackIcons = props.techStackIcons;
  const projectDetails = props.projectDetails;
  const notes = props.notes;
  const Links = function (){
    return(
      <div class="links">
        <a href={props.links[0]} target="_blank" rel="noreferrer">
          <img class="site-link" src={linkIcon}/>
        </a>
        <a href={props.links[1]}  target="_blank" rel="noreferrer">
          <img class="code-link" src={githubIcon}/>
        </a>
        </div>
    )
  }
  const techIcons = techStackIcons.map((icon, index) => {
    return(
      <img src={icon} key = {index}/>
    )
  })



  return(
    <div class="project">
    <img src={image} class="site-preview"/>
    <div class="projects-header">
      <h3>{title}</h3>
    </div>
    <div className="tech-stack">{techIcons}</div>
    {projectDetails}
    <Links/>
    <p class="italics">{notes}</p>
  </div>
  )
}