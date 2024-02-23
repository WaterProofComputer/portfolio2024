import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Skills from './Components/Skills/skills';
import Work from './Components/Work/work';
import Projects from './Components/Projects/projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Work/>
      <Projects/>
    </div>
  );
}

export default App;
