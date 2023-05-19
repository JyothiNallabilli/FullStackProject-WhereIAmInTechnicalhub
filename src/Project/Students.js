import React, { useEffect } from 'react';
import llogo from './images/llogo.png';
import Search from './Search';
import SigninPage from './SigninPage';

import axios from 'axios';

import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useState } from 'react'; 
function Students() {
    const [login,setlogin]=useState(false);
    const [log,setlog]=useState(false);
    const [data,setData] = useState([]);
    const [id,setid]=useState('');
    const [pwd,setpwd]=useState('');
  useEffect(()=>{
    axios.get("http://localhost:3334/getData").then((err,res)=>{
      if(err){
        console.log(err);
      } 
      else{
        setData(res.data);
        
      }
    })
  },[]);

   
    const database = [
      {
        username: "jyothi",
        password: "jyo123",
      },
      {
        username: "lallitha",
        password: "lalli123",
      },
      {
        username: "vamsi",
        password: "vamsi123",
      },
      {
        username: "surya",
        password: "surya123",
      }
    ];
 
    const Logindata = (e) =>{
      e.preventDefault()
      // k.preventDefault()
      console.log(id)
      console.log(pwd)
         let f=database.find(function(ele){
              if(ele.username===id && ele.password==pwd){
                return ele
              }
          })
          if(f)
          setlogin(true)
          else{
            document.getElementById('error').innerHTML='Enter valid details';
            document.getElementById('error').style.color='red';

          }

     }
     function sin(){
      setlog(true);
     }
      if(login)
            {return <Search/>}
      if(log)
      {return <SigninPage/>}
      
  return (
    <MDBContainer fluid
    style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/624878906/photo/triangular-abstract-background.jpg?s=170667a&w=0&k=20&c=VnsiNjJzorBBzZYJdxbUpOZT-pJnLoVaaPHnxths0Bg=")',
      height:'100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    }}>
      <MDBRow>
        <MDBCol sm='3'>
        <div id="llogo">
            <img src={llogo} alt="Logo"/>
       </div>
        </MDBCol>

        <MDBCol sm='6'
        style={{
          marginTop:'3cm'
        }}>

<div>
            <h2  style={{textAlign:'center',color:'black',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Trainee's Login</h2>
          </div>

          <center> <p id="error"></p></center>
          <div className='col-sm-12' style={{justifyContent:'center',marginTop:'60px'}}>
          <form onSubmit={Logindata}>
                  <center><input className="form-control" type='text' name="id" label='User ID' placeholder='User ID' onChange={(e) =>setid(e.target.value)} style={{borderRadius:'10px',width:'500px',height:'50px'
                  }}/></center>
                  <br/>
                 <center><input className="form-control" type='password' name="pwd" placeholder='Password' size='md' onChange={(e) =>setpwd(e.target.value)} style={{borderRadius:'10px',width:'500px',height:'50px'
                  }}/></center>
                  <br/>           
                  <center><button type='submit' className='bg-success'style={{padding:'5px',width:'200px',borderRadius:'10px',marginTop:'20px'}}>Login</button></center>
                  <br/>
                <center>  <button onClick={sin}className='bg-danger'style={{padding:'5px',width:'150px',borderRadius:'15px'}}><Link to='/SigninPage' style={{color:'white'}}>Back</Link></button></center>
          </form>
            <br></br>
            <br></br>
           
          </div>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
      }


export default Students;