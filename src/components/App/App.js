// Stylesheets
import '../../normalize.css';
import './App.css';

// Components
import Banner from '../Banner/Banner';
import About from '../About/About'
import Projects from '../Projects/Projects';

function App() {
  return (
  <div className="App">
    <div class="page-container">
      <Banner/>
      <About/>
      <Projects/>
        
      </div>
    </div>
  );
}

export default App;
