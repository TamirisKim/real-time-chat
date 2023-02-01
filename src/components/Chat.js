import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Context } from "../index";
import Loader from "./Loader";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="chat-content">
        <div className="chat-bg">
          {messages.map((message) => (
            <div
              style={{
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
              }}
            >
              {user.uid === message.uid ? (
                <Grid container alignItems="flex-end" >
                  <div
                    className="mes-box"
                    style={{
                      background:
                        user.uid === message.uid ? "#D5E6FF" : "#D9D9D9",
                      borderRadius:
                        user.uid === message.uid
                          ? "10px 7px 0 7px"
                          : "7px 10px 7px 0",
                    }}
                  >
                    {message.text}
                  </div>
                  <Avatar src={message.photoURL} />
                </Grid>
              ) : (
                <Grid container alignItems="flex-end">
                  <Avatar src={message.photoURL} />
                  <div
                    className="mes-box"
                    style={{
                      background:
                        user.uid === message.uid ? "#D5E6FF" : "#D9D9D9",
                      borderRadius:
                        user.uid === message.uid
                          ? "10px 7px 0 7px"
                          : "7px 10px 7px 0",
                    }}
                  >
                    {message.text}
                  </div>
                </Grid>
              )}

              <div>{message.displayName}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "100%" }}
        >
          <TextField
            multiline
            maxRows={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ background: "#fff", width: "100%", marginTop: 20 }}
          />
          <button onClick={sendMessage} className="btn-mes">
            Отправить
          </button>
        </Grid>
      </div>
    </div>
  );
}

export default Chat;
