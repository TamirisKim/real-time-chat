import React, { useContext } from "react";

import { Context } from "../index";
import firebase from "firebase";
import MainLogo from "../assets/img/main-logo.png";

function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <div className="container">
      <div className="main-content">
        <img src={MainLogo} className="main-logo"/>
        <div className="main-text">ReactJS + Firebase</div>
        <button className="btn-log-gr" onClick={login} style={{marginBottom: 100,}}>
          Войти с помощью Google
        </button>
      </div>
    </div>
  );
}

export default Login;
