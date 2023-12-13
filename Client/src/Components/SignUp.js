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

    return(
        <div>

            <Form>
                <h1>Create Account</h1>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" id="email" placeholder="Email" value={formData.email}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="number" id="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" id="createPassword" placeholder="Create Password" value={formData.createPassword}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword}></Form.Control>
                </Form.Group>

            </Form>
        </div>
    )
}

export default CreateAccount