import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>pCloud Pass</h1>
      <div className="Hello">
        <a href="https://www.pcloud.com" target="_blank" rel="noreferrer">
          <button type="button">
            <span role="img" aria-label="books">
              🍺
            </span>
            Learn more
          </button>
        </a>
        <a href="https://www.pcloud.com" target="_blank" rel="noreferrer">
          <button type="button">
            <span role="img" aria-label="books">
              🍺
            </span>
            Open Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
