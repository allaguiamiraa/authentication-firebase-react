import React,{useState, useRef, useEffect} from 'react'
import firebase from "./firebase"
import 'bootstrap/dist/css/bootstrap.css';
import {Card , Form ,Alert,Button} from "react-bootstrap"
import {Link,useNavigate } from "react-router-dom"

function SignUp() {
                const emailRef = useRef()
                const passwordRef = useRef()
                const passwordConfirmRef = useRef()
                const [error ,setError]=useState('');
                const [currentUser, setCurrentUser] = useState(null);
                const [loading, setLoading] = useState(true);
                const navigate = useNavigate (); 


     const handleSubmit  = (e) => {
        
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
                     setError("pasworsds do not match !");
                     return;
                 }

        firebase
        .auth()
        .createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then((userCredential) =>{
            const user = userCredential.user;
            navigate("/")
            console.log("user created successfully",user)
        })
        .catch((error) =>{
           const errorCode = error.code;
           const errorMessage = error.message;
           setError(errorMessage);
           console.log('sign-up error' , errorCode,errorMessage)
            
        })

        }

        useEffect(()=>{
            const unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
                setCurrentUser(user);
                setLoading(false)
            });
          
            return () =>unsubscribe();
          },[])

  return (
    <>
    <Card className="card shadow" style={{minWidth:"300px"}}>

        <Card.Header>
        <h2 className='text-center mb-4'>Sign up</h2>
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
                <Form.Group>
                     <Form.Label>Password Confirmation</Form.Label>
                     <Form.Control type="password" ref={passwordConfirmRef} required/>
                </Form.Group>

                <Button type="submit" className="btn btn-primary w-100 mt-3">Sign Up </Button>
            </Form>
        </Card.Body>
        <Card.Footer>
                <div className='w-100 text-center mt-2'>
                    Already have an account ?<Link to="/Login">Log In</Link>
                </div>
        </Card.Footer>

    </Card>

    
      
    </>
  )
}

export default SignUp
