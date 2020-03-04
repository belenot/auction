import React from 'react';
import { Grid, Typography, Paper, Card, CardHeader, CardContent, Toolbar, Button, CardActions, useTheme } from '@material-ui/core';
import { Item as ItemInterface } from '../types';
import { makeStyles } from '@material-ui/styles';
import { useAuctionTheme, auctionTheme } from '../styles';

export interface ItemProps {
  item: ItemInterface;
  onBuyClick: () => {};
  children?: any
}

const itemCardStyle: React.CSSProperties = {
  boxShadow: '0 0 10px white'
}

function itemCardHeaderStyle(color: string): React.CSSProperties {
  return {
    background: color
  }
}
type CSS = React.CSSProperties;

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { item } = props;

  const styles: { root: CSS, cardHeader: CSS } = {
    root: {
      boxShadow: "0 0 10px white",
    },
    cardHeader: {
      background: auctionTheme.headerBackgroundColor
    }
  }

  return (
    <Card style={styles.root}>
      <CardHeader
        title={item.name}
        subheader={item.state}
        style={styles.cardHeader}
      />
      <CardContent>
        <Typography color={'primary'}>Description:</Typography>
        <Typography color={'secondary'}>{item.description}</Typography>
        <Typography color={'primary'}>Price:</Typography>
        <Typography color={'secondary'}>{item.price}$</Typography>
      </CardContent>
      <CardActions>
        <Button variant={'outlined'} color={'primary'}>Buy</Button>
        <Button variant={'outlined'} color={'primary'}>Bet</Button>
        <Button variant={'text'} color={'primary'}>View</Button>
      </CardActions>
    </Card >
  )
}