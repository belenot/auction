import * as React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export const AddItem: React.FC = () => {
  return (
    <Grid component={"form"} container>
      <TextField label="Name" />
      <TextField label="Description" />
      <TextField label="Price" />
      <Button>Add</Button>
    </Grid>
  )
}