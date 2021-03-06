import * as express from 'express';
import { Item, Profile } from '../models'
import { IItem, IUser, IProfile } from '../interfaces';
const router = express.Router();
import * as multer from 'multer';
import * as path from 'path';
import { Request } from 'express';

const upload = multer({ dest: "src/static/uploads" });

router.route('/')
  .get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json(`Error: ${err}`));
  })
  .put(upload.single("image"), async (req, res) => {
    console.log(req);
    const item = req.body as IItem
    const user = req.user as IUser
    const file = req.file;
    item.owner_id = user._id
    console.log(file);
    item.image = path.join(file.destination.split('/')[2], file.filename);
    const newItem = new Item({ ...item })
    newItem.save();
    const profile = await Profile.findById(user.profile_id);
    profile.items.own = [...profile.items.own, newItem];
    await profile.save();
    res.status(200).json();
  })

router.post("/:id/buy", async (req, res) => {
  const user = req.user as IUser;
  const item = await Item.findById(req.params['id']);
  const profile = await Profile.findById(user.profile_id);
  item.state = 'sold';
  profile.items.bought = [...profile.items.bought, item]
  profile.wallet = profile.wallet - item.price;
  try {
    await profile.save();
    await item.save();
  } catch (e) {
    res.status(500).json();
  }
  res.json({ item, profile });
})

export const itemsRouter = router