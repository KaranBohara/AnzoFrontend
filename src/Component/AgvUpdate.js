import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";

const AgvUpdate = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(
          `http://localhost:5000/agv/${props.currentId}`,
          {
            method: "Get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((val) => {
            setData(val);
          });
          console.log(data);
      },[]);
      const onSubmit =async () => {
        await fetch(`http://localhost:5000/agv/${props.currentId}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
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
              history.push('/viewagv')
            })
            .catch((e) => {
              console.log(e);
            });
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
<input name="AGV_Id" type="text" disabled value={data.AGV_Id}/>
</div>
<div className="agv-input-container">
<label>AGV Status</label>
<input name="Status" type="text" value={data.Status} onChange={(e) => {
    setData({ ...data, Status: e.target.value });
  }}/>
  </div>
  <div className="agv-input-container">
  <button className="add-product-button">Submit</button>
</div>
  </form>
  </div>;
};

export default AgvUpdate;
