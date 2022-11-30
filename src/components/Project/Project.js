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
      <div className="links">
        <a href={props.links[0]} target="_blank" rel="noreferrer">
          <img className="site-link" src={linkIcon}/>
        </a>
        <a href={props.links[1]}  target="_blank" rel="noreferrer">
          <img className="code-link" src={githubIcon}/>
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
    <div className="project">
    <img src={image} className="site-preview"/>
    <div className="projects-header">
      <h3>{title}</h3>
    </div>
    <div className="tech-stack">{techIcons}</div>
    {projectDetails}
    <Links/>
    <p className="italics">{notes}</p>
  </div>
  )
}