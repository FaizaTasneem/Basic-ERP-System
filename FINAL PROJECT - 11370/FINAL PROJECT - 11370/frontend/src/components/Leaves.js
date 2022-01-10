import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"

export default function Leaves() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Leave Deleted");
    var sum = 0;
    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/leaves/`)
                .then(res => {
                    console.log(res.data);
                    setData(res.data);
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function deleteCat(id) {
            await axios
                .delete(`${base_url}/leave/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
         
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/addLeaves/"} style={{ textDecoration:"none" }}>Create</Link></button>
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col">Employee</th>
                    <th scope="col">Request Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Number of Days</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td><Link to={"/leavesDetails/"+item.id} style={{ textDecoration:"none" }}>{item.employeeName}</Link></td>
                                        
                                        <td>{item.requestType}</td>
                                        <td>{item.description}</td>
                                        <td>{item.numberOfDays}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                        <td>{item.leaveType}</td>
                                        <td>{item.status}</td>
                                        
                                    </tr>
                                    
                                    ))}
                                    
                
                </tbody>
            </table>
            {data.forEach((item) => (
                sum=sum+item.numberOfDays
            )) }
            <h5>Total number of Leaves: {sum}</h5>
        </div>
    )
}
