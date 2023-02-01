import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCgKmU_nNJOIsVD1yI3IRU4URHPNfkOP1o",
  authDomain: "real-time-chat-c0437.firebaseapp.com",
  projectId: "real-time-chat-c0437",
  storageBucket: "real-time-chat-c0437.appspot.com",
  messagingSenderId: "365475871233",
  appId: "1:365475871233:web:ec25573ff56262d8711e00",
  measurementId: "G-4462S66LGX",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
