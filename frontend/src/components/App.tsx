import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { handleSignin, signinRequestAsync, signinRequest, initializeRequestAsync } from '../actions';
import { SyncAction, AppThunkAction, RootAction } from '../actions/types';
import { Signin } from './Signin';
import { Login } from './Login';
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core';
import { fullHeight } from '../styles';
import { LoginBanner } from './LoginBanner';
import { ItemsList } from './ItemsList';


const App: React.FC<any> = (props: any) => {
  const state = useSelector((state: RootState) => state.system)
  const dispatch = useDispatch<React.Dispatch<RootAction>>();
  useEffect(() => {
    if (!state.initialized) {
      dispatch(initializeRequestAsync());
    }
  }, [])
  return (
    <Grid container style={fullHeight}>
      {state.loggedIn ?
        <Grid item xs={12}>
          <ItemsList />
        </Grid> :
        <React.Fragment>
          <Grid item xs={7}>
            <LoginBanner />
          </Grid>
          <Grid item xs={5}>
            <Login />
          </Grid>
        </React.Fragment>
      }
    </Grid>
  )
}

export default App;