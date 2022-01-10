import React, {useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';
import "../nav.css"
import { Link,useParams } from 'react-router-dom';
import '../App.css';

export default function About() {
    // const [data, setData] = useState([]);
    const notify = () => toast.info("Employee Deleted");
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [work_address,setWorkAddress]=useState('');
    const [work_phone,setWorkPhone]=useState('');
    const [work_mobile,setWorkMobile]=useState('');
    const [work_email,setWorkEmail]=useState('');
    const [dept,setDept]=useState('');
    const [title,setTitle]=useState('');
    const [manager,setManager]=useState('');
    const [coach,setCoach]=useState('');

    const [gender,setGender]=useState('');
    const [marital_status,setMaritalStatus]=useState('');
    const [nationality,setNationality]=useState('');
    const [id_no,setIdno]=useState('');
    const [passport_no,setPassno]=useState('');
    const [bank_ac,setBankac]=useState('');
    const [home_address,setHomeAdd]=useState('');
    const [birthdate,setBirthdate]=useState('');
    const {id:tid}=useParams();
    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/employee/`+tid)
                .then(res => {
                    console.log(res.data);
                    setId(res.data.id);
                    setName(res.data.name);
                    setWorkAddress(res.data.work_address);
                    setWorkPhone(res.data.work_phone);
                    setWorkMobile(res.data.work_mobile);
                    setWorkEmail(res.data.work_email);
                    setDept(res.data.dept);
                    setTitle(res.data.title);
                    setManager(res.data.manager);
                    setCoach(res.data.coach);
                    setGender(res.data.gender);
                    setMaritalStatus(res.data.marital_status);
                    setNationality(res.data.nationality);
                    setIdno(res.data.id_no);
                    setPassno(res.data.passport_no);
                    setBankac(res.data.bank_ac);
                    setHomeAdd(res.data.home_address);
                    setBirthdate(res.data.birthdate);
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
            <button type='button'><Link to={"/edit/"+tid} style={{ textDecoration:"none" }}>Edit</Link></button>&nbsp;&nbsp;
            <button type='button' onClick={()=>deleteCat(tid)}>Delete</button>
            <br/><br/>
            <ToastContainer />

            <h3>Name: {name}</h3><br/><br/>


            <div className='details-container'>
                <div className='details-elements'>
            <button type='button'>Public Information</button>
            

            <h4>Contact Information</h4>
            Working Address: {work_address}<br/>
            Work Mobile: {work_mobile}<br/>
            Work Email: {work_email}<br/>
            Work Phone: {work_phone}<br/>

            <h4>Position</h4>
            Department: {dept}<br/>
            Job Title: {title}<br/>
            Manager: {manager}<br/>
            Coach: {coach}<br/>

            </div>
            <br/>
            <br/>

            <div className='details-elements'>
            <button class="button button1">Personal Information</button>

            <h4>Citizenship and Other Information</h4>

            Nationality: {nationality}<br/>
            Identification No.: {id_no}<br/>
            Passport No.: {passport_no}<br/>
            Bank Account No.: {bank_ac}<br/>

            <h4>Status</h4>

            Gender: {gender}<br/>
            Marital Status: {marital_status}<br/>

            <h4>Contact Information</h4>
            Home Address: {home_address}<br/>

            <h4>Birth</h4>
            Date of Birth: {birthdate}<br/>
            </div>
            </div>
        </div>
    )
}

