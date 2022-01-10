import React,{useState} from 'react'
import "../nav.css"
import '../App.css'
import axios from 'axios';
import base_url from './api'
import { Link,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AddContacts() {
    const notify = () => toast.success("Contact added successfully");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [position,setPosition]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [mobile,setMobile]=useState('');
    
    async function tagSubmit(e){
            e.preventDefault();
            const data = {
                'id':id,
                'name':name,
                'phone':phone,
                'mobile':mobile,
                'email':email,
                'title':title,
                'position':position,
                
            };

            axios.post(`${base_url}/contact`, +tid)
          .then((response) => {
            setId("");
            setName("");
            setMobile("");
            setPhone("");
            setEmail("");
            setPosition("");
            setTitle("");
            
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

            <label for="fname" style={{ fontSize:"20px"}}>Contact Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>

            <label for="fname" style={{ fontSize:"20px"}}>Title</label>
            <input type="text" id="fname" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Job Position</label>
            <input type="text" id="fname" name="position" value={position} onChange={(e)=>setPosition(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="fname" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Phone</label>
            <input type="text" id="fname" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Mobile</label>
            <input type="text" id="fname" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>


            <br/><br/>
            
            
            </form>
        </div>
    )
}
