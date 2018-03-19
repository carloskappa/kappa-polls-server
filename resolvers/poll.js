export default {
  Query: {
    poll: (parent, { id }, { models }) =>
      models.Poll.findOne({ where: { id } }),
    polls: (parent, { last }, { models }) => {
      if (!last) {
        return models.Poll.findAll();
      }
      return models.Poll.findAll({
        limit: last
      });
    }
  },
  Mutation: {
    createPoll: (parent, args, { models, user }) =>
      models.Poll.create({ ...args, owner: user.id })
  },

  Poll: {
    topics: (parent, args, { models, user }) => {
      return models.Topic.findAll({
        where: {
          poll_id: parent.id
        }
      });
    }
  }
};
