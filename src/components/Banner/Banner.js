import React from "react";
import headshot from '../images/headshot.jpg';
import Menu from '../Menu/Menu'

export default function Banner(props) {

  const displayHeadshot = props.selectedSection === "None";

  return (
  <div className= {`banner flex-container ${displayHeadshot && 'max-banner'}`}>
    <h1>Sam Hoare</h1>
    { displayHeadshot && 
      <img src= {headshot} className="headshot" alt="headshot"/>
    }
    <h3>Web Developer</h3>
    <Menu
      selectSection = {props.selectSection}
      selectedSection = {props.selectedSection}
    />
  </div>
  )
}