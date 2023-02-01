import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function Loader() {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
        <div class="lds-facebook"><div></div><div></div><div></div></div>        </Grid>
      </Grid>
    </Container>
  );
}

export default Loader;
