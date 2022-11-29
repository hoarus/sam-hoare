import React from "react";
import headshot from '../images/headshot.jpg';
import Menu from '../Menu/Menu'

export default function Banner(props) {
  return (
  <div class="banner flex-container">
    <h1>Sam Hoare</h1>
    <img src= {headshot} class="headshot" alt="headshot"/>
    <h3>Programming Enthusiast</h3>
    <Menu
      selectSection = {props.selectSection}
    />
  </div>
  )
}