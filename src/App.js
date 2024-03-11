
import './App.css';
import Header from './Components/Header/header';
import Skills from './Components/Skills/skills';
import Work from './Components/Work/work';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
