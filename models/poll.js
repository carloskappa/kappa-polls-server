export default (sequelize, DataTypes) => {
  var Poll = sequelize.define(
    "poll",
    {
      topics: DataTypes.ARRAY(DataTypes.STRING)
    },
    { underscored: true }
  );

  Poll.associate = models => {
    Poll.belongsTo(models.User);
  };

  return Poll;
};
