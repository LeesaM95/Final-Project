import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      username
      comments {
        _id
        text
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      text
      author
      
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
    comment(commentId: $commentId) {
      _id
      text
      author
      comments {
        _id
        text
        author
      }
    }
  }
`;

export const QUERY_POSTS = gql`
query getPosts {
  posts {
    _id
    title
    text
    author
    createdAt
  }
}`

export const GET_SINGLE_POST = gql`
query getPost($postId: ID!) {
  post(postId: $postId) {
    _id
    title
    text
    author
    posts {
      _id
      title
      text
      author
    }
  }
}`

export const QUERY_ME = gql`
  query me {
    me {
      email
      firstName
      lastName
      BlogPosts {
        _id
        author
        createdAt
        text
        title
      }
    }
  }
`;
