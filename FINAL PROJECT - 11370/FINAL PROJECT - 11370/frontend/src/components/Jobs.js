import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"

export default function Jobs() {
    const [data, setData] = useState([]);
    // const notify = () => toast.info("Invoice Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/jobs/`)
                .then(res => {
                    console.log(res.data);
                    setData(res.data);
                },
                (error)=>{
                    console.log(error);
                })
          }

        //   async function deleteCat(id) {
        //     await axios
        //         .delete(`${base_url}/invoice/`+id)
        //         .catch((error) => console.log(error.resp));
        //     notify();
        //     getData();
        //   }
    return (
        <div className='py-5'>
            {/* <button type='button'><Link to={"/addInvoice/"} style={{ textDecoration:"none" }}>Create</Link></button> */}
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col" style={{ width:"150px"}}>Job Title</th>
                    <th scope="col" style={{ width:"150px"}}>Department</th>
                    <th scope="col">Current Number of Employees</th>
                    <th scope="col">Expected New Employees</th>
                    <th scope="col">Total Forecasted Employees</th>
                    <th scope="col">Total Hired Employees</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td>{item.title}</td>
                                        <td>{item.dept}</td>
                                        <td>{item.currentEmployeesNo}</td>
                                        <td>{item.expectedEmployeesNo}</td>
                                        <td>{item.forecastedEmployeesNo}</td>
                                        <td>{item.hiredEmployeesNo}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                      ))}
                </tbody>
            </table>
        </div>
    )
}
