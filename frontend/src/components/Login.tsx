import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { LoginState } from "../reducers/types";
import { Dispatch } from "redux";
import { RootAction, SyncAction, AppThunkAction } from "../actions/types";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { loginSwitch } from "../actions";
import { Grid, Button, Typography } from "@material-ui/core";
import { fullHeight } from "../styles";
import { withTheme } from "@material-ui/styles";

const loginStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 0 10px white",
  borderRadius: "10px"
}

export const Login: React.FC = (props) => {

  const state = useSelector<RootState, LoginState>(state => state.login);
  const dispatch = useDispatch<React.Dispatch<RootAction>>();

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(loginSwitch(state.page === "signin" ? "signup" : "signin"));
  }

  return (
    <Grid container style={{ ...fullHeight, ...loginStyle }} direction="column" justify="center" alignItems="center" spacing={5} >
      <Grid item>
        <Typography color={"secondary"} variant={"h4"}>Log into</Typography>
        <Typography color={"primary"} variant={"h2"}>Auction</Typography>
      </Grid>
      <Grid item>
        {state.page === "signin" ?
          <Signin /> :
          <Signup />
        }
      </Grid>
      <Grid item container justify="center">
        <Button onClick={onClick}>{"To " + (state.page === "signin" ? "Sign Up" : "Sign In")}</Button>
      </Grid>
    </Grid >
  )
}