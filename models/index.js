const Sequelize = require("sequelize");

const sequelize = new Sequelize("polls", "postgres", "postgres", {
  dialect: "postgres"
});

const models = {
  User: sequelize.import("./user"),
  Poll: sequelize.import("./poll"),
  Topic: sequelize.import("./topic")
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
