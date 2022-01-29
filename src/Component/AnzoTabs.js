import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/AnzoTabs.css";
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
const AnzoTabs = () => {
  const history=useHistory();
    const onSubmit = async values => {
        await fetch("http://localhost:5000/invoice", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(values),
          })
          .then((response)=>
          {
            response.json()
          })
          .then(history.push('/viewinvoice'))
      }
  return(
      <div>
   <Form
      onSubmit={onSubmit}
      initialValues={{GantryId:1,StationId:1}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className='form-container'>
        <h3 style={{marginTop:"1rem"}}>Invoice Entry</h3>
        <div className='input-container'>
          <div className='input-wrap'>
            <label>Truck Number</label>
            <Field
              name="TruckNumber"
              component="input"
              type="text"
            />
          </div>
          <div className='input-wrap'>
            <label>Gantry Id</label>
            <Field name="GantryId" component="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Field>
          </div>
          </div>
          <div className='input-container'>
          <div className='input-wrap'>
          <label>5L</label>
          <Field
            name="Requested_5L"
            component="input"
            type="text"
          />
        </div>
        <div className='input-wrap'>
        <label>3L</label>
        <Field
          name="Requested_3L"
          component="input"
          type="text"
        />
      </div>
      </div>
      <div className='input-wrap'>
      <label>2L</label>
      <Field
        name="Requested_2L"
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
          <div className="invoice-submit">
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

export default AnzoTabs;
