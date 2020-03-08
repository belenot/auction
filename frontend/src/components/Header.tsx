import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { RootAction, RootDispatch } from '../actions/types';
import { changePage, signoutRequestAsync } from '../actions';

export const Header: React.FC = () => {
  const state = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch<RootDispatch>();
  return (
    <header>
      <div>
        <label>{state.username}</label>
        <label>Wallet: {state.wallet}</label>
        <button onClick={() => dispatch(changePage('ADD_ITEM'))}>Add item</button>
        <button onClick={() => dispatch(changePage('PROFILE'))}>Profile</button>
        <button onClick={() => dispatch(changePage('ITEMS_LIST'))}>Items List</button>
        <button onClick={() => dispatch(signoutRequestAsync())}>Sign Out</button>
      </div>
    </header>
  )
}