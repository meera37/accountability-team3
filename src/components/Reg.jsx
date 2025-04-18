import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getAllUsersApi, registerUserApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function Reg() {

    const [user, setUser] = useState("")
    const [pswd, setPswd] = useState("")
    const [email, setEmail] = useState("")
    const [pswdCheck, setPswdCheck] = useState("")

    const [isUser, setIsUser] = useState(true)
    const [isPswd, setIsPswd] = useState(true)
    const [isEmail, setIsEmail] = useState(true)
    const [isPswdCheck, setIsPswdCheck] = useState(true)

    const validate = (e) => {
        const { name, value, id } = e.target
        console.log({ id, name, value })


        if (name == 'username') {
            if (!!value.match('^[0-9a-zA-Z_]+$')) {
                setUser(value)
                setIsUser(true)
            } else {
                setUser(value)
                setIsUser(false)
            }
            // [0-9a-zA-Z_*@]+
        } else if (name == 'password') {
            if (value.length >= 6 && value.length <= 20 && !!value.match('^.{6,20}$')) {
                setPswd(value)
                setIsPswd(true)
            } else {
                setPswd(value)
                setIsPswd(false)
            }
        } else if (name == 'email') {
            if (!!value.match('^[0-9a-zA-Z@.]+$')) {
                setEmail(value)
                setIsEmail(true)
            } else {
                setEmail(value)
                setIsEmail(false)
            }
        } else if (name == 'passwordcheck') {


            if (pswd == value) {
                setPswdCheck(value)
                setIsPswdCheck(true)
            } else {
                setPswdCheck(value)
                setIsPswdCheck(false)

            }
        }

    }

const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();

        const isFormValid = user && pswd && email && pswdCheck && isUser && isPswd && isEmail && isPswdCheck;

        if (!isFormValid) {
            toast.error("Please fill all fields correctly")
            return
        }

        const reqBody = {
            username: user,
            email: email,
            password: pswd
        }
        try {

            const res = await getAllUsersApi(); 
            
            const existingUser = res.data.find(
              u => u.username === user || u.email === email
            );
        
            if (existingUser) {
              toast.error("Username or Email already exists");
              return;
            }

            const response = await registerUserApi(reqBody)

            if (response.status >= 200 && response.status < 300) {
                toast.success("Registered Successfully")

                setUser("");
                setPswd("");
                setEmail("");
                setPswdCheck("");
                setIsUser(true);
                setIsPswd(true);
                setIsEmail(true);
                setIsPswdCheck(true);

                setTimeout(() => {
                    navigate('/login');
                  }, 2000);
            }
            else{
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log("Register error:", error);
            toast.error("Registration failed")
        }

    }

    return (
        <>
            <div className='container my-5'>
                <div className="row justify-content-center align-items-stretch gx-0">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0 d-flex">
                        <div className='text-start p-4 rounded shadow w-100 align-self-stretch' style={{ maxWidth: "500px" }}>
                            <h1 className='text-center'>Register</h1>
                            <p className='text-center'>Kindly fill this form to register</p>
                            <div className="my-3">
                                <TextField name='username' value={user} id="username" label="Username" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
                                {user !== "" && !isUser && <span className='text-danger'>Username can only contain letters, numbers, and underscores</span>}
                            </div>
                            <div className="my-3">
                                <TextField name='email' value={email} id="email" label="E-mail" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
                                {email !== "" && !isEmail && <span className='text-danger'>Enter a valid email format (e.g., name@example.com)</span>}
                            </div>
                            <div className="mb-3">
                                <TextField name='password' value={pswd} id="password" label="Password" type='password' variant="outlined" className='w-100' onChange={(e) => validate(e)} inputProps={{ minLength: 6, maxLength: 20 }} />
                                {pswd !== "" && !isPswd && <span className='text-danger'>Password must be 6-20 characters long and can only contain letters, numbers, or symbols like _ @ *</span>}
                            </div>
                            <div className="mb-3">
                                <TextField name='passwordcheck' value={pswdCheck} id="passwordcheck" label="Confirm Password" type='password' variant="outlined" className='w-100' onChange={(e) => validate(e)} />
                                {pswdCheck !== "" && !isPswdCheck && <span className='text-danger'>Passwords do not match</span>}
                            </div>
                            <div className="mb-3">
                                <Stack spacing={1} direction="row">
                                    <Button onClick={handleRegister} variant="contained" color="secondary" className='w-100 p-3'>Register</Button>
                                </Stack>
                            </div>
                            <div className="mt-3 text-center">
                                <span>Already have an account? </span>

                                <Link to="/login" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-5 col-md-6 d-none d-md-block p-0">
                        <img
                            src="https://media.istockphoto.com/id/500641404/vector/documents-and-hand-with-pen-signs-documents-treaty-signing-concept.jpg?s=612x612&w=0&k=20&c=-_d0R7NOVCGgYc3Qld8p19AxdKO0pLibhGC9gXITlNI="
                            alt="Register"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            className="img-fluid rounded shadow"
                        />
                    </div> */}
                      <div
                      className="col-lg-5 col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center p-4 text-white"
                      style={{
                        background: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
                        animation: 'fadeIn 1s ease-in',
                      }}
                    >
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCheckCircle} bounce size="3x" className="mb-3" />
                        <h2>Stay on Track, Every Step</h2>
                        <p>Consistency creates success — let's start today.</p>
                      </div>
                    </div>
                </div>
            </div>


            <ToastContainer position='top-center' theme="colored" autoClose={2000} />


        </>
    )
}

export default Reg