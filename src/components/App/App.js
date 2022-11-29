import React, {useState} from 'react';

// Stylesheets
import '../../normalize.css';
import './App.css';

// Components
import Banner from '../Banner/Banner';
import About from '../About/About'
import Projects from '../Projects/Projects';

function App() {
  const [selectedSection, selectSection] = useState("None");

  const DisplaySection = function(){
    switch(selectedSection) {
      case "About":
        return (<About/>);
      case "Projects":
        return (<Projects/>)
      default:
        return
    }
  }

  return (
    <div className="App">
      <div class="page-container">
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
