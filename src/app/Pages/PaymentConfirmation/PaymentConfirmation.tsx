import React from 'react';
import './PaymentConfirmation.css';

export const PaymentConfirmation = ({ name }) => {
  // const name = () => 'jake'; // (window as any).myTruck.getName((window as any).App.editingOrder);

  return (
    <div id="ex1" className="modal">
      <section>
        <h2>Thank You!</h2>
        <p>Thank you for your payment {name}</p>
      </section>
    </div>
  );
};
