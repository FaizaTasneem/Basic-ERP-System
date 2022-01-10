import React,{useEffect,useState} from 'react'
import "../nav.css"
import '../App.css';
import {useParams} from 'react-router-dom';
import base_url from './api'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function EditCustomer() {
    const notify = () => toast.success("Customer Updated Successfully");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [website,setWebsite]=useState('');
    const [tags,setTags]=useState('');
    const [language,setLanguage]=useState('');

    const [cname,setcName]=useState('');
    const [ctitle,setcTitle]=useState('');
    const [cposition,setcPosition]=useState('');
    const [cemail,setcEmail]=useState('');
    const [cphone,setcPhone]=useState('');
    const [cmobile,setcMobile]=useState('');


    useEffect(() => {
        getData();
        }, []);

        async function getData() {
            axios.get(`${base_url}/customer/`+tid)
                .then(res => {
                    console.log(res.data);

                    setId(res.data.id);
                    setName(res.data.name);
                    setPhone(res.data.phone);
                    setMobile(res.data.mobile);
                    setEmail(res.data.email);
                    setAddress(res.data.address);
                    setWebsite(res.data.website);
                    setTags(res.data.tags);
                    setLanguage(res.data.language);


                setcName(res.data.cname);
                setcMobile(res.data.cmobile);
                setcPhone(res.data.cphone);
                setcEmail(res.data.cemail);
                setcPosition(res.data.cposition);
                setcTitle(res.data.ctitle);
                    
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function categoryEdit (e) { 
            e.preventDefault();
            
            const data = {
                'id':id,
                'name':name,
                'phone':phone,
                'mobile':mobile,
                'email':email,
                'address':address,
                'website':website,
                'tags':tags,
                'language':language,

                'cname':cname,
                'cphone':cphone,
                'cmobile':cmobile,
                'cemail':cemail,
                'ctitle':ctitle,
                'cposition':cposition,
                
              };
              axios
              .put(`${base_url}/customer`, data)
              .then((response) => {
                setId("");
                setName("");
                setMobile("");
                setPhone("");
                setEmail("");
                setAddress("");
                setWebsite("");
                setTags("");
                setLanguage("");

                setcName("");
            setcMobile("");
            setcPhone("");
            setcEmail("");
            setcPosition("");
            setcTitle("");
            notify();
              }).catch((err) => {
                console.log( err.data );
              });
            
         }
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={categoryEdit}>
            
            <input type="submit" value="save" style={{ backgroundColor:"lightsteelblue",fontSize:"20px" }}/>

            <label for="fname" style={{ fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>

            
            <div className='formcontainer'>

            <div className='formelem'>

            <label for="fname" style={{ fontSize:"20px"}}>Address</label>
            <input type="text" id="fname" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Website</label>
            <input type="text" id="lname" name="website" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
            
            
            <label for="lname" style={{ fontSize:"20px"}}>Tags</label>
            <select onChange={(e)=>setTags(e.target.value)}>
            <option value=''></option>
              <option value='Company Contact'>Company Contact</option>
              <option value='Contacts Buyer'>Contacts Buyer</option>
              <option value='Consultancy Services'>Consultancy Services</option>
              <option value='Distributor'>Distributor</option>
              <option value='Employee'>Employee</option>
              <option value='Manufacturer'>Manufacturer</option>
              <option value='Office Supplies'>Office Supplies</option>
            </select>

            <br/><br/><br/><br/><br/>


            <h3>Contacts and Addresses</h3>
            {/* <button type='button'style={{ width:"100px"}}><Link to={"/addContacts"+id} style={{ textDecoration:"none" }}>Create</Link></button>&nbsp;&nbsp; */}
            <label for="fname" style={{ fontSize:"20px"}}>Contact Name</label>
            <input type="text" id="fname" name="cname" value={cname} onChange={(e)=>setcName(e.target.value)} /><br/><br/>

            <label for="fname" style={{ fontSize:"20px"}}>Title</label>
            <input type="text" id="fname" name="title" value={ctitle} onChange={(e)=>setcTitle(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Job Position</label>
            <input type="text" id="fname" name="cposition" value={cposition} onChange={(e)=>setcPosition(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="fname" name="cemail" value={cemail} onChange={(e)=>setcEmail(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Phone</label>
            <input type="text" id="fname" name="cphone" value={cphone} onChange={(e)=>setcPhone(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Mobile</label>
            <input type="text" id="fname" name="cmobile" value={cmobile} onChange={(e)=>setcMobile(e.target.value)}/>

            </div>
            
            <div className='formelem'>
            
            <label for="fname" style={{ fontSize:"20px"}}>Phone</label>
            <input type="text" id="fname" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Mobile</label>
            <input type="text" id="fname" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="fname" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label for="fname" style={{ fontSize:"20px"}}>language</label>
            <input type="text" id="fname" name="language" value={language} onChange={(e)=>setLanguage(e.target.value)}/>

            </div>
            </div>
            
            </form>
        </div>
    )
}
