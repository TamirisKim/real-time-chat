import React, {useContext} from "react";
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import Logo from "../assets/img/logo.png"

function Navbar() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <nav className="navbar">
      
        <div className="container nav-content" >
          {user ? (
            <>
            <img src={Logo}/>
            <button className="btn-log" onClick={() => auth.signOut()}>
              выйти
            </button>
            </>
          ) : (
            ""
            // <NavLink to={LOGIN_ROUTE}>
            //   <Button variant={"contained"}>Логин</Button>
            // </NavLink>
          )}
        </div>
        
      
    </nav>
  );
}

export default Navbar;
