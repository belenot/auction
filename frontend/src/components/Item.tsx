import React from 'react';
import { Grid, Typography, Paper, Card, CardHeader, CardContent, Toolbar, Button, CardActions, useTheme } from '@material-ui/core';
import { Item as ItemInterface } from '../types';
import { makeStyles } from '@material-ui/styles';
import { auctionTheme } from '../styles';

export interface ItemProps {
  item: ItemInterface;
  onBuyClick: () => void;
  children?: any
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { item } = props;

  return (
    <div className="item-container papered" >
      <div className="item-container-header">
        <div className="centered">
          <label className="primary-text">{item.name}</label>
        </div>
        <div className="centered">
          <label className="primary-text">{item.state}</label>
        </div>
      </div>
      <div className="item-container-image">
        <img className="item-image" src={`${item.image}`} />
      </div>
      <div className="item-container-content">
        <div>
          <label>Description:</label>
          <label>{item.description}</label>
        </div>
        <div>
          <label>Price:</label>
          <label>{item.price}$</label>
        </div>
      </div>
      <div className="item-container-buttons">
        <button className="btn btn-primary" disabled={item.state != 'active'} onClick={props.onBuyClick}>Buy</button>
        <button className="btn btn-primary" disabled>Bet</button>
        <button className="btn btn-primary" disabled>View</button>
      </div>
    </div >
  )
}