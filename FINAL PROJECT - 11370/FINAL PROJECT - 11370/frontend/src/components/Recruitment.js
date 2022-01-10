import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"

export default function Recruitment() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Recruitment Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/recruitments/`)
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
                .delete(`${base_url}/recruitment/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/addRecruitment/"} style={{ textDecoration:"none" }}>Create</Link></button>
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col">Subject / Application Name</th>
                    <th scope="col">Applicant's Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Applied Job</th>
                    <th scope="col">Stage</th>
                    {/* <th scope="col">Medium</th> */}
                    <th scope="col">Appreciation</th>
                    <th scope="col">Responsible</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td><Link to={"/recruitmentDetails/"+item.id} style={{ textDecoration:"none" }}>{item.subject}</Link></td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.appliedJob}</td>
                                        <td>{item.stage}</td>
                                        {/* <td>{item.medium}</td> */}
                                        <td>{item.appreciation}</td>
                                        <td>{item.responsible}</td>
                                        
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
