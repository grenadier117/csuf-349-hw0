import './Home.css';
import React, { useEffect, useState } from 'react';
import { initializeChecklist } from 'app/scripts/checklist';
import { initialize } from 'app/scripts/datastore';
import { initializeFormHandler } from 'app/scripts/formhandler';
import { initializeRemoteDataStore } from 'app/scripts/remotedatastore';
import { initializeTruck } from 'app/scripts/truck';
import { initializeValidation } from 'app/scripts/validation';
import { PaymentConfirmation } from '../PaymentConfirmation/PaymentConfirmation';
import { Payment } from '../Payment/Payment';
import { openModal } from 'app/scripts/payment';
import { initializeMain } from 'app/scripts/main';
import clsx from 'clsx';
import { initializeFirebase } from 'app/scripts/firebasedatastore';

export const Home = () => {
  const [isPayment, setIsPayment] = useState<boolean>(false);

  useEffect(() => {
    if ((window as any).jQuery) {
      initialize();
      initializeTruck();
      initializeChecklist();
      initializeFormHandler();
      initializeValidation();
      initializeFirebase();
      initializeRemoteDataStore();
      initializeMain(navigateToPayment);
    }
  }, [(window as any).jQuery]);

  const navigateToPayment = () => {
    setIsPayment(true);
  };

  const navigateBack = () => {
    openModal();
    setIsPayment(false);
  };

  return (
    <React.Fragment>
      <div
        className={clsx({
          'page-hidden': isPayment,
        })}
      >
        {' '}
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
      </div>
      <div
        className={clsx({
          'page-hidden': !isPayment,
        })}
      >
        <Payment navigateBack={navigateBack} />
      </div>
      <PaymentConfirmation />
    </React.Fragment>
  );
};
