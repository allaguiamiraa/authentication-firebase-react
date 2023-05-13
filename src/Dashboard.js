import React ,{useState,useEffect}from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import firebase from "./firebase"

function Dashboard() {


const [currentUser,setCurrentUser]=useState('')
const navigate = useNavigate()

const handleLogout = (e) =>{

    e.preventDefault()

        firebase
        .auth()
        .signOut()
        .then(()=>{
          navigate("/login")
        }

    )

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
              </Card.Header>

              <Card.Body>
                 <strong>Email:</strong>{currentUser.email}
                 <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update</Link>
              </Card.Body>

              <Card.Footer>
                   <div className='w-100 text-center mt-2'>
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                  </div>
              </Card.Footer>

        </Card>
    </>
  )
}

export default Dashboard
