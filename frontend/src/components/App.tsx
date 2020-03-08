import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { initializeRequestAsync, changePage } from '../actions';
import { RootAction } from '../actions/types';
import { Login } from './Login';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { fullHeight } from '../styles';
import { ItemsList } from './ItemsList';
import { AddItem } from './AddItem';
import { Header } from './Header';


const App: React.FC<any> = () => {
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
        <div>
          <div>
            <Header />
          </div>
          <div>
            {state.page == 'ITEMS_LIST' && <ItemsList />}
            {state.page == 'ADD_ITEM' && <AddItem />}
            {state.page == 'PROFILE' && <div>profile</div>}
          </div>
        </div>
        :
        <React.Fragment>
          <div>
            <Login />
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default App;