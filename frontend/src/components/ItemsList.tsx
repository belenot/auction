import React, { Dispatch, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers'
import { getItemsRequestAsync } from '../actions';
import { RootAction } from '../actions/types';
import { Item } from './Item';

export const ItemsList: React.FC = (props: any) => {
  const state = useSelector((state: RootState) => state.itemsList);
  const dispatch = useDispatch<Dispatch<RootAction>>();

  useEffect(function () {
    dispatch(getItemsRequestAsync());
  }, []);

  return (
    <div >
      {state.items.map(item =>
        <div key={item._id}>
          <Item item={item} onBuyClick={() => { return {} }} />
        </div>
      )}
    </div>
  )
}