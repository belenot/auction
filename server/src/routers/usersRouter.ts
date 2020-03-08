import { Router } from 'express';
import { User, Profile } from '../models';
import * as bcrypt from 'bcrypt';
import passport = require('passport');
import { withoutField } from '../utils';
import { IUser, UserWithoutPassword, IProfile } from '../interfaces';
const router = Router();

router.route('/')
  .put(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log('put user');
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User();
      const defaultProfile = new Profile();
      defaultProfile.wallet = 0;
      defaultProfile.items = { betted: [], bought: [], own: [] };
      defaultProfile.save();
      user.username = username;
      user.password = hashedPassword;
      user.profile_id = defaultProfile._id;
      try {
        const savedUser = await user.save();
        return res.status(200).json();
      } catch (e) {
        console.log('Error: ' + e);
        return res.status(400).json("Error: " + e)
      }
    } catch (e) {
      console.log("Error: " + e);
      return res.status(500).json('Error');
    }
  })
  .post(passport.authenticate('local'), (req, res) => res.json())
  .get((req, res) => {
    if (req.user) {
      res.json(withoutField((req.user as IUser).toJSON(), "password"));
    } else {
      res.status(401).json('Not authorized');
    }
  })
router.delete('/logout', (req, res) => {
  const authenticated = req.isAuthenticated()
  req.logout()
  res.json({ logout: authenticated });
})
router.route('/profile')
  .post(async (req, res) => {
    const body = req.body as IProfile;
    const user = req.user as IUser;
    const profile = await Profile.findById(user.profile_id);
    profile.items = body.items;
    profile.wallet = body.wallet;
    res.json(await profile.save());
  })
  .get(async (req, res) => {
    res.send(await Profile.findById((req.user as IUser).profile_id));
  })
router.route('/profile/wallet')
  .patch(async (req, res) => {
    const user = req.user as IUser;
    const profile = await Profile.findById(user.profile_id);
    profile.wallet = (req.body as { wallet: number }).wallet
    await profile.save()
    res.json({ wallet: profile.wallet });
  })

export const usersRouter = router;