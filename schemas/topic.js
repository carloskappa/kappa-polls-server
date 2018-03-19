export default `
    type Topic {
        id: Int!
        value: String!
        pollId: Int!
        votes: Int!
    }

    type Mutation {
        createTopic(pollId: Int!, value: String!): Boolean!
    }
    
`;
