import React, {useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';
import "../nav.css"
import { Link,useParams } from 'react-router-dom';
import '../App.css';

export default function InvoiceDetails() {
    // const [data, setData] = useState([]);
    const notify = () => toast.info("Invoice Deleted");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [invoiceno,setInvoiceno]=useState('');
    const [paymentTerms,setPaymentTerms]=useState('');
    const [salesperson,setSalesperson]=useState('');
    const [status,setStatus]=useState('');
    const [product,setProduct]=useState('');
    const [quantity,setQuantity]=useState('');
    const [unitprice,setUnitPrice]=useState('');
    const [amount,setAmount]=useState('');
    const [description,setDescription]=useState('');
    const [dueDate,setDuedate]=useState('');
    const [invoiceDate,setInvoicedate]=useState('');
    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/invoice/`+tid)
                .then(res => {
                    console.log(res.data);
                    setId(res.data.id);
            setName(res.data.name);
            setInvoiceno(res.data.invoiceno);
            setPaymentTerms(res.data.paymentTerms);
            setSalesperson(res.data.salesperson);
            setProduct(res.data.product);
            setStatus(res.data.status);
            setQuantity(res.data.quantity);
            setUnitPrice(res.data.unitprice);
            setAmount(res.data.unitprice);
            setDescription(res.data.description);
            setDuedate(res.data.dueDate);
            setInvoicedate(res.data.invoiceDate);
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
            <button type='button'><Link to={"/editInvoice/"+tid} style={{ textDecoration:"none" }}>Edit</Link></button>&nbsp;&nbsp;
            <button type='button' onClick={()=>deleteCat(tid)}>Delete</button>
            <br/><br/>
            <ToastContainer />

            <h2>{name}</h2><br/><br/>
            


            <div className='details-container'>
                <div className='details-elements'>
            
            Customer: {name}<br/>
            Payment Terms: {paymentTerms}<br/><br/>

            </div>
            <br/>
            <br/>

            <div className='details-elements'>
            
            Invoice Date: {invoiceDate}<br/>
            Salesperson: {salesperson}<br/><br/>
            </div>
            </div>

            <br/><br/><br/>
            <div className='details-container'>
                <div className='details-elements'>
                <table class="table">
            
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Amount</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
            <tr>
                
                <td style={{ width:"200px"}}>{product}</td>
                <td style={{ width:"200px"}}>{description}</td>
                <td style={{ width:"200px"}}>{quantity}</td>
                <td style={{ width:"200px"}}>{unitprice}</td>
                <td style={{ width:"200px"}}>{amount}</td>
                
                </tr>
            </table>
            <br/><br/>

            </div>
            

            
            </div>
        </div>
    )
}

