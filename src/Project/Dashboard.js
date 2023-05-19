import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCard,MDBCol, MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,} from 'mdb-react-ui-kit';
// import ReactCardFlip from "react-card-flip";
import Search from "./Search";
import {Link} from "react-router-dom";
// import './Modal.css';
import logo from './images/llogo.png';
function Dashboard(){
  const [scrollableModal, setScrollableModal] = useState(false);
  const [login,setlogin]=useState(false)
  function sin()
    {  
      setlogin(true)
    }
    
    if(login)
    {return <Search/>}

	return (
        <MDBContainer fluid style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj2jNNB8Flgr1TvRwDr0MgcbWbU5GYQYTEkLI9SJJGwc14YmKGv_VAFLIEZrxsQogXu8&usqp=CAU')",
        height:'100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',}}>
                  <MDBRow >
                  <MDBCol className="mb-3">
                    <div >
                    <img src={logo} alt="Logo"/>
                    </div>
                    </MDBCol>
                    <MDBCol className='mb-6'>

                    </MDBCol>
                    <MDBCol className="mb-3">
                    <center >
                    <button type="submit" onClick={sin} style={{borderRadius:"5px",backgroundColor:"blue",color:"white",marginTop:'10px'}} id="btn"><Link to='/Search' style={{color:"white"}}>Back to Search</Link></button>
                    </center>
                    </MDBCol>
                </MDBRow>
       <MDBContainer>   
            <MDBRow className="mb-3">
              
           

            <MDBCol className=' text-white mb-4' >

<MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center'}}>
    <h3  style={{color:'black'}}>Coding</h3>
 
</MDBCard>

<>
<MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
<MDBModalDialog scrollable>
<MDBModalContent>
<MDBModalHeader>
<MDBModalTitle>Modal title</MDBModalTitle>
<MDBBtn
className='btn-close'
color='none'
onClick={() => setScrollableModal(!scrollableModal)}
></MDBBtn>
</MDBModalHeader>
<MDBModalBody>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>

</MDBModalBody>
<MDBModalFooter>
<MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
Close
</MDBBtn>

</MDBModalFooter>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>
</>
</MDBCol>
                <MDBCol className=' mb-4' >

                <MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center'}}>
                     <h3 >Coding</h3>
                  
                 </MDBCard>

                 <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal}  tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className='btn-close'
           
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p id="text">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
             
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
                </MDBCol>
                <MDBCol className=' text-white mb-4' >

<MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center'}} >
    <h3  style={{color:'black'}}>Coding</h3>
 
</MDBCard>

<>
<MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
<MDBModalDialog scrollable>
<MDBModalContent>
<MDBModalHeader>
<MDBModalTitle>Modal title</MDBModalTitle>
<MDBBtn
className='btn-close'
color='none'
onClick={() => setScrollableModal(!scrollableModal)}
></MDBBtn>
</MDBModalHeader>
<MDBModalBody>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>

</MDBModalBody>
<MDBModalFooter>
<MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
Close
</MDBBtn>
<MDBBtn>Save changes</MDBBtn>
</MDBModalFooter>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>
</>
</MDBCol>
         </MDBRow>
<MDBRow>
          <MDBCol className=' text-white mb-4' >
       
                <MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center',}}>
                     <h3 style={{color:'black'}}>Coding</h3>                 
                 </MDBCard>
                 <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
             
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
             </MDBCol>

                <MDBCol className=' text-white mb-4' >

                 <MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center'}} >
                     <h3  style={{color:'black'}}>Coding</h3>
                  
                 </MDBCard>

                 <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
             
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
                </MDBCol>
                <MDBCol className=' text-white mb-4' >

<MDBCard className='col-sm-12' style={{backgroundImage:'linear-gradient(blue,lightblue)',alignItems:"center",display:'flex',height:150,color:'#fff',justifyContent:'center'}} >
    <h3  style={{color:'black'}}>Coding</h3>
 
</MDBCard>

<>
<MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="col-sm-12">LAUNCH DEMO MODAL</MDBBtn>

<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
<MDBModalDialog scrollable>
<MDBModalContent>
<MDBModalHeader>
<MDBModalTitle>Modal title</MDBModalTitle>
<MDBBtn
className='btn-close'
color='none'
onClick={() => setScrollableModal(!scrollableModal)}
></MDBBtn>
</MDBModalHeader>
<MDBModalBody>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>

</MDBModalBody>
<MDBModalFooter>
<MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
Close
</MDBBtn>
<MDBBtn>Save changes</MDBBtn>
</MDBModalFooter>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>
</>
</MDBCol>
         </MDBRow>
       </MDBContainer>   
    </MDBContainer>
	);
}
export default Dashboard;