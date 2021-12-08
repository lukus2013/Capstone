import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Routes from '../routes';
import NavBar from '../Components/NavBar';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          userName: authed.email.split('@')[0],
          profileImage: authed.photoUrl,
          uid: authed.email,
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Routes userName={user.userName} userId={user.uid} />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
