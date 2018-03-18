export default `
    type User {
        id: Int!
        username: String!
    }

    type Topic {
        id: Int!
        value: String!
    }

    type Poll {
        id: String!
        topics: [Topic]
    }

    t
`;
