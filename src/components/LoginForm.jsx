import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputAdornment, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { loginUserApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';



function LoginForm() {

  const [loginId,setLoginId] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = (e)=>{
    const {name,value} = e.target
console.log({name,value});
if(name =='loginId'){
  setLoginId(value)
}else if(name == 'password'){
  setPassword(value)

}

  }
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!loginId || !password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }
    if(password.length<6){
      setErrorMessage("Password should be atleast 6 characters")
      return
    }
  

    try {
      setLoading(true);
      setErrorMessage('');
  
      const users = await loginUserApi();
  
      const user = users.find(
        user => user.username === loginId || user.email === loginId
      );
      
  
      if (!user) {
        setErrorMessage("User not found. Please register.");
      } else if (user.password !== password) {
        setErrorMessage("Incorrect password.");
      } else {
        
        toast.success("Login successful!");
        setLoginId('');
        setPassword('');
        setErrorMessage(''); 
        
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
  
    } catch (err) {
      console.error("Login failed:", err);
      setErrorMessage("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  


    return (
        <>
            <div className="container-fluid"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?t=st=1744644599~exp=1744648199~hmac=f52d18747573250b521f1e3a352cfae1f6800960be52a111a0cc97641fecbe52&w=1480')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}>

            <div className='container my-5'>
                <div className="row justify-content-center align-items-stretch gx-0">

                <div
  className="col-lg-5 col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center p-4 text-white"
  style={{
    background: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
    animation: 'fadeIn 1s ease-in',
  }}
>
  <div className="text-center">
    <FontAwesomeIcon icon={faCheckCircle} bounce size="3x" className="mb-3" />
    <h2>Your Accountability Partner Awaits</h2>
    <p>Small steps. Big results. Let's stay accountable.</p>
  </div>
</div>

                    {/* <div className="col-lg-5 col-md-6 d-none d-md-block p-0">
                        <img
                            src="https://media.istockphoto.com/id/500641404/vector/documents-and-hand-with-pen-signs-documents-treaty-signing-concept.jpg?s=612x612&w=0&k=20&c=-_d0R7NOVCGgYc3Qld8p19AxdKO0pLibhGC9gXITlNI="
                            alt="Login"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            className="img-fluid rounded shadow"
                        />
                    </div> */}

                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0 d-flex">
                        <div className='text-start p-4 rounded shadow w-100 align-self-stretch' style={{ maxWidth: "500px" , backgroundColor: 'white'}}>
                            <h1 className='text-center'>Login</h1>
                            <p className='text-center text-muted'>Welcome back! Please login to continue.</p>
                            <form>
                                <div className="my-4">
                                    <TextField name='loginId' id="loginId" value={loginId} label="E-mail or Username" variant="outlined" className='w-100' InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faUser} />
      </InputAdornment>
    )
  }}  onChange={(e)=>{validate(e)}}/>

                                </div>
                                <div className="my-4">
                                    <TextField name='password' id="password" value={password} type='password' label="Password" variant="outlined" className='w-100'
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faLock} />
                                          </InputAdornment>
                                        )
                                      }} onChange={(e)=>{validate(e)}} />

                                </div>
                                <div className="my-4">
                                <Stack spacing={1} direction="row">
                                    <Button onClick={handleLogin} variant="contained" color="secondary" className='w-100 p-3'>Login</Button>
                                </Stack>
                                {loading && (
  <div className="text-center text-muted mt-2">
    Logging in...
  </div>
)}
                            </div>
                            </form>

                            {errorMessage && (
                  <div className="text-center text-danger my-3">{errorMessage}</div>
                )}

                            <div className="my-4 text-center">
                                <span>Don't have an account? </span>

                                <Link to="/register" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                    Register Here
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            </div>

            <ToastContainer position="top-center" autoClose={2000} />

        </>
    )
}

export default LoginForm