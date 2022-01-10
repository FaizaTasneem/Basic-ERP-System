import React,{useEffect,useState} from 'react'
import "../nav.css"
import '../App.css';
import {useParams} from 'react-router-dom';
import base_url from './api'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function EditLeaves() {
    const notify = () => toast.success("Leave Updated Successfully");
    const {id:tid}=useParams();
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

    useEffect(() => {
        getData();
        }, []);

        async function getData() {
            axios.get(`${base_url}/leave/`+tid)
                .then(res => {
                    console.log(res.data);

                    setEmployeeName(res.data.employeeName);
            setDept(res.data.dept);
            setRequesttype(res.data.requestType);
            setDescription(res.data.description);
            setNumberofdays(res.data.numberOfDays);
            setTotaldays(res.data.totalDays);
            setStartdate(res.data.startDate);
            setEnddate(res.data.endDate);
            setLeavetype(res.data.leaveType);
            setStatus(res.data.status);
                    
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function categoryEdit (e) { 
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
              axios
              .put(`${base_url}/leave`, data)
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
            <form onSubmit={categoryEdit}>
            
            <input type="submit" value="save" style={{ backgroundColor:"lightsteelblue",fontSize:"20px" }}/>

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
