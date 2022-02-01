import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {DropdownButton} from 'react-bootstrap';
import CreateInvoice from "./Component/CreateInvoice";
import ViewInvoice from "./Component/ViewInvoice";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="tabs-container">
          <DropdownButton className="invoice-menu" title="Invoice">
           <Link to="/addinvoice">Create Invoice</Link>
           <Link to="/viewinvoice">View Invoice</Link>
          </DropdownButton>
          <DropdownButton className="invoice-menu" title="Pallet">
          </DropdownButton>
          <DropdownButton className="invoice-menu" title="AGV">
          </DropdownButton>
        </div>
        <Switch>
          <Route path="/addinvoice" exact component={CreateInvoice} />
            <Route path="/viewinvoice" exact component={ViewInvoice} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
