import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './componets/Navigation';
// import Header from './componets/Header';
import About from './componets/About';
import Skills from './componets/Skills';
import Resume from './componets/Resume';
import Sample from './componets/Sample';
import Service from './componets/Service.js';
import Contact from './componets/Contact';
import Control from './controls/Control';
import './index.css';






function App() {
  return (
    <div className="App">
     <Navigation />
     {/* <Header /> */}
     <About />
     <Skills />
     <Resume />
     <Sample />
     <Service />
     <Contact />
     <Control />
    </div>
  );
}

export default App;
