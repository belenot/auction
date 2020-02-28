import { Grid } from "@material-ui/core";
import React from 'react';
import { fullHeight } from "../styles";

const loginLogoStyle = {
  background: "url(/img/logo.jpg)",
  backgroundRepeat: "no-repeat",

}

export const LoginBanner = (props: any) => (
  <Grid container style={fullHeight} direction="column" justify="center">
    <Grid item style={{ ...loginLogoStyle }}>

    </Grid>
  </Grid >
)