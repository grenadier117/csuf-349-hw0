import './App.css';
import React, { useEffect } from 'react';
import { initialize } from './scripts/datastore';
import { initializeTruck } from './scripts/truck';
import { initializeMain } from './scripts/main';
import { initializeFormHandler } from './scripts/formhandler';
import { initializeChecklist } from './scripts/checklist';
import { initializeValidation } from './scripts/validation';
import { initializeRemoteDataStore } from './scripts/remotedatastore';
import { initializeFirestore } from '@firebase/firestore/dist/lite';
import { initializeFirebase } from './scripts/firebasedatastore';

const App = (): JSX.Element => {
  useEffect(() => {
    initialize();
    initializeTruck();
    // wait for initialization of JQuery
    setTimeout(() => {
      initializeChecklist();
      initializeFormHandler();
      initializeValidation();
      initializeFirebase();
      initializeRemoteDataStore();
      initializeMain();
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
                <input
                  className="form-control"
                  name="coffee"
                  id="coffeeOrder"
                  autoFocus
                  required
                  pattern="[a-zA-Z\s]+"
                />{' '}
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="emailAddress"
                  id="emailInput"
                  // value=""
                  placeholder="dr@who.com"
                  required
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
                <input name="strength" id="strengthLevel" type="range" />
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
        <div className="panel panel-default">
          {' '}
          <div className="panel-body">
            <h4>Pending Orders:</h4>
            <div data-coffee-order="checklist"> </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
