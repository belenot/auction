import * as express from 'express';
import * as mongoose from 'mongoose'
import { itemsRouter } from './routers/itemsRouter'
import { usersRouter } from './routers/usersRouter'
import * as session from 'express-session';
import * as passport from 'passport';
import passportConfig from './passport-config'
import * as path from 'path';
passportConfig(passport);

const server = express();

server.use(session({ secret: 'secret' }))
server.use(express.static(path.join(__dirname, 'static')));
server.use(express.json());
server.use(passport.initialize());
server.use(passport.session());
server.use('/users', usersRouter);
server.use('/items', itemsRouter);
server.use((req, res, next) => {
  if (!req.isAuthenticated()) return res.status(401).json({ error: "not authenticated" });
  else next();
})



mongoose.connect(
  'mongodb://172.17.0.2:27017/auction',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
const connection = mongoose.connection;

server.listen(5000);