export default {
  Query: {
    user: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } }),
    users: (parent, args, { models }) => {
      return models.User.findAll();
    }
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args)
  },

  User: {
    polls: (parent, args, { models }) => {
      return models.Poll.findAll({
        where: {
          owner: parent.id
        }
      });
    }
  }
};
