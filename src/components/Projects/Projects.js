import React, {useState} from "react";
import Project from "../Project/Project";
import ProjectSelector from "../ProjectSelector/ProjectSelector";

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

  const [selectedProject, selectProject] = useState(1);
  const DisplaySelectedProject = function() {
    console.log(selectedProject);
    switch(selectedProject) {
      case 1:
        return(
          <Project
        image = {workPreparedSnap}
        title = "Work Prepared"
        techStackIcons = {[railsIcon, rubyIcon, jsIcon, herokuIcon]}
        links = {["https://workpreparedtest.herokuapp.com/","https://gitlab.com/hoarus/work-prepared"]}
        projectDetails = {          
          <div className="project-details">
          <p>I developed this full stack application as a Proof-of-Concept for a business idea I had with a friend.
            This project was a great exercise in both creativity and technical ability - I generated all the requirements 
            through facilitation of design thinking exercises, developed multiple wireframes to gather feedback,
            and developed the PoC iteratively.</p>
          <p>This application dynamically renders content based upon the user's sign-in status and role. Unauthenticated users are presented
            with a professional website consisting of static pages and sign-up/sign-in forms. Once authenticated, users are presented with different 
            views depending on their role - user, business owner, and site admin.</p>
          <p> The intended audience are Australian small business owners who wish to
            improve workplace health and safety. They register their company as part of the sign-up process and can
            generate a sign-up link for employees to join. When employees sign up, they are prompted to complete a short
            survey to identify which training modules are applicable for them. The owner is then able to view the sign-up
            status and applicable modules for each employee. Lastly, as a Site Admin, I'm able to view and delete business and users, and view, edit and delete
            the videos associated with training modules.</p>
          <p>While the business idea has been put on hold, this application serves as a good representation of my
            skills. It's written in Ruby on Rails, utilizes a Devise plug-in for authentication and a PostgreSQL database for storage, and is deployed
            via a GitLab CI/CD pipeline that I developed. Please note that the source code is stored in a private GitLab
            repository, but access can be provided upon request.
          </p>
        </div>
        }
        notes = "Note: Due to the hosting provider I'm using (Heroku), there may be a slight delay before the application loads."
      />
        )
      case 2:
        return(
          <Project
          image = {flightBookerSnap}
          title = "Free Flight Booker"
          techStackIcons = {[railsIcon, rubyIcon, jsIcon, herokuIcon, twilioIcon]}
          links = {["http://freeflightbooker.herokuapp.com/","https://github.com/hoarus/odin-flight-booker"]}
          projectDetails = {          
            <div className="project-details">
            <p>This application represents a small portion of the online flight search and booking
              process. I have stripped it back to a minimalist design and focused on simplified user experience.</p>
            <p>Users are able to search for flights from a select list of airports. They are then asked to provide
              passenger details for each passenger before confirming the booking. Lastly, booking confirmation emails are
              sent to all passengers.</p>
            <p>This project demonstrates my skills in being able to seed databases, develop advanced forms which create
              multiple data models simultaneously (Bookings and Passengers) and integrate with third-party add-ons (Twilio
              Sendgrid).</p>
          </div>
          }
          notes = "Note: Due to the hosting provider (Heroku), there may be a slight delay before the application loads."
        />
        )
      case 3:
        return(
          <Project
          image = {battleshipSnap}
          title = "Basic Battleship"
          techStackIcons = {[jsIcon, jestIcon, reactIcon]}
          links = {["https://hoarus.github.io/battleship-react/", "https://github.com/hoarus/battleship-react"]}
          projectDetails = {          
            <div className="project-details">
            <p>This project is a rendition of the battlship board game. It can either be played one-player (against an AI) or 
              two-player in a pass-and-play fashion.</p>
            <p>Users are required to input their names before playing. They are then each required to place five ships
              before the game starts. Players then take turns firing at each other's board.</p>
            <p>I wrote the underlying game logic first using Jest and practicing test driven development. Once I developed all
              unit tests and game logic, I added a user interface using React.</p>
          </div>
          }
        />
        )
      default:
        return(<div>Error</div>)
    }
  }

  return(
    <div className="projects flex-container">
      <h2>Projects</h2>
      <ProjectSelector
        selectedProject = {selectedProject}
        selectProject = {selectProject}
      />
       <DisplaySelectedProject/>
    </div>
  )
}