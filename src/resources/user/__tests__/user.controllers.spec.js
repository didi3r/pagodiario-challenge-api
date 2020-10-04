import controllers from '../user.controllers';
import { isFunction } from 'lodash';

describe('User controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = ['fetchById', 'fetchAll', 'create', 'remove', 'update'];

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    );
  });
});
