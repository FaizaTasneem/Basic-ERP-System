import React,{useEffect,useState} from 'react'
import "../nav.css"
import '../App.css';
import {useParams} from 'react-router-dom';
import base_url from './api'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function EditRecruitment() {
    const notify = () => toast.success("Recruitment Updated Successfully");
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
                    setSource(res.data.source);
                    setStage(res.data.stage);
                    setExpectedSalary(res.data.expectedSalary);
                    setProposedSalary(res.data.proposedSalary);
                    
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
                'subject':subject,
                'phone':phone,
                'mobile':mobile,
                'email':email,
                'department':department,
                'degree':degree,
                'appliedJob':appliedJob,
                'source':source,
                'stage':stage,
                'responsible':responsible,
                'appreciation':appreciation,
                'expectedSalary':expectedSalary,
                'proposedSalary':proposedSalary,
                
              };
              axios
              .put(`${base_url}/recruitment`, data)
              .then((response) => {
            setId("");
            setName("");
            setMobile("");
            setPhone("");
            setEmail("");
            setSubject("");
            setDepartment("");
            setDegree("");
            setExpectedSalary("");
            setProposedSalary("");
            setSource("");
            setStage("");
            setResponsible("");
            setAppreciation("");
            setAppliedJob("");
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

            <label for="fname" style={{ fontSize:"20px"}}>Subject/Application Name</label>
            <input type="text" id="fname" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />


            <label for="fname" style={{ fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)} />

            
            <div className='formcontainer'>

            <div className='formelem'>

            <label for="fname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="fname" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Phone</label>
            <input type="text" id="lname" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Mobile</label>
            <input type="text" id="lname" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Degree</label>
            <select onChange={(e)=>setDegree(e.target.value)}>
            <option value=''></option>
              <option value='Graduate'>Graduate</option>
              <option value='Bachelor Degree'>Bachelor Degree</option>
              <option value='Master Degree'>Master Degree</option>
              <option value='Doctoral Degree'>Doctoral Degree</option>
            </select>

            </div>
            
            <div className='formelem'>
            
            <label for="lname" style={{ fontSize:"20px"}}>Stage</label>
            <select onChange={(e)=>setStage(e.target.value)}>
            <option value=''></option>
              <option value='Initial Qualification'>Initial Qualification</option>
              <option value='First Interview'>First Interview</option>
              <option value='Second Interview'>Second Interview</option>
              <option value='Contract Proposal'>Contract Proposal</option>
              <option value='Contract Signed'>Contract Signed</option>
            </select>

            
            <label for="lname" style={{ fontSize:"20px"}}>Responsible</label>
            <select onChange={(e)=>setResponsible(e.target.value)}>
            <option value=''></option>
              <option value='Administrator'>Administrator</option>
              <option value='Demo Portal User'>Demo Portal User</option>
              <option value='Demo User'>Demo User</option>
            </select>

            <label for="fname" style={{ fontSize:"20px"}}>Appreciation</label>
            <select onChange={(e)=>setAppreciation(e.target.value)}>
            <option value=''></option>
              <option value='Normal'>Normal</option>
              <option value='Good'>Good</option>
              <option value='Very Good'>Very Good</option>
            </select>

            <label for="lname" style={{ fontSize:"20px"}}>Source</label>
            <select onChange={(e)=>setSource(e.target.value)}>
            <option value=''></option>
              <option value='Facebook'>Facebook</option>
              <option value='Twitter'>Twitter</option>
              <option value='Newsletter'>Newsletter</option>
              <option value='Mailing Partner'>Mailing Partner</option>
              <option value='Search Engine'>Search Engine</option>
            </select>

            
            </div>
            </div>
            
            <br/>
            <br/>
            <br/>
            
            <div className='formcontainer'>
            <div className='formelem'>
            
            <label for="lname" style={{ fontSize:"20px"}}>Department</label>
            <select onChange={(e)=>setDepartment(e.target.value)}>
            <option value=''></option>
              <option value='Administration'>Administration</option>
              <option value='Management'>Management</option>
              <option value='Professional Services'>Professional Services</option>
              <option value='Research and Development'>Research and Development</option>
              <option value='Sales'>Sales</option>
            </select>

            <label for="lname" style={{ fontSize:"20px"}}>Applied Job</label>
            <select onChange={(e)=>setAppliedJob(e.target.value)}>
            <option value=''></option>
              <option value='Chief Executive Officer'>Chief Executive Officer</option>
              <option value='Chief Technical Officer'>Chief Technical Officer</option>
              <option value='Consultant'>Consultant</option>
              <option value='Experienced Developer'>Experienced Developer</option>
              <option value='Human Resources Manager'>Human Resources Manager</option>
              <option value='Marketing and Community Manager'>Marketing and Community Manager</option>
              <option value='Trainee'>Trainee</option>
            </select>
            </div>
            

            <div className='formelem'>
            
            <label for="lname" style={{ fontSize:"20px"}}>Expected Salary</label>
            <input type="text" id="lname" name="expectedSalary" value={expectedSalary} onChange={(e)=>setExpectedSalary(e.target.value)}/>
            
            <label for="lname" style={{ fontSize:"20px"}}>Proposed Salary</label>
            <input type="text" id="lname" name="proposedSalary" value={proposedSalary} onChange={(e)=>setProposedSalary(e.target.value)}/>
            
            </div></div>
            </form>
        </div>
    )
}
