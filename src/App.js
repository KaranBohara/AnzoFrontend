import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {DropdownButton} from 'react-bootstrap';
import CreateInvoice from "./Component/CreateInvoice";
import ViewInvoice from "./Component/ViewInvoice";
import CreatePallet from "./Component/CreatePallet";
import ViewPallet from "./Component/ViewPallet";
import AgvView from "./Component/AgvView";
import ControlView from "./Component/ControlView";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="tabs-container">
          <DropdownButton className="tab-menu" title="Invoice">
           <Link to="/addinvoice">Create Invoice</Link>
           <Link to="/viewinvoice">View Invoice</Link>
          </DropdownButton>
          <DropdownButton className="tab-menu" title="Pallet">
          <Link to="/addpallet">Create Pallet</Link>
           <Link to="/viewpallet">View Pallet</Link>
          </DropdownButton>
          <DropdownButton className="tab-menu" title="AGV">
          <Link to="/viewagv">View AGV Status</Link>
          </DropdownButton>
          <DropdownButton className="tab-menu" title="Control">
          <Link to="/viewcontrol">View Control</Link>
          </DropdownButton>
        </div>
        <Route path="/" exact component={ViewInvoice} />
        <Switch>
          <Route path="/addinvoice" exact component={CreateInvoice} />
          <Route path="/viewinvoice" exact component={ViewInvoice} />
        </Switch>
        <Switch>
          <Route path="/addpallet" exact component={CreatePallet} />
            <Route path="/viewpallet" exact component={ViewPallet} />
        </Switch>
        <Switch>
        <Route path="/viewagv" exact component={AgvView}/>
        </Switch>
        <Switch>
        <Route path="/viewcontrol" exact component={ControlView}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
