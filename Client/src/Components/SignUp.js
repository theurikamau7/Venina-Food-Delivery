import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap'



function CreateAccount() {

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        createPassword:'',
        confirmPassword:''
    })

    const handleChange = (event) => {
        const key = event.target.id
        const value = event.target.value
        setFormData({...formData, [key]:value})
    }

    const inputStyle = {
        borderRadius:'10px',
        border:'1px solid black',
        padding:'10px',
        width:'100%',

    }

    const formStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'70vh',
        flexDirection:'column',
        margin: '100px auto',
        width:'40%',
        backgroundColor:'#CDB599FF',
        borderRadius:'20px'
        
    }

    const buttonStyle = {
        borderRadius:'10PX',
        marginTop:'10px'
    }

    return(
        <div>

            <Form style={formStyle}>
                <h1>Create Account</h1>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="number" id="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="password" id="createPassword" placeholder="Create Password" value={formData.createPassword} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control style={inputStyle} type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Button style={buttonStyle}>Sign in with Google</Button> &nbsp;
                <Button style={buttonStyle}>Sign in with Facebook</Button>

            </Form>
        </div>
    )
}

export default CreateAccount