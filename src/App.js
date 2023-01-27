import './App.css';
import Home from './components/Home/Home';
import './assets/css/fonts.css'
import NavigationBar from './components/Navbar/Navbar';
import ProjectsSection from './components/Projects/ProjectsSection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import Delay from './Delay';


function App() {

  return (
    <div id="body-background">
      <div className="landing-screen">
        <div id="landing-screen-image">
          <img
                  src={logo}
                  width="75rem"
                  height="75rem"
                  alt="Portfolio website logo landing animation"
          />
        </div>
      </div>
      <Delay wait={2800}>
        <div className="App">
          <NavigationBar/>
          <Home/>
          <About/>
          <ProjectsSection/>
          <Footer/>
        </div>
      </Delay>
    </div>
  );
}

export default App;
