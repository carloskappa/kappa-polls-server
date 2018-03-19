export default {
  Mutation: {
    createTopic: async (parent, { pollId, value }, { models }) => {
      try {
        await models.Topic.create({ poll_id: pollId, value });
        return true;
      } catch (err) {
        return false;
      }
    }
  }
};
