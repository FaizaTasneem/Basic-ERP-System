import React,{useState} from 'react'
import "../nav.css"
import '../App.css'
import axios from 'axios';
import base_url from './api'
import { Link,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AddInvoice() {
    const notify = () => toast.success("Invoice added successfully");
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

    async function tagSubmit(e){
            e.preventDefault();
            const data = {
                'id':id,
                'name':name,
                'invoiceno':invoiceno,
                'paymentTerms':paymentTerms,
                'salesperson':salesperson,
                'status':status,
                'product':product,
                'quantity':quantity,
                'unitprice':unitprice,
                'amount':amount,
                'description':description,
                'dueDate':dueDate,
                'invoiceDate':invoiceDate,

                
            };

            axios.post(`${base_url}/invoice`, data)
          .then((response) => {
            setId("");
            setName("");
            setInvoiceno("");
            setPaymentTerms("");
            setSalesperson("");
            setProduct("");
            setStatus("");
            setQuantity("");
            setUnitPrice("");
            setAmount("");
            setDescription("");
            setDuedate("");
            setInvoicedate("");

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
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} /><br/><br/>

            <label for="fname" style={{ fontSize:"20px"}}>Customer</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>

            <label for="fname" style={{ fontSize:"20px"}}>Payment Terms</label>
            <input type="text" id="fname" name="paymentTerms" value={paymentTerms} onChange={(e)=>setPaymentTerms(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Invoice Date</label>
            <input type="text" id="fname" name="invoiceDate" value={invoiceDate} onChange={(e)=>setInvoicedate(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Salesperson</label>
            <input type="text" id="fname" name="salesperson" value={salesperson} onChange={(e)=>setSalesperson(e.target.value)}/>

           <br/><br/><br/>
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
                
                <td><input type="text" id="fname" name="product" value={product} onChange={(e)=>setProduct(e.target.value)} style={{ width:"200px"}}/></td>
                <td><input type="text" id="fname" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} style={{ width:"200px"}}/></td>
                <td><input type="text" id="fname" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} style={{ width:"200px"}}/></td>
                <td><input type="text" id="fname" name="unitprice" value={unitprice} onChange={(e)=>setUnitPrice(e.target.value)} style={{ width:"200px"}}/></td>
                <td><input type="text" id="fname" name="amount" value={quantity*unitprice} onChange={(e)=>setAmount(e.target.value)} style={{ width:"200px"}}/></td>
                
                </tr>
            </table>
            <br/><br/>
            
            
            </form>
        </div>
    )
}
