import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

/*
 * User Entity definition. Based on requirements
 * NOTE: The id was left as uuid type string by decision instead of Integer
 * auto-increment because mongo by default uses uuid. (KISS)
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    middleName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    rfc: {
      type: String,
      required: true,
      unique: true
    },
    birthDate: {
      type: Date
    }
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, { message: '{VALUE} already exists' });
export const User = mongoose.model('user', userSchema);
