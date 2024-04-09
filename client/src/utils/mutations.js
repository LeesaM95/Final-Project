import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
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
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const UPDATE_USERNAME = gql`
mutation updateUsername($username: String!) {
  updateUsername(username: $username) {
    _id
    username
  }
}`;

export const UPDATE_EMAIL = gql`
mutation updateEmail($email: String!) {
  updateEmail(email: $email) {
    _id
    email
  }
}`;

export const UPDATE_PASSWORD = gql`
mutation updatePassword($email: String!, $password: String!) {
  updatePassword(password: $password) {
    _id
    email
    password
  }
}`

export const DELETE_ACCOUNT = gql`
mutation deleteAccount($username: String!, $password: String!) {
  deleteAccount(username: $username, password: $password) {
    _id
    email
    password
  }
}` ;