import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";


function SignIn(){
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const key = event.target.type
        const value = event.target.value
        setFormData({...formData, [key]:value})
    }

    const inputStyle = {
        width:'100%',
        borderRadius:'15px',
        border:'1px solid black',
        padding:'10px'

    }

    const formstyle = {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'70px auto',
        backgroundColor:'#2C5F2D',
        height:'50vh',
        justifyContent:'center',
        width:'40%',
        borderRadius:'10px'

    }

    const buttonStyle = {
        borderRadius:'10px',
        width:'20%'
    }
    return(
        <div>

            <Form style={formstyle}>
                <h1>Sign In</h1>
                <Form.Group className="mb-3" controlId="formemail">
                    <Form.Control style={inputStyle} type="email" placeholder="Email" id="email" value={formData.email} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formpassword">
                    <Form.Control style={inputStyle} type="password" placeholder="Password" id="password" value={formData.password} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Button type="submit" style={buttonStyle}>Sign In</Button>

            </Form>

        </div>
    )
}

export default SignIn