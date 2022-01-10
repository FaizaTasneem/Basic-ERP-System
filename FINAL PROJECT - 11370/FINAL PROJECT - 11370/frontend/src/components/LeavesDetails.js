import React, {useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';
import "../nav.css"
import { Link,useParams } from 'react-router-dom';
import '../App.css';

export default function LeavesDetails() {
    // const [data, setData] = useState([]);
    const notify = () => toast.info("Leave Deleted");
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
                    setId(res.data.id);
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
          async function deleteCat(id) {
            await axios
                .delete(`${base_url}/leave/`+tid)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
          
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/editLeaves/"+tid} style={{ textDecoration:"none" }}>Edit</Link></button>&nbsp;&nbsp;
            <button type='button' onClick={()=>deleteCat(tid)}>Delete</button>
            <br/><br/>
            <ToastContainer />

            
            <div className='details-container'>
                <div className='details-elements'>
            
            Description: {description}<br/>
            Leave Type: {leaveType}<br/>
            Duration: {startDate}<br/>{endDate}<br/>

            </div>
            <br/>
            <br/>

            <div className='details-elements'>
            Mode: By Employee<br/>
            Employee: {employeeName}<br/>
            Department: {dept}<br/><br/>
            
            </div>
            </div>

            <div className='details-container'>
                <div className='details-elements'>
           

            </div>
            

            
            </div>
        </div>
    )
}

