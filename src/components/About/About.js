import React from "react";

// images
import programmingIcon from '../images/about-icons/programming_icon.svg'
import lightbulbIcon from '../images/about-icons/lightbulb_2.svg'
import travellingIcon from '../images/about-icons/travelling_icon.svg'
import techIcon from '../images/about-icons/tech_icon.svg'
import headshot from '../images/headshot.jpg';


export default function About(){

  return(
    <div className="about flex-container">
      <h2>About Me</h2>
      <img src= {headshot} className="headshot mini-headshot" alt="headshot"/>
      <p>I am a passionate, self-taught, full stack web developer, with experience in Ruby on Rails, JavaScript, React, Azure and AWS.</p>
      <h3>My Programming Journey</h3>
      <img src={travellingIcon}className="icon"/>
      <p>
        My software engineering journey began in early 2021, when I wanted to create a simple website for a business idea. 
        The requirements for my simple website grew and I stumbled into web develoment. I fell in love with creating something that 
        users could interact with and committed to learning as much as I could.
      </p>
      <img src={programmingIcon}className="icon"/>
      <p>The Odin Project, an open source coding curriculum, added structure to my journey and  served as a pathway to 
        code documentation, learning resources, and recommended projects to practice my craft.
        I began with the fundamentals of HTML and CSS, then the basics of JavaScript and responsive design.
        I then taught myself Ruby and object-oriented programming, before learning Ruby on Rails and developing a series of 
        full stack applications. Finally, I revisited JavaScript to master the fundamentals, practice Test Driven Development 
        and learn React.
      </p>
      <img src={techIcon}className="icon"/>
      <p>In addition to programming, I've gained valuable skills in my career as a Technology Consultant,
        which I can leverage to be a productive and valuable Software Engineer.
        I have a solid understanding of application architecture, cloud services, and networking infrastructure from
        leading cloud migrations. I understand the importance of embedding security in application design from 
        my experience with security assessments and cloud control design. 
        I understand the importance of DevOps, from my work in developing 
        configuration management and platform engineering PoCs. And I understand how development teams prioritize and manage
        workload based on my experience with Scrum, rapid prototyping, and end-user testing.
      </p>
      <img src={lightbulbIcon}className="icon"/>
      <p>I'm a creative person at heart and I love solving problems. And while I've learned a lot in my current role, it doesn't 
        give me the same sense of satisfaction that pushing code and seeing something that I've created come to life does. 
        Web development is my passion. And I'm ready to turn my passion into a career.</p>
      
      </div>
  )
}