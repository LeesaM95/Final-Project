
const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
}

type BlogPost {
    _id: ID
    title: String
    text: String
    author: String
    createdAt: String
    comments: [Comment]!
}

type Comment {
    _id: ID
    text: String
    author: String
    createdAt: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [BlogPost]
    post(blogPostId: ID!): BlogPost
    me: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(user: ID!): User
    addPost(title: String!, text: String!, author: String!, CreatedAt: Date!): BlogPost
    addComment(
        blogPostId: ID!
        text: String!
        author: String!
    ): BlogPost
    removePost(blogPostId: ID!): BlogPost
    removeComment(blogPostId: ID!, commentId: ID!): BlogPost    
}`


module.exports = typeDefs;
