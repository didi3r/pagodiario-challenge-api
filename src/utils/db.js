import mongoose from 'mongoose';
import options from '../config';

/*
 * Generic function to connect to mongo instance
 */
export const connect = (url = options.dbUrl, opts = {}) => {
  let mongoUrl = url;
  // Connects to a temporal DB if unit tests are running
  if (options.isTest) {
    mongoUrl = mongoUrl + '-' + Math.floor(Math.random() * Math.floor(10));
  }
  console.log('mongoUrl', mongoUrl);

  return mongoose
    .connect(mongoUrl, {
      ...opts,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() =>
      console.log(`DB Connected: ${mongoose.connection.db.databaseName}`)
    )
    .catch(err => console.log(`DB Connection Error: ${err.message}`));
};
