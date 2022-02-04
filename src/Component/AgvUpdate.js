import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import axios from 'axios';
var agv={
  Id:0,
  Agv_Id:1,
  Status:'Null'
}
const AgvUpdate = (props) => {
    const history = useHistory();
    const [agvData, setAgvData] = useState(agv);
    const [statusData,setStatusData]=useState([]);
    const fetchAgvData = React.useCallback(() => {
      axios({
        "method": "GET",
        "url": `http://localhost:5000/anzo/agv/${props.currentId}`,
        "headers": {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        setAgvData(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
    }, [props.currentId])
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
    fetchAgvData();
    fetchStatusData();
  },[fetchAgvData,fetchStatusData]);
      const onSubmit =async () => {
        await fetch(`http://localhost:5000/anzo/agv/${props.currentId}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(agvData),
          })
          .then((response)=>response.json())
            .then((data) => {
              if(data.success)
              {
              toast.success(data.message)
              }
              else
              {
                toast.error(data.message)
              }
            })
            setTimeout(()=>
            {
              history.push('/viewagv')
            },1500)
        };
  return <div>
  <ToastContainer
  draggable={false}
  position="top-center"
  transition={Zoom}
  autoClose={3000}
/>
<form onSubmit={onSubmit}>
<div className="agv-input-container">
<label>AGV_Id</label>
<input name="Agv_Id" type="text" disabled value={agvData.Agv_Id}/>
</div>
<div className="agv-input-container">
<label>AGV Status</label>
<select name='Status' onChange={(e)=>{setAgvData({...agvData,Status:e.target.value})}} id='Status'>
<option key={agvData.Agv_Id} value={agvData.Status}>{agvData.Status}</option>
{statusData.filter((allStatus)=>
  {
    return allStatus.Status!==agvData.Status;
  }).map((item)=>
  {
    return<option key={item.Id} value={item.Status}>{item.Status}</option>
  })}
</select>
  </div>
  <div className="agv-input-container">
  <button className="add-product-button">Submit</button>
</div>
  </form>
  </div>;
};

export default AgvUpdate;
