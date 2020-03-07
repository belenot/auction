import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { initializeRequestAsync, changePage } from '../actions';
import { RootAction } from '../actions/types';
import { Login } from './Login';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { fullHeight } from '../styles';
import { LoginBanner } from './LoginBanner';
import { ItemsList } from './ItemsList';
import { AddItem } from './AddItem';


const App: React.FC<any> = () => {
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
        <Grid item xs={12} container direction='column'>
          <Grid item>
            <AppBar>
              <Toolbar>
                <Typography>{state.username}</Typography>
                <Typography>Wallet: {state.wallet}</Typography>
                <Button onClick={() => dispatch(changePage('ADD_ITEM'))}>Add item</Button>
                <Button onClick={() => dispatch(changePage('PROFILE'))}>Profile</Button>
                <Button onClick={() => dispatch(changePage('ITEMS_LIST'))}>Items List</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item>
            {state.page == 'ITEMS_LIST' && <ItemsList />}
            {state.page == 'ADD_ITEM' && <AddItem />}
            {state.page == 'PROFILE' && <div>profile</div>}
          </Grid>
        </Grid>
        :
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