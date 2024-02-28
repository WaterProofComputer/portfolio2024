
import './App.css';
import Header from './Components/Header/header';
import Skills from './Components/Skills/skills';
import Work from './Components/Work/work';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
