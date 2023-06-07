import './App.css';
import { AboutMe } from './Components/About Me/AboutMe';
import { CardSection } from './Components/Card/CardSection';
import { Contact } from './Components/Contact Me/ContactMe';
import { Header } from './Components/Header/Header';
import { WorkExperience } from './Components/Work/Work';
import Flashlight from './Components/testCode';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <WorkExperience/>
      <Contact/>
      <CardSection/> 
    </div>
  );
}

export default App;
