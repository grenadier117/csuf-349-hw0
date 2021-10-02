import { initializeFormHandler } from 'app/scripts/formhandler';
import { initializePayment } from 'app/scripts/payment';
import React from 'react';
import './Payment.css';

export const Payment = ({ navigateBack }: { navigateBack: () => void }) => {
  React.useEffect(() => {
    if ((window as any).jQuery) {
      initializeFormHandler();
      initializePayment(navigateBack);
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
          <table className="payment-table">
            <tr>
              <td>
                <label htmlFor="name">
                  <span>Name: </span>
                  <strong>
                    <abbr title="required">*</abbr>
                  </strong>
                </label>
              </td>
              <td>
                <input type="text" id="name" name="username" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mail">
                  <span>E-mail: </span>
                  <strong>
                    <abbr title="required">*</abbr>
                  </strong>
                </label>
              </td>
              <td>
                <input type="email" id="mail" name="usermail" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pwd">
                  <span>Password: </span>
                  <strong>
                    <abbr title="required">*</abbr>
                  </strong>
                </label>
              </td>
              <td>
                <input type="password" id="pwd" name="password" />
              </td>
            </tr>
          </table>
        </p>
        <p></p>
      </section>
      <section>
        <h2>Payment information</h2>
        <p>
          <table className="payment-table">
            <tr>
              <td>
                <label htmlFor="card">
                  <span>Card type:</span>
                </label>
              </td>
              <td>
                <select id="card" name="usercard">
                  <option value="visa">Visa</option>
                  <option value="mc">Mastercard</option>
                  <option value="amex">American Express</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="number">
                  <span>Card number:</span>
                  <strong>
                    <abbr title="required">*</abbr>
                  </strong>
                </label>
              </td>
              <td>
                <input type="tel" id="number" name="cardnumber" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date">
                  <span>Expiration date:</span>
                  <strong>
                    <abbr title="required">*</abbr>
                  </strong>
                </label>
              </td>
              <td>
                <input type="date" id="date" name="expiration" />
              </td>
            </tr>
          </table>
        </p>
      </section>
      <button type="submit">SUBMIT</button>
    </form>
  );
};
