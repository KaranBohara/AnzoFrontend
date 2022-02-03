import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import "../styles/AgvStatus.css";
import {Modal} from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';
import AgvUpdate from './AgvUpdate';
import Tooltip from "@material-ui/core/Tooltip";

const AgvView = () => {
    const[agvStatus,setAgvStatus]=useState([]);
    const [currentId,setCurrentId]=useState(0);
    const [editModal,setEditModal]=useState(false);
    const handleEdit=(id)=>
    {
    setEditModal(true);
    setCurrentId(id)
    }
    const handleEditClose=()=>setEditModal(false);
    const fetchData = React.useCallback(() => {
      axios({
        "method": "GET",
        "url": "http://localhost:5000/agv",
        "headers": {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        setAgvStatus(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
    useEffect(() => {
      fetchData()
    }, [fetchData])
  return <div className='table-design-agv'>
  <Modal
      show={editModal}
      size="sm"
      onHide={handleEditClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="my-modal"
    >
      <Modal.Header>
        <Modal.Title>
        <div className='modal-title'>
        <span style={{fontSize:"1rem"}}>Edit AGV Status</span>
        <CloseIcon className='close-icon' onClick={handleEditClose}/>
        </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <AgvUpdate currentId={currentId}/>
      </Modal.Body>
    </Modal>
  <Table className='table' hover>
  <thead>
    <tr>
      <th>AGV_Id</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {agvStatus.map((item)=>
        {
            return(
                <tr key={item.AGV_Id}>
                <td>{item.AGV_Id}</td>
                <td>{item.Status}</td>
                <td>
                <Tooltip title={<span style={{fontSize:".8rem",fontWeight:"bold"}}>Edit AGV Status</span>}  placement="right">
                <EditIcon className='edit-icon' onClick={()=>handleEdit(item.AGV_Id)}/>
                </Tooltip>
                </td>
                </tr>
            )
        })}
  </tbody>
</Table>
</div>
};

export default AgvView;
