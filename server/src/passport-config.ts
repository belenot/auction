import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from './models';
import * as bcrypt from 'bcrypt';
import { IUser } from './interfaces';

export default function (passport: passport.PassportStatic) {
  passport.use(new LocalStrategy((username, password, done) => {
    console.log(JSON.stringify({ username, password }))
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      return bcrypt.compare(password, user.password)
        .then(isValidPassword => {
          if (!isValidPassword) {
            return done(null, false, { message: "Incorrect password" });
          } else {
            return done(null, user);
          }
        })
        .catch(e => {
          return done(null, false, { message: "Incorrect password" });
        })
    })
  }))

  passport.serializeUser<IUser, number>((user, done) => {
    done(null, user.id);
  })
  passport.deserializeUser<IUser, number>(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  })
}