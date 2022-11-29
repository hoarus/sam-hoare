import React from "react";
import headshot from '../images/headshot.jpg';

export default function Banner() {
  return (
  <div class="banner flex-container">
    <img src= {headshot} class="headshot" alt="headshot"/>
    <h1>Sam Hoare</h1>
    <h3>Programming Enthusiast</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero consectetur ipsam qui incidunt, officiis sit
      eos autem atque illo nihil reiciendis molestiae aut eveniet doloribus, unde consequuntur velit beatae!</p>
    <div class="menu">
      <div class="tab first-tab">About Me</div>
      <div class="tab">Projects</div>
      <div class="tab">Certifications</div>
      <div class="tab">Resume</div>
    </div>
  </div>
  )
}