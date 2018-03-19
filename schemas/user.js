export default `
type User {
    id: Int!
    username: String!
    polls: [Poll!]!
}

type Query {
    user(id: Int!): User!
    users: [User!]!
}

type Mutation {
    createUser(username: String!, password: String!): User!
}
`;
