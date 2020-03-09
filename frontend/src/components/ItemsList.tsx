import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers'
import { getItemsRequestAsync, buyRequestAsync } from '../actions';
import { RootAction, RootDispatch } from '../actions/types';
import { Item } from './Item';
import { Item as IItem } from '../types';

export const ItemsList: React.FC = (props: any) => {
  const state = useSelector((state: RootState) => state.itemsList);
  const dispatch = useDispatch<RootDispatch>();

  useEffect(function () {
    dispatch(getItemsRequestAsync());
  }, []);

  function onBuy(id: IItem['_id']) {
    dispatch(buyRequestAsync(id));
  }

  return (
    <div >
      {state.items.map(item =>
        <div key={item._id}>
          <Item item={item} onBuyClick={() => onBuy(item._id)} />
        </div>
      )}
    </div>
  )
}