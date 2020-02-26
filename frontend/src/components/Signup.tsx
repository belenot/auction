import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootAction } from '../actions/types';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync, handleSignup, signupRequestAsync } from '../actions';

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
    <div>
      <form>
        <label>Username</label>
        <input type='text' name='username' value={state.username} onChange={(e) => changeUsername(e.target.value)} />
        <label>Password</label>
        <input type='password' name='password' value={state.password} onChange={(e) => changePassword(e.target.value)} />
        <button type='submit' onClick={e => onSubmit(e)}>Sign Up</button>
      </form>
    </div>
  )
}