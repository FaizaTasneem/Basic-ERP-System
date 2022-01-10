import React,{useState} from 'react'
import "../nav.css"
import '../App.css'
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';

export default function AddEmployee() {
    const notify = () => toast.success("Employee added successfully");
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
    
    async function tagSubmit(e){
            e.preventDefault();
            const data = {
                'id':id,
                'name':name,
                'work_address':work_address,
                'work_phone':work_phone,
                'work_mobile':work_mobile,
                'work_email':work_email,
                'dept':dept,
                'title':title,
                'manager':manager,
                'coach':coach,
                'gender':gender,
                'marital_status':marital_status,
                'nationality':nationality,
                'id_no':id_no,
                'passport_no':passport_no,
                'bank_ac':bank_ac,
                'home_address':home_address,
                'birthdate':birthdate


            };

            axios.post(`${base_url}/employee`, data)
          .then((response) => {
            setId("");
            setName("");
            setWorkAddress("");
            setWorkPhone("");
            setWorkMobile("");
            setWorkEmail("");
            setDept("");
            setTitle("");
            setManager("");
            setCoach("");
            setGender("");
            setMaritalStatus("");
            setNationality("");
            setIdno("");
            setPassno("");
            setBankac("");
            setHomeAdd("");
            setBirthdate("");

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
            
            <h1>Public Information</h1>
            
            <div className='formcontainer'>
            <div className='formelem'>

            <h3>Contact Information</h3>

            <label for="fname" style={{ fontSize:"20px"}}>Id</label>
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} />

            <label for="fname" style={{ fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            
            <label for="fname" style={{ fontSize:"20px"}}>Work Address</label>
            <input type="text" id="fname" name="work_address" value={work_address} onChange={(e)=>setWorkAddress(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Work Phone</label>
            <input type="text" id="lname" name="work_phone" value={work_phone} onChange={(e)=>setWorkPhone(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Work Mobile</label>
            <input type="text" id="lname" name="work_mobile" value={work_mobile} onChange={(e)=>setWorkMobile(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Work Email</label>
            <input type="text" id="lname" name="work_email" value={work_email} onChange={(e)=>setWorkEmail(e.target.value)}/>
            </div>
            
            <div className='formelem'>
            <h3>Position</h3>
            <label for="lname" style={{ fontSize:"20px"}}>Department</label>
            {/* <input type="text" id="lname" name="dept" value={dept} onChange={(e)=>setDept(e.target.value)}/> */}
            <select onChange={(e)=>setDept(e.target.value)}>
            <option value=''></option>
              <option value='Administration'>Administration</option>
              <option value='Management'>Management</option>
              <option value='Professional Services'>Professional Services</option>
              <option value='Research and Development'>Research and Development</option>
              <option value='Sales'>Sales</option>
            </select>

            <label for="lname" style={{ fontSize:"20px"}}>Job Title</label>
            {/* <input type="text" id="lname" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
            <select onChange={(e)=>setTitle(e.target.value)}>
            <option value=''></option>
              <option value='Chief Executive Officer'>Chief Executive Officer</option>
              <option value='Chief Technical Officer'>Chief Technical Officer</option>
              <option value='Consultant'>Consultant</option>
              <option value='Experienced Developer'>Experienced Developer</option>
              <option value='Human Resources Manager'>Human Resources Manager</option>
              <option value='Marketing and Community Manager'>Marketing and Community Manager</option>
              <option value='Trainee'>Trainee</option>
            </select>


            <label for="lname" style={{ fontSize:"20px"}}>Manager</label>
            {/* <input type="text" id="lname" name="manager" value={manager} onChange={(e)=>setManager(e.target.value)}/> */}
            <select onChange={(e)=>setManager(e.target.value)}>
            <option value=''></option>
              <option value='Christopher Columbus'>Christopher Columbus</option>
              <option value='Mike Newell'>Mike Newell</option>
              <option value='David Yates'>David Yates</option>
              <option value='Alfonso Cuoron'>Alfonso Cuoron</option>
            </select>

            <label for="lname" style={{ fontSize:"20px"}}>Coach</label>
            {/* <input type="text" id="lname" name="coach" value={coach} onChange={(e)=>setCoach(e.target.value)}/><br/><br/> */}
            <select onChange={(e)=>setCoach(e.target.value)}>
            <option value=''></option>
              <option value='Christopher Columbus'>Christopher Columbus</option>
              <option value='Mike Newell'>Mike Newell</option>
              <option value='David Yates'>David Yates</option>
              <option value='Alfonso Cuoron'>Alfonso Cuoron</option>
            </select>

            
            </div>
            </div>
            
            <br/>
            <br/>
            <br/>
            <h1>Private Information</h1>

            <div className='formcontainer'>
            <div className='formelem'>
            <h3>Status</h3>
            <label for="lname" style={{ fontSize:"20px"}}>Gender</label>
            <input type="text" id="lname" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Marital Status</label>
            <input type="text" id="lname" name="marital_status" value={marital_status} onChange={(e)=>setMaritalStatus(e.target.value)}/>

            <h3>Citizenship and other Information</h3>
            <label for="lname" style={{ fontSize:"20px"}}>Nationality</label>
            <input type="text" id="lname" name="nationality" value={nationality} onChange={(e)=>setNationality(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>ID number</label>
            <input type="text" id="lname" name="id_no" value={id_no} onChange={(e)=>setIdno(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Passport number</label>
            <input type="text" id="lname" name="passport_no" value={passport_no} onChange={(e)=>setPassno(e.target.value)}/>

            <label for="lname" style={{ fontSize:"20px"}}>Bank Account Number</label>
            <input type="text" id="lname" name="bank_ac" value={bank_ac} onChange={(e)=>setBankac(e.target.value)}/>
            </div>
            

            <div className='formelem'>
            <h3>Contact Information</h3>
            <label for="lname" style={{ fontSize:"20px"}}>Home Address</label>
            <input type="text" id="lname" name="home_address" value={home_address} onChange={(e)=>setHomeAdd(e.target.value)}/>
            <h3>Birth</h3>
            <label for="lname" style={{ fontSize:"20px"}}>Birthdate</label>
            <input type="text" id="lname" name="birthdate" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
            
            </div></div>

            
            
            </form>
        </div>
    )
}
