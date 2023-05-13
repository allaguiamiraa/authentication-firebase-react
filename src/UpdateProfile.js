import React,{useState, useRef, useEffect} from 'react'
import {Card,Button,Alert,Form} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import firebase from "./firebase"
import "firebase/auth"

function UpdateProfile() {

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const [error,setError]=useState('')
        const [currentUser,setCurrentUser]=useState('')
        const navigate = useNavigate()

  const handleSubmit = (e) =>{

            e.preventDefault();

            if (passwordRef.current.value !== passwordConfirmRef.current.value){
                        setError("pasworsds do not match !");
                        return;
                    }


            if(emailRef.current.value !== currentUser.email){
                        firebase
                        .auth()
                        .currentUser.updateEmail(emailRef.current.value)
                        .then(() =>{
                        
                            console.log("email updated successfully",currentUser)
                        })
                        .catch((error) =>{
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('sign-up error' , errorCode,errorMessage)
                            
                        })
                    }


            if(passwordRef.current.value){
                        firebase
                        .auth()
                        .currentUser.updatePassword(passwordRef.current.value)
                        .then(() =>{
                            console.log("Password updated successfully",currentUser)
                        })
                        .catch((error) =>{
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('sign-up error' , errorCode,errorMessage)
                            
                        })
            }
            navigate("/")
            
  }


            useEffect(()=>{
                const unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
                    setCurrentUser(user);
                });
                return () =>unsubscribe();
            },[])

  return (
    <>
        <Card className="card shadow" style={{minWidth:"300px"}}>

            <Card.Header>
                  <h2 className='text-center mb-4' >Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert> }
            </Card.Header>

            <Card.Body>

                <Form onSubmit={handleSubmit }>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep the same' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef}  placeholder='Leave blank to keep the same' />
                    </Form.Group>

                    <Button type="submit"  className="btn btn-primary w-100 mt-3">Update </Button>
                 </Form>


            </Card.Body>


            <Card.Footer>
                <div className='w-100 text-center mt-2'>
                <Link to="/" >Cancel</Link>
                </div>
            </Card.Footer>

        </Card>
    </>
  )
}

export default UpdateProfile
