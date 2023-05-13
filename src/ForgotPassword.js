

import React,{useState, useRef} from 'react'
import firebase from "./firebase"
import 'bootstrap/dist/css/bootstrap.css';
import {Card , Form ,Alert,Button } from "react-bootstrap"
import {Link} from "react-router-dom"


function ForgotPassword() {
                const emailRef = useRef()
                const [error ,setError]=useState('');
                const [message ,setMessage]=useState('');
 


     const handleSubmit  = (e) => {
        
        e.preventDefault();
        setMessage("");
        setError("");
        firebase
        .auth()
        .sendPasswordResetEmail(emailRef.current.value)
        .then(() =>{
            setMessage("Check your inbox for further instructions")
        })
        .catch((error) =>{
           const errorCode = error.code;
           const errorMessage = error.message;
           setError("failed to reset password");
           console.log('sign-in error' , errorCode,errorMessage)
            
        })

        }


  return (
    <>
    <Card className="card shadow" style={{minWidth:"300px"}}>
        <Card.Header>
            <h2 className='text-center mb-4'>Password Reset</h2>
            {message && <Alert variant="success">{message}</Alert> }
            {error && <Alert variant="danger">{error}</Alert> }
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit }>
                <Form.Group>
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

              <Button type="submit" className="btn btn-primary w-100 mt-3">Reset password </Button>
            </Form>
        </Card.Body>

        <Card.Footer>
          
                <div className='w-100 text-center mt-2'>
                    <Link to="/login">Log In</Link>
                </div>

                 <div className='w-100 text-center mt-2'>
                    Need an account?<Link to="/signup">Sign Up</Link>
                </div>

        </Card.Footer>
    </Card>
 
    </>
  )
}

export default ForgotPassword
