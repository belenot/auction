import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootAction } from '../actions/types';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync } from '../actions';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

export const Signin: React.FC = (props) => {
  const dispatch = useDispatch<React.Dispatch<RootAction>>();
  const state = useSelector((state: RootState) => state.signin);

  function changeUsername(newUsername: string) {
    dispatch(handleSignin(newUsername, state.password));
  }
  function changePassword(newPassword: string) {
    dispatch(handleSignin(state.username, newPassword));
  }
  function onSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(signinRequestAsync(state.username, state.password))
  }
  return (
    <Grid component="form" container justify="center" alignItems="center" direction="column" spacing={2}>
      <Grid item>
        <Typography color={"secondary"} variant={"h4"}>Log into</Typography>
        <Typography color={"primary"} variant={"h2"}>Auction</Typography>
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Username" type='text' name='username' value={state.username} onChange={(e) => changeUsername(e.target.value)} />
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Password" type='password' name='password' value={state.password} onChange={(e) => changePassword(e.target.value)} />
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained" type='submit' onClick={e => onSubmit(e)}>Sign In</Button>
      </Grid>
    </Grid>
  )
}