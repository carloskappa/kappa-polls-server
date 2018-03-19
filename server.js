import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import models from "./models";
import path from "path";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

const typeArrays = fileLoader(path.join(__dirname, "./schemas"));
const resolversArray = fileLoader(path.join(__dirname, "./resolvers"));

const typeDefs = mergeTypes(typeArrays);
const resolvers = mergeResolvers(resolversArray);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const app = express();

const graphqlEndpoint = "/graphql";

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
      user: {
        id: 2
      }
    }
  })
);
app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
