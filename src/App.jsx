import { useState } from 'react'
import './App.css'
import * as React from 'react';
import { MenuItem,TextField,Stack, Button, FormControl,  InputLabel} from '@mui/material'
import { Select} from '@mui/material'
import {FormControlLabel,RadioGroup,FormLabel,Radio} from '@mui/material'
import {Box,Typography} from '@mui/material'





function App() {
  const[name,setName]= useState("")
  const [invalidName,setInvalidName] = useState(false)
  const[address,setAddress] = useState("")
   const[Contact,setContact]= useState("")
   const[invalidContact,setInvalidContact]= useState(false)
  const[email,setEmail] = useState("")
  const [invalidEmail,setInvalidEmail] = useState(false)
  const[dob,setDob] = useState("")
  const[gender,setGender] =useState(null)
  const[register,setRegister] = useState("")
  const[cancel,setCancel] = useState("")
  const [course,setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);


  }



  const validInput = (inputTag)=>{
    const {name,value} = inputTag
    console.log(name,typeof value);
    // console.log(/^[a-zA-Z]+$/);

    if(name=='name'){
      setName(value)
      if(!!value.match(/^[a-zA-Z\s]+$/)){
        setInvalidName(false)
      }else{
        setInvalidName(true)
      }
    }else if(name=='contact'){
      setContact(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidContact(false)
      }else{
        setInvalidContact(true)
      }

    }else if(name=='email'){
      setEmail(value)
      if(!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        setInvalidEmail(false)
    }else{
      setInvalidEmail(true)
    }
    
  }else if (name=='address'){
    setAddress(value)
  }else if (name=='dob'){
    setDob(value)
  }else if(name=='gender'){
    setGender(value)
  }
}

 const handleRegister = (e)=>{  

  if(name && address && Contact && email && dob && course  &&!invalidName && !invalidEmail && !invalidContact){
     const userDetails = `
        Your registeration is complete.

        Here is the details of ${name}

        Name      :  ${name}
        Address   :  ${address}
        Contact   :  ${Contact}
        Email Id  :  ${email}
        Gender    :  ${gender}
        DOB       :  ${dob}
        Course    :  ${course}

        A copy of above details  will sent  it to your registered mail : ${email} along with a password. 
     `
     alert(userDetails)
  }else{
    alert("Fill the form completely")
  }
 }
 const Cancel=()=>{
  setName("")
  setAddress("")
  setContact("")
  setEmail("")
  setDob("")
  setGender(null)
  setCourse("")
  setInvalidName(false)
  setInvalidEmail(false)
  setInvalidContact(false)

 }
  return (
    <>
      <div style={{width:'100%', minHeight:'100vh'}} className='formcontainer d-flex justify-content-center align-items-center' >
       
          <div style={{width:'600px'}} className='shadow-lg rounded p-5'>
            <div className='text-center'>
              <h1 className='text-primary'>Registration Form </h1>
              <p className='text-primary-emphasis'>Registration form for XI-XII Batch 2025 admission</p>
              </div>
           

            <form >
              {/* Name */}
            <div className=' mt-5'>
               <h5  style={{fontWeight:'bold'}}>Name:</h5> 
            <TextField value={name || ""} className='bg-body-secondary  w-100 rounded ' onChange={(e)=>validInput(e.target)} name='name'
          required
          id="outlined-required"
          variant='filled'
          label="Enter Name"
             defaultValue=""
          
        />
            </div>

            {/* InvalidName */}
             {invalidName && <div className='text-danger ms-5'>Invalid Name</div>}

              {/* Address*/}
            <div className=' mt-5'>
              <h5  style={{fontWeight:'bold'}}>Address:</h5>
              <TextField  variant='filled'  value={address || ""} className='bg-body-secondary  w-100 rounded' onChange={(e)=>validInput(e.target)} name='address'
          id="filled-multiline-static"
          label="Address"
          multiline
          rows={4}
          
        />
            </div>

             {/* Ph No: */}
             <div className=' mt-5'>
              <h5  style={{fontWeight:'bold'}}>Contact:</h5>
            <TextField variant='filled' value={Contact || ""} className='bg-body-secondary  w-100 rounded' onChange={(e)=>validInput(e.target)} 
            name='contact'
          required
          id="outlined-required"
          label="Enter phone number"
          defaultValue=""
        />
            </div>

            {/* Invalid Contact */}
            {invalidContact && <div className='text-danger ms-5'>Invalid Contact number</div>}



             {/* Email  */}
             <div className=' mt-5'>
              <h5  style={{fontWeight:'bold'}}>Email ID:</h5>
            <TextField  variant='filled' value={email || ""} className=' bg-body-secondary  w-100 rounded' onChange={(e)=>validInput(e.target)} name='email'
          required
          id="outlined-required"
          label="Enter Email"
          defaultValue=""
        />
            </div>
            {/* Invalid Email */}
            {invalidEmail && <div className='text-danger ms-5'>Invalid Email Id</div>}


             {/* {/* DOB */}
             <Box sx={{ mt: 5  }}>
      <Typography variant="h6" sx={{ fontWeight:'bold'  }}> 
        DOB:
      </Typography>
      <TextField  variant='filled' onChange={(e)=>validInput(e.target)} name='dob' value={dob || ""} className='bg-body-secondary rounded'
        type="date"
        fullWidth
        
      />
    </Box>



             {/* Gender */}
             <FormControl>
      <div className=' mt-5 '>
        <FormLabel  id="demo-row-radio-buttons-group-label" className='text-dark' style={{fontSize:'20px', marginRight:'60PX',fontWeight:'bold' }}>Gender:
        </FormLabel>
        <RadioGroup
        className='ms-5'
        onChange={(e)=>validInput(e.target)}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender"
          value={gender || ""}
          
        >
         <div className='ms-5'>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
         </div>
        </RadioGroup>
      </div>
    </FormControl>

             {/* Course */}
             <div className=' mt-5'>
               <h5  style={{fontWeight:'bold'}}>Course:</h5> 
              <FormControl variant="filled" sx={{ ml: 0, minWidth: 515  }} className='bg-body-secondary rounded'>
        <InputLabel id="demo-simple-select-filled-label" >Course</InputLabel>
        <Select 
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={course}
          onChange={handleChange}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Biology">Biology</MenuItem>
          <MenuItem value="Computer Science">Computer Science</MenuItem>
          <MenuItem value="Commerce">Commerce</MenuItem>
          <MenuItem value="Humanities">Humanities</MenuItem>
        </Select>
      </FormControl>
            </div>
            <Stack direction="row" spacing={2} className='mt-5'>
        <Button  onClick={handleRegister} disabled={invalidName || invalidContact || invalidEmail } type='submit'  variant="contained" style={{width:'50%', height:'70px'}} className='bg-dark ' id='registerbutton'>Register</Button>
        <Button  onClick={Cancel} variant="contained" className='bg-dark text-light '  style={{width:'50%', height:'70px'}} id='cancelButton'>Cancel</Button>
  
        </Stack>
            
            </form>
            </div>
           

       </div>
      
    </>
  )
}

export default App
