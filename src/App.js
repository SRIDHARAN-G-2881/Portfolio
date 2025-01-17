import './App.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Project from './components/Project.js';
import Resume from './components/Resume.js'
import Contact from './components/Contact'
import Footer from './components/Footer.js';
function App() {
  return (
    <div classname="App">
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
