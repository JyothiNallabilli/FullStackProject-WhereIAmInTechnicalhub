import React from 'react';
import llogo from './images/llogo.png';
import Trainers from './Trainers';
import Students from './Students';
import Home from './Home';
import login from './images/login.png'
// import Search from './Search';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBFooter
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
function SigninPage() {
  const [login,setlogin]=useState(false)
  const [log,setlog]=useState(false)
  const [logs,setlogs]=useState(false)
  function sin()
    {  
      setlogin(true)
    }
    function pin()
    {  
      setlog(true)
    }
    function tin()
    {  
      setlogs(true)
    }
    
    if(login)
    {return <Trainers/>}
    if(log)
    {return <Students/>}
    if(logs)
    {return <Home/>}
    
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
        </MDBRow>
        <MDBRow>

        </MDBRow>
        <MDBRow>
           <MDBCol sm='12' style={{marginTop:'2cm'}}>
           <center>
            <i class="fa-solid fa-user fa-7x center"></i>
       </center>
            
           </MDBCol> 
        </MDBRow>
<MDBRow>
    <MDBCol sm='3'>

    </MDBCol>
        <MDBCol sm='6'
        style={{
          marginTop:'1cm'
        }}>

        <center style={{justifyContent:'center'}}>
            <MDBBtn onClick={sin} className="mb-4 px-5 mx-5 w-50" color='success' size='lg'><Link to='/Trainers' style={{color:"white"}}>Trainer Login</Link></MDBBtn>
            <MDBBtn onClick={pin} className="mb-4 px-5 mx-5 w-50" color='primary' size='lg'><Link to='/Students'style={{color:"white"}}>Student Login</Link></MDBBtn>
            </center>  
            <br></br>
            <br></br>
            <center style={{justifyContent:'center'}}>
            <MDBBtn onClick={tin} className="mb-4 px-5 mx-5 w-25" color='success' size='lg'><Link to='/' style={{color:"white"}}>Back</Link></MDBBtn>
            </center>   


        </MDBCol>

      </MDBRow>

    </MDBContainer>
    
  );
}

export default SigninPage;