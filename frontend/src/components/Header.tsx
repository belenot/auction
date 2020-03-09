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
      <label className="primary-text">{state.username}</label>
      <label className="primary-text">Wallet: {state.wallet}</label>
      <button className="btn btn-primary" onClick={() => dispatch(changePage('ADD_ITEM'))}>Add item</button>
      <button className="btn btn-primary" onClick={() => dispatch(changePage('PROFILE'))}>Profile</button>
      <button className="btn btn-primary" onClick={() => dispatch(changePage('ITEMS_LIST'))}>Items List</button>
      <button className="btn btn-primary" onClick={() => dispatch(signoutRequestAsync())}>Sign Out</button>
    </header>
  )
}