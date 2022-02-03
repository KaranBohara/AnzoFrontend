import React,{useState,useEffect} from 'react';
import "../styles/AnzoTableForm.css";
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from "react-toastify";
import axios from 'axios';

const CreatePallet = () => {
  const history=useHistory();
  const [statusData,setStatusData]=useState([]);
  const fetchStatusData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5000/anzo/status",
      "headers": {
        "content-type": "application/json",
      }
    })
    .then((response) => {
      setStatusData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
useEffect(() => {
  fetchStatusData();
},[fetchStatusData]);
  const onSubmitPallet = async (values) => {
    fetch("http://localhost:5000/anzo/pallet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
              toast.success(data.message)
            })
       setTimeout(()=>
       {
         history.push('/viewpallet')
       },1500)
  }
  return(
      <div>
      <ToastContainer draggable={false} position="top-right" transition={Zoom} autoClose={1500} />
   <Form
      onSubmit={onSubmitPallet}
      initialValues={{StationId:1}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className='form-container'>
        <h3 style={{marginTop:"1rem"}}>Pallet Entry</h3>
        <div className='input-container'>
          <div className='input-wrap'>
            <label>Pallet Number</label>
            <Field
              name="PalletNumber"
              component="input"
              type="text"
            />
          </div>
          <div className='input-wrap'>
            <label>Station Id</label>
            <Field name="StationId" component="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Field>
          </div>
          </div>
          <div className='input-container'>
          <div className='input-wrap'>
          <label>Item</label>
          <Field
            name="Item"
            component="input"
            type="text"
          />
        </div>
        <div className='input-wrap'>
        <label>Quantity</label>
        <Field
          name="Qty"
          component="input"
          type="text"
        />
      </div>
      </div>
      <div className='input-container'>
      <div className='input-wrap'>
      <label>Status</label>
      <Field name="Status" component="select">
  
{statusData.map((item)=>
  {
    return<option key={item.Id} value={item.Status}>{item.Status}</option>
  })}
    </Field>
    </div>
      </div>
          <div className="table-submit">
            <button>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  </div>
  );
};

export default CreatePallet;
