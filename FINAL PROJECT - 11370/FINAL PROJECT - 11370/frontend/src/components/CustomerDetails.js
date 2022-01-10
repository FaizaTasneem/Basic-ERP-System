import React, {useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';
import "../nav.css"
import { Link,useParams } from 'react-router-dom';
import '../App.css';

export default function CustomerDetails() {
    // const [data, setData] = useState([]);
    const notify = () => toast.info("Customer Deleted");
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
          async function deleteCat(id) {
            await axios
                .delete(`${base_url}/customer/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
          
    return (
        <div className='py-5'>
            <button type='button'><Link to={"/editCustomer/"+tid} style={{ textDecoration:"none" }}>Edit</Link></button>&nbsp;&nbsp;
            <button type='button' onClick={()=>deleteCat(tid)}>Delete</button>
            <br/><br/>
            <ToastContainer />

            <h2>{name}</h2><br/><br/>
            


            <div className='details-container'>
                <div className='details-elements'>
            
            Address: {address}<br/>
            Website: {website}<br/>
            Tags: {tags}<br/><br/>

            </div>
            <br/>
            <br/>

            <div className='details-elements'>
            
            Email: {email}<br/>
            Phone: {phone}<br/>
            Mobile: {mobile}<br/>
            Language: {language}<br/><br/>
            
            </div>
            </div>

            <div className='details-container'>
                <div className='details-elements'>
            <h4>Contacts and Addresses</h4>
            {cname}<br/>
            {ctitle}<br/>
            {cemail}<br/><br/>

            </div>
            

            
            </div>
        </div>
    )
}

