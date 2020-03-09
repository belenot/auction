import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { initializeRequestAsync, changePage } from '../actions';
import { RootAction, RootDispatch } from '../actions/types';
import { Login } from './Login';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { fullHeight } from '../styles';
import { ItemsList } from './ItemsList';
import { AddItem } from './AddItem';
import { Header } from './Header';
import { Profile } from './Profile';


const App: React.FC<any> = () => {
  const state = useSelector((state: RootState) => state.system)
  const dispatch = useDispatch<RootDispatch>();
  useEffect(() => {
    if (!state.initialized) {
      dispatch(initializeRequestAsync());
    }
  }, [])
  return (
    <div id="root-container">
      {state.loggedIn ?
        <div id="main-container" className="container">
          <div className="container">
            <Header />
          </div>
          <div className="container">
            {state.page == 'ITEMS_LIST' && <ItemsList />}
            {state.page == 'ADD_ITEM' && <AddItem />}
            {state.page == 'PROFILE' && <Profile />}
          </div>
        </div>
        :
        <div className="container">
          <Login />
        </div>
      }
    </div>
  )
}

export default App;