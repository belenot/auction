import * as express from 'express';
import { Item } from '../models'
import { IItem, IUser } from '../interfaces';
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json(`Error: ${err}`));
  })
  .put((req, res) => {
    console.log(req);
    const item = req.body as IItem
    const user = req.user as IUser
    item.owner_id = user._id
    const newItem = new Item({ ...item })
    newItem.save();
    res.status(200).json();
  })

export const itemsRouter = router