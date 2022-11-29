import React from "react";

// Images
import battleshipSnap from '../images/battleship snap.jpg';
import flightBookerSnap from '../images/Flight Booker Snap.PNG';
import githubIcon from '../images/github.svg';
import herokuIcon from '../images/heroku.png';
import jestIcon from '../images/jest-icon.png';
import jsIcon from '../images/js-icon.png';
import linkIcon from '../images/link.svg';
import railsIcon from '../images/rails-icon.png'
import reactIcon from '../images/React-icon.png'
import rubyIcon from '../images/ruby-icon.png'
import twilioIcon from '../images/twilio-icon.png'
import workPreparedSnap from '../images/workPreparedSnap.png'

export default function Projects(){

  return(
    <div class="projects flex-container">
          <h2>Projects</h2>

          <div class="project">
            <img src={workPreparedSnap} class="site-preview" />
            <div class="projects-header">
              <h3>Work Prepared</h3>
            </div>
            <div class="tech-stack">
              <img src={railsIcon} />
              <img src={rubyIcon} />
              <img src={jsIcon}/>
              <img src={herokuIcon}/>
            </div>
            <div class="project-details">
              <p>I developed this fullstack application as a Proof-of-Concept for a friend's business idea.
                It has the typical static pages associated with a professional website as well as an application component
                sitting behind user authentication.</p>
              <p> The intended audience are Australian small business owners who wish to
                improve workplace health and safety. They register their company as part of the sign-up process and can
                generate a sign-up link for employees to join. When employees sign up, they are prompted to complete a short
                survey to identify which training modules are applicable for them. And the owner is able to view the sign-up
                status and applicable modules for each employee.</p>
              <p>While the business idea has been put on hold, this application serves as a good representation of my
                skills. It was written in Ruby on Rails, utilises a Devise plug-in for authentication, and is deployed
                via a GitLab CI/CD pipeline that I developed. Please note that the source code is stored in a private GitLab
                repository, but access can be provided upon request.
              </p>
            </div>
            <div class="links">
              <a href="https://workpreparedtest.herokuapp.com/" target="_blank" rel="noreferrer">
                <img class="site-link" src={linkIcon}/>
              </a>
              <a href="https://gitlab.com/hoarus/work-prepared" target="_blank" rel="noreferrer">
                <img class="code-link" src={githubIcon}/>
              </a>
            </div>
            <p class="italics">Note: Due to the hosting provider (Heroku), there may be a slight delay before the
              application loads.</p>
          </div>

          <div class="project">
            <img src={flightBookerSnap} class="site-preview"/>
            <div class="projects-header">
              <h3>Free Flight Booker</h3>
            </div>
            <div class="tech-stack">
              <img src={railsIcon}/>
              <img src={rubyIcon}/>
              <img src={jsIcon}/>
              <img src={herokuIcon}/>
              <img src={twilioIcon}/>
            </div>
            <div class="project-details">
              <p>This application represents a small portion of the online flight search and booking
                process. I have stripped it back to a minimalistic design and focused on simplified user experience.</p>
              <p>Users are able to search for flights from a select list of airports. They are then asked to provide
                passenger details for each passenger before confirming the booking. Lastly, booking confirmation emails are
                sent to all passengers.</p>
              <p>This project demonstrates my skills in being able to seed databases, develop advanced forms which create
                multiple data models simultaneously (Bookings and Passengers) and integrate with third-party add-ons (Twilio
                Sendgrid).</p>
            </div>
            <div class="links">
              <a href="http://freeflightbooker.herokuapp.com/" target="_blank" rel="noreferrer">
                <img class="site-link" src={linkIcon}/>
              </a>
              <a href="https://github.com/hoarus/odin-flight-booker" target="_blank" rel="noreferrer">
                <img class="code-link" src={githubIcon}/>
              </a>
            </div>
            <p class="italics">Note: Due to the hosting provider (Heroku), there may be a slight delay before the
              application loads.</p>
          </div>

          <div class="project">
            <img src={battleshipSnap}class="site-preview"/>
            <div class="projects-header">
              <h3>Basic Battleship</h3>
            </div>
            <div class="tech-stack">
              <img src={jsIcon}/>
              <img src={jestIcon}/>
              <img src={reactIcon}/>
            </div>
            <div class="project-details">
              <p>This project is a simple pass-and-play version of the battlship board game.</p>
              <p>Users are required to input their names before playing. They are then each required to place five ships
                before the game starts. Players then take turns firing at each other's board.</p>
              <p>I wrote the underlying game logic first using Jest and practicing test driven deployment. Once all unit
                tests and the game logic were developed, I added a React UI to the app.</p>
            </div>
            <div class="links">
              <a href="https://hoarus.github.io/battleship-react/" target="_blank" rel="noreferrer">
                <img class="site-link" src={linkIcon}/>
              </a>
              <a href="https://github.com/hoarus/battleship-react" target="_blank" rel="noreferrer">
                <img class="code-link" src={githubIcon}/>
              </a>
            </div>
          </div>

        </div>
  )
}