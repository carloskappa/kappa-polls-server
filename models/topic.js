export default (sequelize, DataTypes) => {
  var Topic = sequelize.define(
    "topic",
    {
      value: DataTypes.STRING,
      votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    { underscored: true }
  );

  Topic.associate = models => {
    Topic.belongsTo(models.Poll);
  };

  return Topic;
};
