export default `
type Poll {
    id: String!
    name: String!
    topics: [Topic!]
    owner: Int!
}

type Query {
    poll(id: Int!): Poll!
    polls(last: Int): [Poll!]!
}

type Mutation {
    createPoll( name: String!): Poll!
    addTopic(id: Int!, topic: String!): Poll!
}

`;
