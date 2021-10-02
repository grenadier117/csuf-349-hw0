import { initializeFormHandler } from 'app/scripts/formhandler';
import React from 'react';
import './Payment.css';

export const Payment = ({ navigateBack }: { navigateBack: () => void }) => {
  let App;
  const PAYMENT_SELECTOR = '[data-payment-order="form"]';
  let FormHandler;
  let formHandler;
  React.useEffect(() => {
    if ((window as any).jQuery) {
      initializeFormHandler();
      App = (window as any).App;
      FormHandler = App.FormHandler;
      formHandler = new FormHandler(PAYMENT_SELECTOR);
      formHandler.addSubmitHandler(data => {
        return new Promise(() => {
          (window as any).myTruck.addPayment((window as any).App.editingOrder, data);
          navigateBack();
        });
      });
    }
  }, [(window as any).jQuery]);
  return (
    <form data-payment-order="form">
      <section>
        <h2>Contact information</h2>
        <fieldset>
          <legend>Title</legend>
          <ul>
            <li>
              <label htmlFor="title_1">
                <input type="radio" id="title_1" name="title" value="K" />
                King
              </label>
            </li>
            <li>
              <label htmlFor="title_2">
                <input type="radio" id="title_2" name="title" value="Q" />
                Queen
              </label>
            </li>
            <li>
              <label htmlFor="title_3">
                <input type="radio" id="title_3" name="title" value="J" />
                Joker
              </label>
            </li>
          </ul>
        </fieldset>
        <p>
          <label htmlFor="name">
            <span>Name: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <input type="text" id="name" name="username" />
        </p>
        <p>
          <label htmlFor="mail">
            <span>E-mail: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <input type="email" id="mail" name="usermail" />
        </p>
        <p>
          <label htmlFor="pwd">
            <span>Password: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <input type="password" id="pwd" name="password" />
        </p>
      </section>
      <section>
        <h2>Payment information</h2>
        <p>
          <label htmlFor="card">
            <span>Card type:</span>
          </label>
          <select id="card" name="usercard">
            <option value="visa">Visa</option>
            <option value="mc">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </p>
        <p>
          <label htmlFor="number">
            <span>Card number:</span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <input type="tel" id="number" name="cardnumber" />
        </p>
        <p>
          <label htmlFor="date">
            <span>Expiration date:</span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
            <em>formatted as mm/dd/yyyy</em>
          </label>
          <input type="date" id="date" name="expiration" />
        </p>
      </section>
      <button type="submit">SUBMIT</button>
    </form>
  );
};
