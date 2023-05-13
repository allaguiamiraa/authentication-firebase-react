// import React, { useEffect, useState } from 'react';
// import firebase from './firebase';
// import { Route, useNavigate  } from 'react-router-dom';

// function PrivateRouter({ component: Component, ...rest }) {
//   const [currentUser, setCurrentUser] = useState('');
//   const navigate = useNavigate();


//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Route
//     {...rest}
//     element={currentUser ? <Component /> : navigate('/login')}
//     />
//   );
// }

// export default PrivateRouter;


import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import Dashboard from './Dashboard';

import { Route, useNavigate ,Routes } from 'react-router-dom';

const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {

  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
        });
    
        return () => unsubscribe();
      }, []);


      // useEffect(() => {
      //   if (!currentUser) {
      //     navigate('/login');
      //   }
      // }, [currentUser, navigate]);
      

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  // else {
  //   navigate('/dashboard');
  //   return null;
  // }


/************************************************************************** */
  //  return <Routes><Route {...rest} element={<Component />} /></Routes>;


  
  /************************************************************************** */

  //  return (
  //   <Routes>
  //     <Route {...rest} element={<Dashboard />} />
  //   </Routes>
  // );
  

  /************************************************************************** */

  // return <Route {...rest} element={<Component />} />;
  return (<> <Dashboard /> </>);

};

export default PrivateRouter;