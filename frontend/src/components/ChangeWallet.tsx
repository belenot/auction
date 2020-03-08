import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { RootDispatch } from '../actions/types';
import { handleChangeWallet, changeWalletRequestAsync } from '../actions';

export const ChangeWallet: React.FC = () => {
  const state = useSelector((state: RootState) => state.changeWallet);
  const systemState = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch<RootDispatch>();
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(changeWalletRequestAsync(state.wallet));
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <label>Change budget: </label>
      <input value={state.wallet} onChange={e => dispatch(handleChangeWallet(Number(e.target.value)))} type='number' name="wallet" />
      <input type="submit" value="save" />
    </form>
  )
}