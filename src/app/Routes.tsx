import * as React from 'react';
import App from './App';
import { PaymentConfirmation } from './Pages/PaymentConfirmation/PaymentConfirmation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Payment } from './Pages/Payment/Payment';

export const Routes: React.FC = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  </div>
);
