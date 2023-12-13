import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Home (){


    const buttonStyle = {
        width:'300px',
        margin:'0 auto',
        display:'block',
        marginTop:'40px',
        marginBottom:'40px'
    }

    const formstyle = {
        backgroundColor:'#ABD6DFFF',
        padding:'40px',
        borderRadius:'8px',
        margin: '200px auto',
        width:'60%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }

    return(
        <div className='text-center'>
            <Form style={formstyle}>
                <Link to='create_account'>

                <Button style={buttonStyle} variant='primary'>Sign Up</Button>

                </Link>
                
                <Button style={buttonStyle} variant='secondary'>Sign In</Button>
            </Form>
            
        </div>
    )
}

export default Home