export default (sequelize, DataTypes) => {
  var Poll = sequelize.define(
    "poll",
    {
      name: DataTypes.STRING,
      topics: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
      }
    },
    { underscored: true }
  );

  Poll.associate = models => {
    Poll.belongsTo(models.User, {
      foreignKey: "owner"
    });
  };

  return Poll;
};
