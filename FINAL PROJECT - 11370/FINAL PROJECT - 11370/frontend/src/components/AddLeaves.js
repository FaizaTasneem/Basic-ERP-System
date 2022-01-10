import React,{useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import "../nav.css"
import '../App.css'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';

export default function AddLeaves() {
    const notify = () => toast.success("Leave added successfully");
    const [id,setId]=useState('');
    const [employeeName,setEmployeeName]=useState('');
    const [dept,setDept]=useState('');
    const [requestType,setRequesttype]=useState('');
    const [description,setDescription]=useState('');
    const [numberOfDays,setNumberofdays]=useState('');
    const [totalDays,setTotaldays]=useState('');
    const [startDate,setStartdate]=useState('');
    const [endDate,setEnddate]=useState('');
    const [leaveType,setLeavetype]=useState('');
    const [status,setStatus]=useState('');
    

    async function tagSubmit(e){
            e.preventDefault();
            const data = {
                'id':id,
                'employeeName':employeeName,
                'dept':dept,
                'requestType':requestType,
                'description':description,
                'numberOfDays':numberOfDays,
                'totalDays':totalDays,
                'startDate':startDate,
                'endDate':endDate,
                'leaveType':leaveType,
                'status':status,
            };

            axios.post(`${base_url}/leave`, data)
          .then((response) => {
            setId("");
            setEmployeeName("");
            setDept("");
            setRequesttype("");
            setDescription("");
            setNumberofdays("");
            setTotaldays("");
            setStartdate("");
            setEnddate("");
            setLeavetype("");
            setStatus("");
            
            notify();
          }).catch((err) => {
            console.log( err.data );
          });
        
    }
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={tagSubmit}>

            <input type="submit" value="save" style={{ backgroundColor:"lightsteelblue",fontSize:"20px" }}/>


            <label for="fname" style={{ fontSize:"20px"}}>ID</label>
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} /><br/>
            
            <br/><br/><br/><br/><br/>
            
            
            <div className='formcontainer'>

            <div className='formelem'>

            <label for="fname" style={{ fontSize:"20px"}}>Description</label>
            <input type="text" id="fname" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Request Type</label>
            <select onChange={(e)=>setRequesttype(e.target.value)}>
            <option value={requestType}></option>
              <option value='Leave Request'>Leave Request</option>
              <option value='Allocation Request'>Allocation Request</option>
            </select>


            <label for="lname" style={{ fontSize:"20px"}}>Leave Type</label>
            <select onChange={(e)=>setLeavetype(e.target.value)}>
            <option value={leaveType}></option>
              <option value='Legal Leaves'>Legal Leaves</option>
              <option value='Compensatory Days'>Compensatory Days</option>
              <option value='Sick Leaves'>Sick Leaves</option>
              <option value='Unpaid'>Unpaid</option>
            </select>
            
            <label for="lname" style={{ fontSize:"20px"}}>Duration</label>
            <input type="date" id="fname" name="startDate" value={startDate} onChange={(e)=>setStartdate(e.target.value)}/>
            <input type="date" id="fname" name="endDate" value={endDate} onChange={(e)=>setEnddate(e.target.value)}/>

           
           </div>
            
            <div className='formelem'>
            <h5>Mode: By Employee</h5><br/><br/>
            <label for="fname" style={{ fontSize:"20px"}}>Employee</label>
            <input type="text" id="fname" name="employeeName" value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)} /><br/><br/>

            <label for="fname" style={{ fontSize:"20px"}}>Department</label>
            <select onChange={(e)=>setDept(e.target.value)}>
            <option value={dept}></option>
              <option value='Administration'>Administration</option>
              <option value='Management'>Management</option>
              <option value='Professional Services'>Professional Services</option>
              <option value='Research and Development'>Research and Development</option>
              <option value='Sales'>Sales</option>
            </select>

            </div>
            </div>
            
            
            
            
            </form>
        </div>
    )
}
