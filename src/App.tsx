import './App.css';
import otter1 from './assets/otter1.jpg';
import otter2 from './assets/otter2.jpg';
import otter3 from './assets/otter3.jpg';
import otter4 from './assets/otter4.jpg';
import otter5 from './assets/otter5.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Ottergram</h1>
      </header>
      <ul>
        <li>
          <a href="#">
            <img src={otter1} alt="Barry the Otter"></img> <span>Barry</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={otter2} alt="Robin the Otter"></img> <span>Robin</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={otter3} alt="Maurice the Otter"></img> <span>Maurice</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={otter4} alt="Lesley the Otter"></img> <span>Lesley</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={otter5} alt="Barbara the Otter"></img> <span>Barbara</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
