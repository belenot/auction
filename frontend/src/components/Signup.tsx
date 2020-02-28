import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootAction } from '../actions/types';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync, handleSignup, signupRequestAsync } from '../actions';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

export const Signup: React.FC = (props) => {
  const dispatch = useDispatch<React.Dispatch<RootAction>>();
  const state = useSelector((state: RootState) => state.signup);

  function changeUsername(newUsername: string) {
    dispatch(handleSignup(newUsername, state.password));
  }
  function changePassword(newPassword: string) {
    dispatch(handleSignup(state.username, newPassword));
  }
  function onSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(signupRequestAsync(state.username, state.password))
  }
  return (
    <Grid component="form" container justify="center" alignItems="center" direction="column" spacing={2}>
      <Grid item>
        <TextField variant="outlined" label="Username" type='text' name='username' value={state.username} onChange={(e) => changeUsername(e.target.value)} />
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Password" type='password' name='password' value={state.password} onChange={(e) => changePassword(e.target.value)} />
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained" type='submit' onClick={e => onSubmit(e)}>Sign Up</Button>
      </Grid>
    </Grid>
  )
}