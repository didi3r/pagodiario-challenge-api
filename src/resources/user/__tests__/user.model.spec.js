import { User } from '../user.model';

/*
 * This test the collection structure to make sure it complies
 * with the given requirements.
 * NOTE: The id was left as uuid type string by decision instead of Integer
 * auto-increment because mongo by default uses uuid.
 */
describe('User model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = User.schema.obj.name;
      expect(name).toEqual({
        type: String,
        required: true
      });

      const middleName = User.schema.obj.middleName;
      expect(middleName).toEqual({
        type: String,
        required: true
      });

      const lastName = User.schema.obj.lastName;
      expect(lastName).toEqual({
        type: String,
        required: true
      });

      const rfc = User.schema.obj.rfc;
      expect(rfc).toEqual({
        type: String,
        required: true,
        unique: true
      });

      const birthDate = User.schema.obj.birthDate;
      expect(birthDate).toEqual({
        type: Date
      });
    });
  });
});
