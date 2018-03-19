export default (sequelize, DataTypes) => {
  var User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    { underscored: true }
  );
  User.associate = models => {
    User.hasMany(models.Poll);
  };
  return User;
};
