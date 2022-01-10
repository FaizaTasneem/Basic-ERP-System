import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"

export default function Customer() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Customer Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/customers/`)
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
                .delete(`${base_url}/customer/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/addCustomer/"} style={{ textDecoration:"none" }}>Create</Link></button>
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td><Link to={"/customerDetails/"+item.id} style={{ textDecoration:"none" }}>{item.name}</Link></td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        
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
