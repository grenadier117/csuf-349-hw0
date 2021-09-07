import './App.css';
import otter1 from '../img/otter1.jpg';
import otter2 from '../img/otter2.jpg';
import otter3 from '../img/otter3.jpg';
import otter4 from '../img/otter4.jpg';
import otter5 from '../img/otter5.jpg';
import flexboxFroggy from '../img/Screen Shot 2021-09-06 at 5.50.39 PM.png';
import gridGarden from '../img/Screen Shot 2021-09-06 at 6.12.10 PM.png';
import React from 'react';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <header className="main-header">
        <h1 className="logo-text">Ottergram</h1>
      </header>
      <main className="main-content">
        <ul className="thumbnail-list">
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter1} alt="Barry the Otter"></img>{' '}
              <span className="thumbnail-title">Barry</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter2} alt="Robin the Otter"></img>{' '}
              <span className="thumbnail-title">Robin</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter3} alt="Maurice the Otter"></img>{' '}
              <span className="thumbnail-title">Maurice</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter4} alt="Lesley the Otter"></img>{' '}
              <span className="thumbnail-title">Lesley</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter5} alt="Barbara the Otter"></img>{' '}
              <span className="thumbnail-title">Barbara</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter1} alt="Barry the Otter"></img>{' '}
              <span className="thumbnail-title">Barry</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter2} alt="Robin the Otter"></img>{' '}
              <span className="thumbnail-title">Robin</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter3} alt="Maurice the Otter"></img>{' '}
              <span className="thumbnail-title">Maurice</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter4} alt="Lesley the Otter"></img>{' '}
              <span className="thumbnail-title">Lesley</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image" src={otter5} alt="Barbara the Otter"></img>{' '}
              <span className="thumbnail-title">Barbara</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image screenshot" src={flexboxFroggy} alt="Flexbox Froggy"></img>{' '}
              <span className="thumbnail-title">Barry</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href="#">
              <img className="thumbnail-image screenshot" src={gridGarden} alt="Grid Garden"></img>{' '}
              <span className="thumbnail-title">Robin</span>
            </a>
          </li>
        </ul>
        <div className="detail-image-container">
          <div className="detail-image-frame">
            <img className="detail-image" src={otter1} alt="" />{' '}
            <span className="detail-image-title">Stayin&apos; Alive</span>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
