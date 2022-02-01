import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import axios from 'axios';

const ViewPallet = () => {
    const[pallet,setPallet]=useState([]);
    const fetchData = React.useCallback(() => {
      axios({
        "method": "GET",
        "url": "http://localhost:5000/pallet",
        "headers": {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        setPallet(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
    useEffect(() => {
      fetchData()
    }, [fetchData])
  return <div className='table-design'>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Pallet Id</th>
      <th>Pallet Number</th>
      <th>Station Id</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Status</th>
      <th>Created Date</th>
    </tr>
  </thead>
  <tbody>
    {pallet.map((item)=>
        {
            return(
                <tr key={item.PalletId}>
                <td>{item.PalletId}</td>
                <td>{item.PalletNumber}</td>
                <td>{item.StationId}</td>
                <td>{item.Item}</td>
                <td>{item.Qty}</td>
                <td>{item.Status}</td>
                <td>{item.createdAt}</td>
                </tr>
            )
        })}
  </tbody>
</Table>
  </div>;
};

export default ViewPallet;
