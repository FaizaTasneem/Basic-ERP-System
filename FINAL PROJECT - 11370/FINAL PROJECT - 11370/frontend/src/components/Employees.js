import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"
import AddEmployee from './AddEmployee';
import About from './About'

export default function Employees() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Employee Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/employees/`)
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
                .delete(`${base_url}/employee/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/add/"} style={{ textDecoration:"none" }}>Create</Link></button>
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Work Phone</th>
                    <th scope="col">Work Email</th>
                    <th scope="col">Department</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Manager</th>
                    {/* <th scope="col">Department</th>
                    <th scope="col">Handle</th> */}
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td><Link to={"/about/"+item.id} style={{ textDecoration:"none" }}>{item.name}</Link></td>
                                        <td>{item.work_phone}</td>
                                        <td>{item.work_email}</td>
                                        <td>{item.dept}</td>
                                        <td>{item.title}</td>
                                        <td>{item.manager}</td>
                                        {/* <td class="d-flex">
                                            <button type="button">
                                        <Link to={"/edit/"+item.bookid} style={{ textDecoration:"none" }}>Edit</Link></button> ||||
                                           <button type='button' onClick={()=>deleteCat(item.bookid)}>Delete</button>
                                        </td> */}
                                    </tr>
                                      ))}
                </tbody>
            </table>
        </div>
    )
}
