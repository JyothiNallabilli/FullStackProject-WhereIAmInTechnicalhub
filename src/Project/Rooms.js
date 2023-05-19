import React, { useState } from "react";
import {MDBContainer,MDBCard,MDBRow,MDBCol, MDBCardTitle} from "mdb-react-ui-kit";
import ReactCardFlip from "react-card-flip";
import Search from "./Search";
import green from './images/llogo.png';
import { Link } from "react-router-dom";

let data=[{
    id:'5.1',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'2.2',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'3.2.1',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'3.2.2',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'3.2.3',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'3.2.4',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'4.1',
    trainer:['Bharat','Siddik'],
    intern:['Nani'],
    course:'Apptitude'
},
{
    id:'3.2.5',
    trainer:['Ashok'],
    intern:['vikas','Rama reddy'],
    course:'TSE'
},
{
    id:'2.1',
    trainer:['JDP','SIM'],
    intern:['Sekar'],
    course:'MERN'
},
{
    id:'5.2',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
},
{
    id:'4.2',
    trainer:['NDP','SIM'],
    intern:['DSP','Usha'],
    course:'FSD'
}
]
function Rooms(){
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipacademy,setIsFlipacademy]=useState(false);
    const [isFlipbadges,setIsFlipbadges]=useState(false);
    const [isFlipcert,setIsFlipcert]=useState(false);
    const [isflipattend,setIsFlipattend]=useState(false);
    const [isflipinter,setIsFlipinter]=useState(false);
    const [isflipattends,setIsFlipattends]=useState(false);
    const [isflipinters,setIsFlipinters]=useState(false);
    const [isFlipacademys,setIsFlipacademys]=useState(false);
    const [isFlipbadgess,setIsFlipbadgess]=useState(false);
    const [isFlipcerts,setIsFlipcerts]=useState(false);
    const [isFlippeds, setIsFlippeds] = useState(false);
    const [room ,setnumber]=useState([]);
    function Roomnumber(vr){
        let f=[];
        f=data.find(function(ele,i,arr){
            if(ele.id==vr)
                return ele;    
        })
        setnumber([f]);
        }
        const [login,setlogin]=useState(false)
  function sin()
    {  
      setlogin(true)
    }
    
    if(login)
    {return <Search/>}
    
  return (
    <MDBContainer fluid 

            style={{
              backgroundImage: 'url("https://img.freepik.com/premium-vector/modern-blue-white-wave-abstract-technology-background-vector-illustration-design_29865-4589.jpg")',
              height:'100vh',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}>
               <MDBRow >
                <MDBCol className="mb-3">
                    <div >
                    <img src={green} alt="Logo"/>
                    </div>
                    </MDBCol>
                    <MDBCol className='mb-6'>

                    </MDBCol>
                    <MDBCol className="mb-3">
                    <center >
                    <button type="submit" onClick={sin} style={{borderRadius:"5px",backgroundColor:"blue",color:"white",marginTop:'10px'}} id="btn"><Link to='/Search'  style={{color:"white"}}>Back to Search</Link></button>
                    </center>
                    </MDBCol>
                </MDBRow>

<MDBRow style={{marginTop:'50px'}}>




{/* 2.1 */}
<MDBCol className='text-white mb-3' >
    <ReactCardFlip isFlipped={isFlipped} flipdirection="vertical">
      
            <MDBCard background="warning"
                style={{
                display:'flex',
                height: 150,
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                }} onClick={()=>setIsFlipped(!isFlipped)}>  
                <MDBCardTitle>2nd Floor Hall-1</MDBCardTitle>
            </MDBCard>
      
      
        <MDBCard
            style={{
                backgroundColor:'GrayText',
            height: 150,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }} onMouseOut={()=>setIsFlipped(!isFlipped)}>
            <MDBCardTitle style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
            {
                room.map((ele,i)=>{
                    return( 
                        <div key={i}>
                            <p><b>Trainer  : </b>{ele.trainer}</p>
                            <p><b>interns  : </b>{ele.intern}</p>
                            <p><b>course   : </b>{ele.course}</p>
                        </div>
                        
                    )
                })
            }
            </MDBCardTitle>
        </MDBCard>
 
 </ReactCardFlip>
 </MDBCol>



{/* 2.2 */}

 <MDBCol className='text-white mb-3'>
 <ReactCardFlip isFlipped={isFlipacademy} flipdirection="vertical" >
    <MDBCard>
        <MDBCard background="info"
        style={{
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipacademy(!isFlipacademy)}>
         
       <MDBCardTitle>2nd Floor Hall-2</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard flipdirection="vertical">
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipacademy(!isFlipacademy);Roomnumber("2.2")}}>
    
       <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
        {
            room.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Trainer  : </b>{ele.trainer}</p>
                        <p><b>interns  : </b>{ele.intern}</p>
                        <p><b>course   : </b>{ele.course}</p>
                     </div>
                )
            })
        }
        </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isFlipbadges} flipdirection="vertical">
    <MDBCard >
        <MDBCard
        style={{
          backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipbadges(!isFlipbadges)}>
        <MDBCardTitle>3rd Floor Bay-1</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipbadges(!isFlipbadges);Roomnumber('3.2.1')}}
      >
       
       <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
        {
            room.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Trainer  : </b>{ele.trainer}</p>
                        <p><b>interns  : </b>{ele.intern}</p>
                        <p><b>course   : </b>{ele.course}</p>
                    </div>
                )
            })
        }
        </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isFlipcert} flipdirection="vertical">
    <MDBCard >
        <MDBCard background="danger"
        style={{
          //backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipcert(!isFlipcert)}
      >
        <MDBCardTitle>3rd Floor Bay-2</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipcert(!isFlipcert);Roomnumber('3.2.2')}}
      >
        <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
        {
            room.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Trainer  : </b>{ele.trainer}</p>
                        <p><b>interns  : </b>{ele.intern}</p>
                        <p><b>course   : </b>{ele.course}</p>
                    </div>
                )
            })
        }
        </div>
        </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 </MDBRow>
 <MDBRow>
<MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isflipattend} flipdirection="vertical">
    <MDBCard >
        <MDBCard background="warning"
        style={{
         // backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipattend(!isflipattend)}
      >
        <MDBCardTitle>3rd Floor Bay-3</MDBCardTitle>
        
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipattend(!isflipattend);Roomnumber('3.2.3')}}
      >
        <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
        {
            room.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Trainer  : </b>{ele.trainer}</p>
                        <p><b>interns  : </b>{ele.intern}</p>
                        <p><b>course   : </b>{ele.course}</p>
                    </div>
                )
            })
        }
        </div>
       
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
 <ReactCardFlip isFlipped={isflipinter} flipdirection="vertical" >
    <MDBCard >
        <MDBCard background="info"
        style={{
         // backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipinter(!isflipinter)}
      >
        <MDBCardTitle>3rd Floor Bay-4</MDBCardTitle>
        
      </MDBCard>
      </MDBCard>
      <MDBCard flipdirection="vertical">
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipinter(!isflipinter);Roomnumber('3.2.4')}}
      >
        <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
        {
            room.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Trainer  : </b>{ele.trainer}</p>
                        <p><b>interns  : </b>{ele.intern}</p>
                        <p><b>course   : </b>{ele.course}</p>
                    </div>
                )
            })
        }
        </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isflipattends} flipdirection="vertical">
    <MDBCard >
        <MDBCard
        style={{
          backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipattends(!isflipattends)}
      >
        <MDBCardTitle>3rd Floor Bay-5</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipattends(!isflipattends);Roomnumber('3.2.5')}}
        >
          <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
          {
              room.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <p><b>Trainer  : </b>{ele.trainer}</p>
                          <p><b>interns  : </b>{ele.intern}</p>
                          <p><b>course   : </b>{ele.course}</p>
                      </div>
                  )
              })
          }
          </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isflipinters} flipdirection="vertical">
    <MDBCard >
        <MDBCard background="danger"
        style={{
         // backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipinters(!isflipinters)}
      >
       <MDBCardTitle>4th Floor Hall-1</MDBCardTitle>
        
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipinters(!isflipinters);Roomnumber('4.1')}}
        >
          <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
          {
              room.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <p><b>Trainer  : </b>{ele.trainer}</p>
                          <p><b>interns  : </b>{ele.intern}</p>
                          <p><b>course   : </b>{ele.course}</p>
                      </div>
                  )
              })
          }
          </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 </MDBRow>
 <MDBRow>
<MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isFlipacademys} flipdirection="vertical">
    <MDBCard >
        <MDBCard background="warning"
        style={{
         // backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipacademys(!isFlipacademy)}
      >
        <MDBCardTitle>4th Floor Hall-2</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipacademys(!isFlipacademy);Roomnumber('4.2')}}
        >
          <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
          {
              room.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <p><b>Trainer  : </b>{ele.trainer}</p>
                          <p><b>interns  : </b>{ele.intern}</p>
                          <p><b>course   : </b>{ele.course}</p>
                      </div>
                  )
              })
          }
          </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
 <ReactCardFlip isFlipped={isFlipcerts}  >
    <MDBCard >
        <MDBCard background="info"
        style={{
         // backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipcerts(!isFlipcerts)}
      >
        <MDBCardTitle>5th Floor Hall-1</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard flipdirection="vertical">
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() =>{ setIsFlipcerts(!isFlipcerts);Roomnumber('5.1')}}
        >
          <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
          {
              room.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <p><b>Trainer  : </b>{ele.trainer}</p>
                          <p><b>interns  : </b>{ele.intern}</p>
                          <p><b>course   : </b>{ele.course}</p>
                      </div>
                  )
              })
          }
          </div>
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
    <ReactCardFlip isFlipped={isFlipbadgess} flipdirection="vertical">
    <MDBCard >
        <MDBCard
        style={{
          backgroundColor: "green",
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlipbadgess(!isFlipbadgess)}
      >
        <MDBCardTitle>5th Floor Hall-2</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => {setIsFlipbadgess(!isFlipbadgess);Roomnumber('5.2')}}>
          <div style={{ align:'center',color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
          {
              room.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <p><b>Trainer  : </b>{ele.trainer}</p>
                          <p><b>interns  : </b>{ele.intern}</p>
                          <p><b>course   : </b>{ele.course}</p>
                      </div>
                  )
              })
          }
          </div>  
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 <MDBCol className='text-white mb-3'>
 <ReactCardFlip isFlipped={isFlippeds} flipdirection="vertical">
    <MDBCard >
        <MDBCard background='primary'
        style={{
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onClick={() => setIsFlippeds(!isFlippeds)}
      >
        <MDBCardTitle>OFFICE</MDBCardTitle>
      </MDBCard>
      </MDBCard>
      <MDBCard>
      <MDBCard 
        style={{
            backgroundColor:'GrayText',
          height: 150,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}onMouseOut={() => setIsFlippeds(!isFlippeds)}
      >
        Create video tutorials on YouTube
       
      </MDBCard>
 </MDBCard>
 </ReactCardFlip>
 </MDBCol>
 </MDBRow>
    </MDBContainer>
  );
};

// ReactDOM.render(<CardFlip />, document.querySelector("#root"));
export default Rooms;