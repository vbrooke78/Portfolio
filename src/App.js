import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
