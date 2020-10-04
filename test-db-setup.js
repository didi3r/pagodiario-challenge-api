import mongoose from 'mongoose';
import _ from 'lodash';
import { connect } from './src/utils/db';
import { User } from './src/resources/user/user.model';

/*
 * This file is used to prepare the environment before running the
 * unit tests. Meaning, set up a local mongo testing DB (different than the "real" one)
 * and setting up some data to be able to do de assertions
 */
const models = { User };

// Saves an ID to used later in the tests
global.newId = () => {
  return mongoose.Types.ObjectId();
};
global.savedId = global.savedId || global.newId();

const remove = collection =>
  new Promise((resolve, reject) => {
    collection.deleteMany(err => {
      if (err) return reject(err);
      resolve();
    });
  });

/*
 * Creates 2 records before each test to have some data to test
 * the endpoints
 */
beforeEach(async done => {
  const initializeCollections = async () => {
    await mongoose.models.user.create({
      /*
       * Saves this record with a hardcoded ID to
       * be able to manipulate it later
       */
      _id: global.savedId,
      name: 'Jose',
      middleName: 'Perez',
      lastName: 'Leon',
      rfc: 'XAXX010101000',
      birthDate: '1990-01-01T06:00:00.000Z'
    });

    await mongoose.models.user.create({
      name: 'Maria',
      middleName: 'Guadalupe',
      lastName: 'Reyes',
      rfc: 'XAXX010101001',
      birthDate: '1990-01-01T06:00:00.000Z'
    });
  };

  const resetDB = async () => {
    await Promise.all(_.map(mongoose.connection.collections, c => remove(c)));
    await initializeCollections();
  };

  if (mongoose.connection.readyState === 0) {
    try {
      await connect();
      await resetDB();
      await Promise.all(Object.keys(models).map(name => models[name].init()));
    } catch (e) {
      console.log('Connection error');
      console.error(e);
      throw e;
    }
  } else {
    await resetDB();
  }
  done();
});

/*
 * Cleans up the collection after each test
 */
afterEach(async done => {
  await mongoose.connection.db.dropDatabase(() =>
    console.log(`DB Dropped: ${mongoose.connection.db.databaseName}`)
  );
  return done();
});

afterAll(done => {
  return done();
});
