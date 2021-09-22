import './App.css';
import React, { useEffect } from 'react';
import { initialize } from './scripts/datastore';
import { initializeTruck } from './scripts/truck';
import { initializeMain } from './scripts/main';
import { initializeFormHandler } from './scripts/formhandler';

const App = (): JSX.Element => {
  useEffect(() => {
    initialize();
    initializeTruck();
    initializeMain();
    // wait for initialization of JQuery
    setTimeout(() => {
      initializeFormHandler();
    }, 200);
  }, []);

  return (
    <React.Fragment>
      <header>
        <h1>CoffeeRun</h1>
      </header>
      <section>
        <div className="panel panel-default">
          <div className="panel-body">
            <form data-coffee-order="form">
              <div className="form-group">
                <label htmlFor="coffeeOrder">Coffee Order</label>
                <input className="form-control" name="coffee" id="coffeeOrder" autoFocus />{' '}
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="emailAddress"
                  id="emailInput"
                  value=""
                  placeholder="dr@who.com"
                />{' '}
              </div>
              <div className="radio">
                {' '}
                <label>
                  <input type="radio" name="size" value="short" />
                  Short
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="size" value="tall" checked /> Tall
                </label>
              </div>
              <div className="radio">
                {' '}
                <label>
                  <input type="radio" name="size" value="grande" />
                  Grande
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="flavorShot">Flavor Shot</label>
                <select id="flavorShot" className="form-control" name="flavor">
                  <option value="">None</option>
                  <option value="caramel">Caramel</option> <option value="almond">Almond</option>{' '}
                  <option value="mocha">Mocha</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="strengthLevel">Caffeine Rating</label>
                <input name="strength" id="strengthLevel" type="range" value="30" />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
              <button type="reset" className="btn btn-default">
                Reset
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
