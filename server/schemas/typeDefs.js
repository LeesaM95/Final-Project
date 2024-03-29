const typeDefs = `
type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
    comments: [Comment]!
}
type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}
type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    comment(commentId: ID!): Comment
    me: User
}

type Mutation {
    addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
    updateUser(firstname: String, lastname: String, username: String, email: String, password: String): Auth
    deleteUser(userId: ID!): User
    login(username: String!, password: String!): Auth
    
}`

module.exports = typeDefs;