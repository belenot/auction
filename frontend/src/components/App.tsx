import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync, signinRequest, initializeRequestAsync } from '../actions';
import { SyncAction, AppThunkAction, RootAction } from '../actions/types';
import { Signin } from './Signin';
import { Login } from './Login';

const App: React.FC<any> = (props: any) => {
  const state = useSelector((state: RootState) => state.system)
  const dispatch = useDispatch<React.Dispatch<RootAction>>();
  useEffect(() => {
    if (!state.initialized) {
      dispatch(initializeRequestAsync());
    }
  }, [])
  return (
    <div>
      {state.loggedIn ?
        <div>logged</div>
        :
        <Login />
      }

    </div>
  )
}

export default App;