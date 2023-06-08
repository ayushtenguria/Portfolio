import './App.css';
import { AboutMe } from './Components/About Me/AboutMe';
import { CardSection } from './Components/Card/CardSection';
import { Contact } from './Components/Contact Me/ContactMe';
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Header/Navbar/Navbar';
import { WorkExperience } from './Components/Work/Work';
import Flashlight from './Components/testCode';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <AboutMe/>
      <WorkExperience/>
      <Contact/>
      <CardSection/> 
      <Footer/>
    </div>
  );
}

export default App;
