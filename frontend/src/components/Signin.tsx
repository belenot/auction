import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootAction, RootDispatch } from '../actions/types';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync } from '../actions';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

export const Signin: React.FC = (props) => {
  const dispatch = useDispatch<RootDispatch>();
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
    <form>
      <div>
        <label className="primary-text centered">Log into</label>
        <label className="fancy-text centered">Auction</label>
      </div>
      <div>
        <input className="form-control" placeholder="Username" type='text' name='username' value={state.username} onChange={(e) => changeUsername(e.target.value)} />
      </div>
      <div>
        <input className="form-control" placeholder="Password" type='password' name='password' value={state.password} onChange={(e) => changePassword(e.target.value)} />
      </div>
      <div>
        <button className="btn btn-primary" color="primary" type='submit' onClick={e => onSubmit(e)}>Sign In</button>
      </div>
    </form>
  )
}