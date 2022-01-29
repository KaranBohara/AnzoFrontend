import React from "react";
import "./App.css";
import AnzoTabs from "./Component/AnzoTabs";
import Invoice from "./Component/Invoice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {DropdownButton} from 'react-bootstrap';

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
          <Route path="/addinvoice" exact component={AnzoTabs} />
            <Route path="/viewinvoice" exact component={Invoice} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
