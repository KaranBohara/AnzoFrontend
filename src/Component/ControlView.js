import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import axios from 'axios';

const ControlView = () => {
    const[control,setControl]=useState([]);
    const fetchData = React.useCallback(() => {
      axios({
        "method": "GET",
        "url": "http://localhost:5000/anzo/control",
        "headers": {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        setControl(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
    useEffect(() => {
      fetchData()
    }, [fetchData])
  return <div className='table-design-control'>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Control Id</th>
      <th>Target Data</th>
      <th>Status</th>
      <th>AgvId</th>
      <th>Created Date</th>
    </tr>
  </thead>
  <tbody>
    {control.map((item,index)=>
        {
            return(
                <tr key={index}>
                <td>{item.ControlId}</td>
                <td>{item.TargetData}</td>
                <td>{item.Status}</td>
                <td>{item.AgvId}</td>
                <td>{item.CreatedDate}</td>
                </tr>
            )
        })}
  </tbody>
</Table>
  </div>;
};

export default ControlView;
