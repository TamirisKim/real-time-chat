import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";

import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";

import Loader from "./components/Loader";
import { Context } from "./index";
import Footer from "./components/Footer";

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
