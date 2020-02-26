import * as express from 'express';
import { Item } from '../models'
import { IItem } from '../interfaces';
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json(`Error: ${err}`));
  })
  .put((req, res) => {
    const item = req.body as IItem
    const newItem = new Item({ ...item })
    newItem.save();
  })

export const itemsRouter = router