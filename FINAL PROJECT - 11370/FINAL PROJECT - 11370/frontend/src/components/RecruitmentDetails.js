import React, {useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';
import "../nav.css"
import { Link,useParams } from 'react-router-dom';
import '../App.css';

export default function RecruitmentDetails() {
    // const [data, setData] = useState([]);
    const notify = () => toast.info("Recruitment Deleted");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [department,setDepartment]=useState('');
    const [degree,setDegree]=useState('');
    const [subject,setSubject]=useState('');
    const [appliedJob,setAppliedJob]=useState('');
    const [responsible,setResponsible]=useState('');
    const [appreciation,setAppreciation]=useState('');
    const [stage,setStage]=useState('');
    const [source,setSource]=useState('');
    const [expectedSalary,setExpectedSalary]=useState('');
    const [proposedSalary,setProposedSalary]=useState('');
    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/recruitment/`+tid)
                .then(res => {
                    console.log(res.data);
                    setId(res.data.id);
                    setName(res.data.name);
                    setSubject(res.data.subject);
                    setPhone(res.data.phone);
                    setMobile(res.data.mobile);
                    setEmail(res.data.degree);
                    setAppliedJob(res.data.appliedJob);
                    setDepartment(res.data.department);
                    setResponsible(res.data.responsible);
                    setAppreciation(res.data.appreciation);
                    setDegree(res.data.degree);
                    setSource(res.data.source);
                    setStage(res.data.stage);
                    setExpectedSalary(res.data.expectedSalary);
                    setProposedSalary(res.data.proposedSalary);
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
            <button type='button'><Link to={"/editRecruitment/"+tid} style={{ textDecoration:"none" }}>Edit</Link></button>&nbsp;&nbsp;
            <button type='button' onClick={()=>deleteCat(tid)}>Delete</button>
            <br/><br/>
            <ToastContainer />

            <h3>{subject}</h3><br/>
            <h4>{name}</h4><br/><br/>


            <div className='details-container'>
                <div className='details-elements'>
            
            Email: {email}<br/>
            Phone: {phone}<br/>
            Mobile: {mobile}<br/>
            Degree: {degree}<br/><br/>

            <h4>Job</h4>
            Applied Job: {appliedJob}<br/>
            Department: {department}<br/>

            </div>
            <br/>
            <br/>

            <div className='details-elements'>
            
            Stage: {stage}<br/>
            Responsible: {responsible}<br/>
            Appreciation: {appreciation}<br/>
            Source: {source}<br/><br/>
            
            <h4>Contract</h4>

            Expected Salary: {expectedSalary}<br/>
            Proposed Salary: {proposedSalary}<br/>

            </div>
            </div>
        </div>
    )
}

