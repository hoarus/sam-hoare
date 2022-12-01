import React, {useState} from 'react';

// Stylesheets
import '../../normalize.css';
import './App.css';

// Components
import Banner from '../Banner/Banner';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Certifications from '../Certifications/Certifications';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact'

function App() {
  const [selectedSection, selectSection] = useState("None");

  const DisplaySection = function(){
    switch(selectedSection) {
      case "About":
        return (<About/>);
      case "Projects":
        return (<Projects/>)
      case "Certifications":
        return (<Certifications/>)
      case "Resume":
        return (<Resume/>)
      case "Contact":
        return (<Contact/>)
      default:
        return
    }
  }

  return (
    <div className="App">
      <div className="page-container">
        <Banner
          selectSection = {selectSection}
          selectedSection = {selectedSection}
        />
        <DisplaySection/>        
      </div>
    </div>
  );
}

export default App;
