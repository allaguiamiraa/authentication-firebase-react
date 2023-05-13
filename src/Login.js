import React,{useState, useRef, useEffect} from 'react'
import firebase from "./firebase"
import 'bootstrap/dist/css/bootstrap.css';
import {Card , Form ,Alert,Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"


function Login() {
                const emailRef = useRef()
                const passwordRef = useRef()
                const [error ,setError]=useState('');
                const navigate = useNavigate(); 


     const handleSubmit  = (e) => {
        
        e.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then(() =>{
           navigate("/")
        })
        .catch((error) =>{
           const errorCode = error.code;
           const errorMessage = error.message;
           setError("Authentication failed");
           console.log('sign-in error' , errorCode,errorMessage)
            
        })

        }

        useEffect(()=>{
            // const unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
            //     setCurrentUser(user);
            //     setLoading(false)
            // });
          
            // return () =>unsubscribe();
          },[])

  return (
    <>
    <Card className="card shadow" style={{minWidth:"300px"}}>
        <Card.Header>
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant="danger">{error}</Alert> }
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit }>
                <Form.Group>
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group>
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>

              <Button type="submit" className="btn btn-primary w-100 mt-3">Login </Button>
            </Form>
        </Card.Body>

        <Card.Footer>

                <div className='w-100 text-center mt-2'>
                    <Link to="/forgot-password">Forgot password ?</Link>
                </div>

                 <div className='w-100 text-center mt-2'>
                    Need an account?<Link to="/signup">Sign Up</Link>
                </div>

        </Card.Footer>
    </Card>
 
    </>
  )
}

export default Login
