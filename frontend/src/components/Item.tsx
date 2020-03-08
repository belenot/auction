import React from 'react';
import { Grid, Typography, Paper, Card, CardHeader, CardContent, Toolbar, Button, CardActions, useTheme } from '@material-ui/core';
import { Item as ItemInterface } from '../types';
import { makeStyles } from '@material-ui/styles';
import { auctionTheme } from '../styles';

export interface ItemProps {
  item: ItemInterface;
  onBuyClick: () => {};
  children?: any
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { item } = props;

  return (
    <div >
      <div>
        <label>{item.name}</label>
        <label>{item.state}</label>
      </div>
      <div>
        <div className="item-image" style={{ background: `url(${item.image})` }} />
      </div>
      <div>
        <label>Description:</label>
        <label>{item.description}</label>
        <label>Price:</label>
        <label>{item.price}$</label>
      </div>
      <div>
        <button>Buy</button>
        <button>Bet</button>
        <button>View</button>
      </div>
    </div >
  )
}