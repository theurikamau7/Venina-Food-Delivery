import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
    sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
      
            fetch("http://localhost:9000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
        
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        sessionStorage.setItem('userrole',resp.role);
                        usenavigate('/menu')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/create_account'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn







































// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form } from "react-bootstrap";
// import {useNavigate} from 'react-router-dom'

// function SignIn(){
//     const [formData, setFormData] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = (event) => {
//         const key = event.target.id;
//         const value = event.target.value;
//         setFormData({...formData, [key]: value});
//     }

//     const navigate = useNavigate()

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         navigate('/menu')

//     }
//     const inputStyle = {
//         width:'100%',
//         borderRadius:'15px',
//         border:'1px solid black',
//         padding:'10px'
//     };

//     const formstyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         margin: '70px auto',
//         backgroundColor: '#2C5F2D',
//         height: '50vh',
//         justifyContent: 'center',
//         width: '40%',
//         borderRadius: '10px'
//     };

//     const buttonStyle = {
//         borderRadius: '10px',
//         width: '20%'
//     };

//     return (
//         <div>
//             <Form style={formstyle}>
//                 <h1>Sign In</h1>
//                 <Form.Group className="mb-3" controlId="formemail">
//                     <Form.Control style={inputStyle} type="email" placeholder="Email" id="email" value={formData.email} onChange={handleChange}></Form.Control>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formpassword">
//                     <Form.Control style={inputStyle} type="password" placeholder="Password" id="password" value={formData.password} onChange={handleChange}></Form.Control>
//                 </Form.Group>

//                 <Button type="submit" style={buttonStyle} onClick={handleSubmit}>
//                     Sign In
//                 </Button>
//             </Form>
//         </div>
//     );
// }

// export default SignIn;