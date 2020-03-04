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
    <Grid container spacing={4}>
      {state.items.map(item =>
        <Grid key={item._id} item xs={3}>
          <Item item={item} onBuyClick={() => { return {} }} />
        </Grid>
      )}
    </Grid>
  )
}