import config from '../../config';
import { User } from './user.model';
import { connect } from '../../utils/db';
import { crudControllers } from '../../utils/crud';

/*
 * Example of how to override the generic CRUD methods
 * This method is redundant but for demonstration purposes I'm overriding it
 * to display a custom 404 message
 */
export const fetchById = async (req, res) => {
  console.log('Model => Read fetchById');
  try {
    await connect(config.dbUrl);
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).exec();

    if (!user) {
      return res.status(404).send({
        title: 'Not found',
        message: "Couldn't find the resource you are looking for"
      });
    }

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send({ title: 'Internal Error', message: e.message });
  }
};

export default {
  ...crudControllers(User),
  fetchById
};
