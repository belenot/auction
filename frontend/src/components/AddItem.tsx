import * as React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction, RootDispatch } from '../actions/types';
import { handleAddItem, addItemRequestAsync } from '../actions';

export const AddItem: React.FC = () => {
  const state = useSelector((state: RootState) => state.addItem);
  const dispatch = useDispatch<RootDispatch>();

  function handleInput(key: string, value: string | number) {
    dispatch(handleAddItem({ ...state, [key]: value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      dispatch(handleAddItem({ ...state, image: file }));
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('submit');
    e.preventDefault();
    dispatch(addItemRequestAsync(state));
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input value={state.name} onChange={(e) => handleInput('name', e.target.value)} type='text' placeholder="Name" name='name' />
      <input value={state.description} onChange={(e) => handleInput('description', e.target.value)} placeholder="Description" name='description' />
      <input value={state.price} onChange={(e) => handleInput('price', e.target.value)} placeholder="Price" name='price' />
      <input onChange={e => handleFile(e)} type='file' name='image' />
      <button type='submit'>Add</button>
    </form>
  )
}