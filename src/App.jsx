import './App.css';
import { AboutMe } from './Components/About Me/AboutMe';
import Contact from './Components/Contact Me/ContactMe';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
