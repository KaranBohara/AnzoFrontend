import { useState } from 'react';
import './App.css';
import AnzoTabs from './Component/AnzoTabs';
import Invoice from './Component/Invoice';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  const[menuInvoice,setMenuInvoice]=useState(false);
  const[createInvoice,setCreateInvoice]=useState(false);
  const[viewInvoice,setViewInvoice]=useState(false);

  const handleMenuOpen=()=>
  {
    setMenuInvoice(true)
    setCreateInvoice(false)
    setViewInvoice(false)
  }
  const handleCreate=()=>
  {
    setMenuInvoice(false)
    setCreateInvoice(true)
    setViewInvoice(false)
  }
  const handleView=()=>
  {
    setMenuInvoice(false)
    setCreateInvoice(false)
    setViewInvoice(true)
  }
  return (
    <div className="App">
    <div className='tabs-container'>
    <button onClick={handleMenuOpen}>Invoice
    <ArrowDropDownIcon/>
    </button>
    <button>Pallet</button>
    <button>AGV</button>
    </div>
    {menuInvoice?<div className='invoice-dropdown'>
    <button onClick={handleCreate}>Create Invoice</button>
    <button onClick={handleView}>View Invoice</button>
    </div>:""}
    {createInvoice?<AnzoTabs/>:""}
    {viewInvoice?<div className='invoice-table'>
    <Invoice/>
    </div>:""}
    </div>
  );
}

export default App;
