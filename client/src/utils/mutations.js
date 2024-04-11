import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        password
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($text: String!) {
    addComment(text: $text) {
      _id
      text
      author
    }
  }
`;

export const ADD_POST = gql`
mutation addPost($title: String!, $text: String!, $author: String!) {
  addPost(title: $title, text: $text, author: $author) {
    _id
    title
    text
    author
  }
}` ;