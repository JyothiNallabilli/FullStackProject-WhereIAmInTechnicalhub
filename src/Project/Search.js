import React, {useState } from "react";
import llogo from "./images/llogo.png";
import face from "./images/face.jpg";
import Rooms from "./Rooms";
import Dashboard from "./Dashboard";
import SigninPage from "./SigninPage";
import { MDBContainer,MDBRow,MDBCol} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

let data=[
    {
        id:"20mh1a0546",
       Name:"lalitha",
        course_name:"FSD",
        Room_no:"5 th Floor hall 2"
    },
    {
        id:"20mh1a0540",
        Name:"Jyothi",
         course_name:"Google cloud",
         Room_no:"3 th Floor bay 2"
    },
    {
        id:"20mh1a0545",
        Name:"Vamsi",
         course_name:"Azure",
         Room_no:"3 rd Floor bay 3"
    },
    {
        id:"20mh1a0548",
        Name:"surya",
         course_name:"TSE",
         Room_no:"3 rd Floor bay 4"
    }
   ]

function Search(){
    // const [fun, setFun] = useState(' ')
    const [name, setName] = useState(' ')
    const [fnd, setFnd] = useState(false)
    const [studendata, setStudentdata] = useState([ ])
    // const handlechange = (e) =>{
    //     setFun({...fun, [e.target.name]:e.target.value})
    // }
    


    let username="User name";
//    function Academicdetails(){

//    }
   let f={};
   const studentdata = (e) =>{
    e.preventDefault()
    console.log(name)
    // setFun({...fun, [e.target.name]:e.target.value})
    // console.log(fun)
        f=data.find(function(ele){
            if(ele.id===name)
                return ele;    
        })
        if(typeof(f)=="undefined")
        {
            
            setStudentdata([]);
            setFnd(true)
            document.getElementById("details").style.display="none";
        }
        else{
            setFnd(false)
            setStudentdata([f]);
            document.getElementById("details").style.display="inline-block";

        }
        console.log(f);
   }
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
   {return <Rooms/>}
   if(log)
   {return <SigninPage/>}
   if(logs)
   {return <Dashboard/>}

    return (

    <div class="comtainerfluid"
    style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/624878906/photo/triangular-abstract-background.jpg?s=170667a&w=0&k=20&c=VnsiNjJzorBBzZYJdxbUpOZT-pJnLoVaaPHnxths0Bg=")',
      height:'100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
  
      }}>
        <MDBContainer>
        <MDBRow>
        <MDBCol sm='2'>
            <div id="llogo">
            <img src={llogo} alt="Logo"/>
       </div>
            </MDBCol>
            <MDBCol sm='9'></MDBCol>
        <MDBCol sm='1'style={{marginTop:"10px"}}>
            <button onClick={pin}className="btn btn-danger"><Link to='/SigninPage' style={{color:'white'}}>Logout</Link></button>
        </MDBCol>
        </MDBRow>
        <MDBRow >
        <MDBCol xs='12'>
            <br/>
            <h1 style={{font: "sans-serif",fontSize:"50px",marginBottom:"0px",textAlign:"center",color:"black"}}><i class="fa fa-user"></i>Hello {username}...</h1>
            <br/>
        </MDBCol>
       </MDBRow>
       <MDBRow className="mb-3" style={{marginTop:"50px"}}>
        <MDBCol md='4'style={{backgroundColor:'white',textAlign:"center",height:"350px",borderRadius:'20px'}} >
          <p style={{marginTop:"50px"}}>Search pupil</p>
          <p>Enter the id of the student</p>
          <form onSubmit={studentdata}>
          <input type="text" style={{borderRadius:"5px"}} id="name" name="name" onChange={(e) =>setName(e.target.value)}/>
          <br/>
          <br/>
          <button type="submit" style={{borderRadius:"5px",backgroundColor:"rgb(98, 98, 243)",color:"white"}}
          id="btn" >SEARCH</button>
          <br></br>
          <br></br>
            <button onClick={sin} type="submit" style={{borderRadius:"5px",backgroundColor:"green",color:"white"}} id="btn"><i class="fa fa-info-circle"></i><Link to='/Rooms' style={{color:"white"}}>Room Details</Link></button>
          <br></br>
          <br></br>
        </form>
        </MDBCol>
        <br></br>
        <MDBCol classname="mb-8" style={{backgroundColor:'white',textAlign:"center",height:"350px",borderRadius:'20px',marginLeft:'20px'}}>
        <MDBRow>
            <MDBCol md='1'></MDBCol>
        <MDBCol md='3'style={{textAlign:"center"}}>
            <br/>
            <br/>
          <img src={face} style={{borderRadius:"50%",height:"250px",width:"250px",marginBottom:"50px"}} alt="Logo"/>
        </MDBCol>
        <MDBCol md='1'></MDBCol>
        <MDBCol md='4'>  
          <div style={{ align:'center',marginTop:"90px",color:'black',fontFamily:'reverse',fontSize:'15px'}}> 
            {fnd ? 'Data Not found' : ''}
        {
            studendata.map((ele,i)=>{
                return(
                    <div key={i}>
                        <p><b>Student ID  : </b>{ele.id}</p>
                        <p><b>Name        : </b>{ele.Name}</p>
                        <p><b>Course      : </b>{ele.course_name}</p>
                        <p><b>Location    : </b>{ele.Room_no}</p>
                    </div>
                )
            })
        }
        <button onClick={tin} id="details" style={{display:"none",borderRadius:"5px",backgroundColor:"blue",color:"white",justifyContent:"right"}}><i class="fa fa-info-circle"></i><Link to='/Dashboard' style={{color:"white"}}>More Details</Link></button>
        
    </div>
    
        <p id="id1"  style={{marginTop:"100px"}}></p>
   
    </MDBCol> 
    </MDBRow>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
    );
   
};
export default Search;