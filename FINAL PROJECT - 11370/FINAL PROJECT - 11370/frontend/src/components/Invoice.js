import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import "../nav.css"

export default function Invoice() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Invoice Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/invoices/`)
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
                .delete(`${base_url}/invoice/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/addInvoice/"} style={{ textDecoration:"none" }}>Create</Link></button>
            <ToastContainer />
            <table class="table">
            
                <thead>
                    <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Invoice Date</th>
                    <th scope="col">Number</th>
                    <th scope="col">Salesperson</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Amount Due</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((item) =>(
                                      <tr>
                                        <td><Link to={"/invoiceDetails/"+item.id} style={{ textDecoration:"none" }}>{item.name}</Link></td>
                                        <td>{item.invoiceDate}</td>
                                        <td>{item.invoiceno}</td>
                                        <td>{item.salesperson}</td>
                                        <td>{item.dueDate}</td>
                                        <td>{item.quantity*item.unitprice}</td>
                                        <td>{item.quantity*item.unitprice}</td>
                                        <td>{item.status}</td>

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
