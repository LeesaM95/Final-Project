const typeDefs = `
type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(user: ID!): User
    addPost(blogTitle: String!, blogText: String!, blogAuthor: String!, CreatedAt: Date!): Blogpost
    addComment(
        blogPostId: ID!
        commentText: String!
        commentAuthor: String!
    ): BlogPost
    removePost(blogPostId: ID!): BlogPost
    removeComment(blogPostId: ID!, commentId: ID!): BlogPost
}`




// const typeDefs = `
// type User {
//     _id: ID
//     firstname: String
//     lastname: String
//     username: String
//     email: String
//     password: String
//     blogPost: [blogPost!]
// }
// type BlogPost {
//     _id: ID
//     blogTitle: String
//     blogText: String
//     blogAuthor: String
//     createdAt: Date
//     comments: [
//         commentText: String,
//         commentAuthor: String,
//         createdAt: Date
//     ]
// }
// type Auth {
//     token: ID!
//     user: User
// }

// type Query {
//     users: [User]
//     user(username: String!): User
//     blogPost(username: String): [BlogPost]
//     blogPost(blogPostId: ID!): BlogPost
//     me: User
// }

// type Mutation {
//     addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
//     updateUser(firstname: String, lastname: String, username: String, email: String, password: String): Auth
//     deleteUser(userId: ID!): User
//     login(username: String!, password: String!): Auth
//     addPost(blogText: String!): BlogPost
//     addComment(blogPostId: ID!, commentText: String!): BlogPost
//     removeBlogPost(blogPostId: ID!): BlogPost
//     removeComment(blogPostId: ID!, commentId: ID!): BlogPost
    
// }`

// module.exports = typeDefs;
module.exports = typeDefs;
