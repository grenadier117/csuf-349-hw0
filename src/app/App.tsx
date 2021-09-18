import './App.css';
import otter1 from '../img/otter1.jpg';
import otter2 from '../img/otter2.jpg';
import otter3 from '../img/otter3.jpg';
import otter4 from '../img/otter4.jpg';
import otter5 from '../img/otter5.jpg';
import flexboxFroggy from '../img/Screen Shot 2021-09-06 at 5.50.39 PM.png';
import gridGarden from '../img/Screen Shot 2021-09-06 at 6.12.10 PM.png';
import React, { useEffect } from 'react';
import { initializeEvents } from './scripts/main';

const App = (): JSX.Element => {
  useEffect(() => {
    initializeEvents();
  }, []);

  return (
    <React.Fragment>
      <header className="main-header">
        <h1 className="logo-text">Ottergram</h1>
      </header>
      <main className="main-content">
        <ul className="thumbnail-list">
          <li className="thumbnail-item">
            <a href={otter1} data-image-role="trigger" data-image-title="Barry the Otter" data-image-url={otter1}>
              <img className="thumbnail-image" src={otter1} alt="Barry the Otter"></img>{' '}
              <span className="thumbnail-title">Barry</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href={otter2} data-image-role="trigger" data-image-title="Robin the Otter" data-image-url={otter2}>
              <img className="thumbnail-image" src={otter2} alt="Robin the Otter"></img>{' '}
              <span className="thumbnail-title">Robin</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href={otter3} data-image-role="trigger" data-image-title="Maurice the Otter" data-image-url={otter3}>
              <img className="thumbnail-image" src={otter3} alt="Maurice the Otter"></img>{' '}
              <span className="thumbnail-title">Maurice</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href={otter4} data-image-role="trigger" data-image-title="Lesley the Otter" data-image-url={otter4}>
              <img className="thumbnail-image" src={otter4} alt="Lesley the Otter"></img>{' '}
              <span className="thumbnail-title">Lesley</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href={otter5} data-image-role="trigger" data-image-title="Barbara the Otter" data-image-url={otter5}>
              <img className="thumbnail-image" src={otter5} alt="Barbara the Otter"></img>{' '}
              <span className="thumbnail-title">Barbara</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a
              href={flexboxFroggy}
              data-image-role="trigger"
              data-image-title="Flexbox Froggy"
              data-image-url={flexboxFroggy}
            >
              <img className="thumbnail-image screenshot" src={flexboxFroggy} alt="Flexbox Froggy"></img>{' '}
              <span className="thumbnail-title">Flexbox Froggy</span>
            </a>
          </li>
          <li className="thumbnail-item">
            <a href={gridGarden} data-image-role="trigger" data-image-title="Grid Garden" data-image-url={gridGarden}>
              <img className="thumbnail-image screenshot" src={gridGarden} alt="Grid Garden"></img>{' '}
              <span className="thumbnail-title">Grid Garden</span>
            </a>
          </li>
        </ul>
        <div className="detail-image-container">
          <button data-button-role="previous">Previous (&lt;)</button>
          <div className="detail-image-frame" data-image-role="frame">
            <img className="detail-image" src={otter1} alt="" data-image-role="target" />{' '}
            <span className="detail-image-title" data-image-role="title">
              Stayin&apos; Alive
            </span>
          </div>
          <button data-button-role="next">Next (&gt;)</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
