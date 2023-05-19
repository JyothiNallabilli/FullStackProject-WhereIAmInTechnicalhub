import React from 'react';
import llogo from './images/llogo.png';
import { Link } from 'react-router-dom';
import './Homestyle.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';
import SigninPage from './SigninPage';
import { useState } from 'react';

function Home() {

  const [login,setlogin]=useState(false)


    function sin()
    {  
      setlogin(true)
    }
    if(login)
    {return <SigninPage/>}
  return (
    <MDBContainer fluid
    style={{
      backgroundImage: 'url("https://images.pling.com/img/00/00/61/57/57/1549487/577c4dc30402a8dfa3915867a59e64a89b7b723b9ac219fd677bdd0415563d4f084f.jpg")',
      height:'100vh',
      width:'100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment:'fixed'

    }}>
      <MDBRow>
        <MDBCol md='3'></MDBCol>
        <MDBCol md='6'>
        
          <div id="llogo"
           style={{
            marginTop:'250px',
            display:'flex',
            justifyContent:'center'
           }}>
           <img style={{height:150}}src={llogo}  alt="Logo"/> 
       </div>

       <MDBCol md='3'>
       </MDBCol>
        </MDBCol>

      </MDBRow>
      <MDBRow>
      <MDBCol md='3'></MDBCol>
      <MDBCol md='6'>
      <center style={{justifyContent:'center'}}>
            <MDBBtn onClick={sin} className="mb-4 px-5 mx-5 w-25" color='success' size='sm'><Link to='/' style={{color:"white"}}>Explore Us</Link></MDBBtn>
            </center> 
      </MDBCol>
      <MDBCol md='3'></MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Home;