import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
