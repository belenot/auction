import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootAction, RootDispatch } from '../actions/types';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync, handleSignup, signupRequestAsync } from '../actions';
import { TextField, Button, Typography } from '@material-ui/core';

export const Signup: React.FC = (props) => {
  const dispatch = useDispatch<RootDispatch>();
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
    <form>
      <div>
        <label>Welcome to</label>
        <label>Auction</label>
      </div>
      <div>
        <input placeholder="Username" type='text' name='username' value={state.username} onChange={(e) => changeUsername(e.target.value)} />
      </div>
      <div>
        <input placeholder="Password" type='password' name='password' value={state.password} onChange={(e) => changePassword(e.target.value)} />
      </div>
      <div>
        <button type='submit' onClick={e => onSubmit(e)}>Sign Up</button>
      </div>
    </form>
  )
}