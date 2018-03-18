export default (sequelize, DataTypes) => {
  var Topic = sequelize.define(
    "topic",
    {
      value: DataTypes.STRING
    },
    { underscored: true }
  );

  Topic.associate = models => {
    Topic.belongsTo(models.Poll);
  };

  return Topic;
};
